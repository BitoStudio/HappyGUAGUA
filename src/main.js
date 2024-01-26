import Time from "./Util/Time.js";
import End from "./end.js";
import Pattern1 from "./pattern1.js";
import Pattern2 from "./pattern2.js";
import Pattern3 from "./pattern3.js";
import Sound from "./sound.js";

export default class Main {

    constructor(id) {
        this.id = id
        this.end = new End(this)
        this.sound = new Sound()
        this.time = new Time()
        this.time.on('tick', () => {
            this.pattern.update(this.time)
        })

        this.init()
    }

    onStarted() {
        this.sound.play()
    }

    init() {
        switch (this.id) {
            case 1:
                this.pattern = new Pattern1(this)
                break;
            case 2:
                this.pattern = new Pattern2(this)
                break;
            case 3:
                this.pattern = new Pattern3(this)
                break;
        }
    }

    replay() {
        this.id = (this.id + 1) % 3 + 1
        this.init()
    }
}
