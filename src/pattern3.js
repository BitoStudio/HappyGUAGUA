import Cloud from "./cloud.js";
import Pattern from "./pattern.js";

export default class Pattern3 extends Pattern {
    constructor(id, onFinished) {
        super(id, onFinished)

        this.clouds = Array.from(document.querySelectorAll('.cloud'), e => new Cloud(e))
        console.log(this.clouds);
    }

    update(t) {
        super.update(t)
        this.clouds.forEach(c => c.update(t))
    }
}