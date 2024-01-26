import ScratchHolder from "./scratchHolder.js"
import source from "./source.js";
import Dragon from "./dragon.js";
import Sound from "./sound.js";

export default class Pattern {

    constructor(id, onFinished) {
        const data = source.patterns[id - 1]

        const patternId = '#pattern-' + id;

        $('.pattern').css('display', 'none'); // Hide all elements with class 'pattern'

        const pattern = $(patternId);
        pattern.css({
            'display': 'flex',
        });

        this.scratchHolder = new ScratchHolder(id, source.scratchs, () => onFinished())
        this.dragon = new Dragon(id, data.dragon)

        this.sound = new Sound()
    }

    update(t) {
        if (this.scratchHolder != null) {
            this.scratchHolder.update()
            this.sound.setVolume(this.scratchHolder.value)
        }

        this.dragon.eyes.update(t.elapsed)
    }

    onStarted() {
        this.sound.play()
    }

    reset() {
        this.scratchHolder.reset()
    }
}