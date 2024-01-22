import Pattern from "./pattern.js";
import Time from "./Util/Time.js";
import End from "./end.js";

export default class Main {

    constructor(id) {
        this.end = new End()

        this.pattern = new Pattern(id, () => this.end.show())
        this.time = new Time()

        this.time.on('tick', () => {
            this.pattern.update(this.time)
        })
    }

    onStarted() {
        this.pattern.onStarted()
    }
}