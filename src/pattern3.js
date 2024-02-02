import Cloud from "./cloud.js";
import Pattern from "./pattern.js";

export default class Pattern3 extends Pattern {
    constructor(main) {
        super(main)

        this.clouds = $('.cloud').toArray().map(e => new Cloud(e))
    }
    
    update(t) {
        super.update(t)
        if (this.paused) return
        this.clouds.forEach(c => c.update(t))
    }
}