import Eyes from "./eyes.js"

export default class Dragon {
    constructor(id, data) {
        this.data = data

        this.pattern = $('#pattern-' + id);

        this.dragon = this.pattern.find('.dragon')
        this.updateArea()
        this.eyes = new Eyes(id, this, data.eyes)

        $(window).on('resize', () => {
            this.updateArea()
            this.eyes.updatePosition(this.area)
        })

    }

    start() {
        this.dragon.get(0).play()
    }

    stop() {
        this.dragon.get(0).pause()
    }

    updateArea() {
        var aspectNatural = this.data.width / this.data.height

        var rect = this.dragon[0].getBoundingClientRect()
        var aspect = rect.width / rect.height

        var w, h, top, left = 0;
        if (aspectNatural < aspect) {
            h = rect.height
            w = h * aspectNatural
            top = rect.top
            left = rect.left + (rect.width - w) / 2
        }
        else {
            w = rect.width
            h = w / aspectNatural
            top = rect.top + (rect.height - h) / 2;
            left = 0
        }

        this.area = {
            w, h, top, left
        }
    }
}