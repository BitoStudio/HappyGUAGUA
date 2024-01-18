import Eyes from "./eyes.js"

export default class Dragon {
    constructor(id, data) {
        this.dragon = document.querySelector('.dragon')
        this.dragon.src = data.tex

        this.area;
        this.updateArea()
        this.eyes = new Eyes(id, this.area, data.eyes)

        window.addEventListener('resize', () => { 
            this.updateArea() 
            this.eyes.updatePosition(this.area)
        })
    }

    updateArea() {
        var aspectNatural = this.dragon.naturalWidth / this.dragon.naturalHeight;
        var rect = this.dragon.getBoundingClientRect()
        var aspect = rect.width / rect.height

        var w, h, top, left = 0;
        if (aspectNatural < aspect) {
            h = rect.height
            w = h * aspectNatural
            top = 0
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