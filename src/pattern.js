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

        this.scratchHolder = new ScratchHolder(main, source.scratchs, result => {
            this.main.pause()
            this.main.end.show(result)
            this.main.sound.setVolume(0)
        })
        this.dragon = new Dragon(id, data.dragon)
    }

    play() {
        this.paused = false
        this.dragon.play()
    }

    pause() {
        this.paused = true
        this.dragon.pause()
    }

    update(t) {
        if (this.paused) return

        this.scratchHolder.update()
        this.main.sound.setVolume(this.scratchHolder.value)
        this.dragon.update(t.elapsed)
    }

    reset() {
        this.scratchHolder.reset()
    }
}