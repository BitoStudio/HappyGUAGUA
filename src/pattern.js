import ScratchHolder from "./scratchHolder.js"
import source from "./source.js";
import Dragon from "./dragon.js";

export default class Pattern {

    constructor(main) {
        this.paused = false

        this.main = main
        const id = this.main.id

        const data = source.patterns[id - 1]

        const patternId = '#pattern-' + id;

        $('.pattern').css('display', 'none'); // Hide all elements with class 'pattern'

        const pattern = $(patternId);
        pattern.css({
            'display': 'flex',
        });

        this.scratchHolder = new ScratchHolder(id, source.scratchs, result => {
            this.main.stop()
            this.main.end.show(result)
            this.main.sound.setVolume(0)
        })
        this.dragon = new Dragon(id, data.dragon)
    }

    start() {
        this.paused = false
        this.dragon.start()
    }

    stop() {
        this.paused = true
        this.dragon.stop()
    }

    update(t) {
        if (this.paused) return

        this.scratchHolder.update()
        this.main.sound.setVolume(this.scratchHolder.value)
        this.dragon.eyes.update(t.elapsed)
    }

    reset() {
        this.scratchHolder.reset()
    }
}