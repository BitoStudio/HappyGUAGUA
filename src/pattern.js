import ScratchHolder from "./scratchHolder.js"
import source from "./source.js";
import Dragon from "./dragon.js";

export default class Pattern {

    constructor(main) {
        this.main = main
        const id = this.main.id


        const data = source.patterns[id - 1]

        const patternId = '#pattern-' + id;

        $('.pattern').css('display', 'none'); // Hide all elements with class 'pattern'

        const pattern = $(patternId);
        pattern.css({
            'display': 'flex',
        });

        this.scratchHolder = new ScratchHolder(id, source.scratchs, () => this.main.end.show())
        this.dragon = new Dragon(id, data.dragon)
    }

    update(t) {
        if (this.scratchHolder != null) {
            this.scratchHolder.update()
            this.main.sound.setVolume(this.scratchHolder.value)
        }

        this.dragon.eyes.update(t.elapsed)
    }

    reset() {
        this.scratchHolder.reset()
    }
}