import ScratchHolder from "./scratchHolder.js"
import source from "./source.js";
import Dragon from "./dragon.js";
import Sound from "./sound.js";

export default class Pattern {

    constructor(id, onFinished) {
        const data = source.patterns[id - 1]

        const patternId = 'pattern-' + id;

        const pattern = document.getElementById(patternId);
        pattern.style.display = "flex";
        pattern.style.backgroundImage = `url(${data.bgTex})`

        this.scratchHolder = new ScratchHolder(id, source.scratchs, () => onFinished())
        this.dragon = new Dragon(id, data.dragon)

        this.sound = new Sound()
    }

    update(t) {
        if (this.scratchHolder != null) {
            this.scratchHolder.update()
            this.sound.setVolume(this.scratchHolder.value)
        }

        if (this.dragon.ready)
            this.dragon.eyes.update(t.elapsed)
    }

    onStarted() {
        this.sound.play()
    }
}