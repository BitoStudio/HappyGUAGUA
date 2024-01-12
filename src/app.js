import ScratchCards from "./scratchCards.js";
import Pattern from "./pattern.js";
import Dragon from "./dragon.js";
import Sound from "./sound.js";
import Time from "./Util/Time.js";
const patternNum = 3

window.onload = () => {
    const id = 1//Math.floor(Math.random() * patternNum) + 1;

    const pattern = new Pattern(id)
    const scratchCards = new ScratchCards(id)

    const dragon = new Dragon()

    const time = new Time()
    const sound = new Sound()

    time.on('tick', () => {
        scratchCards.update()
        
        // if (sound.played)
            // sound.setVolume(scratchCards.value)
    })
}

