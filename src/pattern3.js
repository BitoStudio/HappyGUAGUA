import Cloud from "./cloud.js";
import Pattern from "./pattern.js";

export default class Pattern3 extends Pattern {
    constructor(id, onFinished) {
        super(id, onFinished)

        this.clouds = $('.cloud').toArray().map(e => new Cloud(e))
    }

    update(t) {
        super.update(t)
        this.clouds.forEach(c => c.update(t))
    }
}