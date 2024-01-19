import ScratchHolder from "./scratchHolder.js"
import Pattern from "./pattern.js";
import Dragon from "./dragon.js";
import Time from "./Util/Time.js";
import source from "./source.js";
import Sound from "./sound.js";
import End from "./end.js";

export default class Main {
    constructor(id) {
        const data = source.patterns[id - 1]

        this.end = new End()

        const pattern = new Pattern(id, data)

        const scratchHolder = new ScratchHolder(id, source.scratchs, () =>  this.end.show())
        const dragon = new Dragon(id, data.dragon)

        this.sound = new Sound()
        const time = new Time()

        time.on('tick', () => {

            if (scratchHolder != null) {
                scratchHolder.update()
                this.sound.setVolume(scratchHolder.value)
            }
            if (dragon.ready)
                dragon.eyes.update(time.elapsed)
        })
    }

    playSound() {
        this.sound.play()
    }
}