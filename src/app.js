import ScratchCards from "./scratchCards.js";
import Pattern from "./pattern.js";
import Dragon from "./dragon.js";
import Sound from "./sound.js";
import Time from "./Util/Time.js";
const patternNum = 3

window.onload = () => {
    const id = Math.floor(Math.random() * patternNum) + 1;

    const pattern = new Pattern(id)
    const scratchCards = new ScratchCards(id)

    const dragon = new Dragon(id)

    const sound = new Sound()

    const time = new Time()

    time.on('tick', () => {
        scratchCards.update()

        sound.setVolume(scratchCards.value)
        dragon.eyes.update(time.elapsed)
    })
}

