import ScratchHolder     from "./scratchHolder.js"
import Pattern from "./pattern.js";
import Dragon from "./dragon.js";
import Sound from "./sound.js";
import Time from "./Util/Time.js";
import source from "./source.js";
const patternNum = 3

window.onload = () => {
    const id = 3//Math.floor(Math.random() * patternNum) + 1;
    const patternData = source.patterns[id - 1]

    const pattern = new Pattern(id, patternData)
    const scratchCardHolder = new ScratchHolder(id, source.scratchs)
    const dragon = new Dragon(id, patternData.dragon)

    // const sound = new Sound()

    const time = new Time()

    time.on('tick', () => {

        if (scratchCardHolder != null) {
            scratchCardHolder.update()
            // sound.setVolume(scratchCards.value)
        }
        dragon.eyes.update(time.elapsed)
    })
}