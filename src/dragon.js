import Eyes from "./eyes.js"

export default class Dragon {
    constructor(id, data) {
        this.data = data

        this.ready = false
        this.pattern = $('#pattern-' + id);

        this.dragon = this.pattern.find('.dragon')
        this.updateArea()
        this.eyes = new Eyes(id, this, data.eyes)

        $(window).on('resize', () => {
            this.updateArea()
            this.eyes.updatePosition(this.area)
        })
        this.ready = true
    }

    updateArea() {
        var aspectNatural = this.dragon[0].naturalWidth / this.dragon[0].naturalHeight;
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