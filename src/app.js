import ScratchHolder from "./scratchHolder.js"
import Pattern from "./pattern.js";
import Dragon from "./dragon.js";
import Sound from "./sound.js";
import Time from "./Util/Time.js";
import source from "./source.js";

window.onload = () => {

    // quick debug flag
    const useLoadingPage = true

    // Loading Page
    {
        const loadButton = document.getElementById('loadButton');
        const loadingPage = document.getElementById('loading-page');
        const mainPage = document.getElementById('main-page');

        if (useLoadingPage) {
            loadButton.addEventListener('click', function () {
                loadButton.disabled = true;

                setTimeout(function () {
                    loadingPage.classList.add('hidden');
                    mainPage.classList.remove('hidden');
                }, 2000);
            });
        } else {
            loadingPage.classList.add('hidden');
            mainPage.classList.remove('hidden');
        }
    }


    // Main Page
    {
        const id = Math.floor(Math.random() * 3) + 1;
        const patternData = source.patterns[id - 1]

        const pattern = new Pattern(id, patternData)
        const scratchHolder = new ScratchHolder(id, source.scratchs)
        const dragon = new Dragon(id, patternData.dragon)

        const sound = new Sound()

        const time = new Time()

        time.on('tick', () => {

            if (scratchHolder != null) {
                scratchHolder.update()
                sound.setVolume(scratchHolder.value)
            }
            if (dragon.ready)
                dragon.eyes.update(time.elapsed)
        })
    }
}