import Time from "./Util/Time.js";
import End from "./end.js";
import Pattern1 from "./pattern1.js";
import Pattern2 from "./pattern2.js";
import Pattern3 from "./pattern3.js";

export default class Main {

    constructor(id) {
        this.end = new End()

        switch (id) {
            case 1:
                this.pattern = new Pattern1(id, () => this.end.show())
            case 2:
                this.pattern = new Pattern2(id, () => this.end.show())
            case 3:
                this.pattern = new Pattern3(id, () => this.end.show())
        }

        this.time = new Time()

        this.time.on('tick', () => {
            this.pattern.update(this.time)
        })
    }

    onStarted() {
        this.pattern.onStarted()
    }
}