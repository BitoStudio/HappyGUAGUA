import Time from "./Util/Time.js";
import End from "./end.js";
import Pattern1 from "./pattern1.js";
import Pattern2 from "./pattern2.js";
import Pattern3 from "./pattern3.js";

export default class Main {

    constructor(id) {
        this.id = id
        this.end = new End(() => {
            this.id = (this.id + 1) % 3 + 1
            this.init()
        })

        this.init(id)

        this.time = new Time()

        this.time.on('tick', () => {
            this.pattern.update(this.time)
        })

        $(document).on('keydown', (event) => {
            const keyPressed = event.key || String.fromCharCode(event.keyCode);
            if (keyPressed === '1') {
                this.id = (this.id + 1) % 3 + 1;
                this.init();
            }
        });
    }

    onStarted() {
        this.pattern.onStarted()
    }

    init() {
        switch (this.id) {
            case 1:
                this.pattern = new Pattern1(this.id, () => this.end.show())
                break;
            case 2:
                this.pattern = new Pattern2(this.id, () => this.end.show())
                break;
            case 3:
                this.pattern = new Pattern3(this.id, () => this.end.show())
                break;
        }
    }
}
