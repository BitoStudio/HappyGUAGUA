import ScratchCards from "./scratchCards.js";
import Pattern from "./pattern.js";
import Dragon from "./dragon.js";
import Sound from "./sound.js";
import Time from "./Util/Time.js";
import source from "./source.js";
const patternNum = 3

window.onload = () => {
    const id = 1//Math.floor(Math.random() * patternNum) + 1;
    const data = source.pattern[id-1]
    console.log(data);

    const pattern = new Pattern(id)
    const scratchCards = new ScratchCards(id, source.scratchs)
    const dragon = new Dragon(id)

    // const sound = new Sound()

    const time = new Time()

    time.on('tick', () => {

        if (scratchCards != null) {
            scratchCards.update()
            // sound.setVolume(scratchCards.value)
        }
        dragon.eyes.update(time.elapsed)
    })
}