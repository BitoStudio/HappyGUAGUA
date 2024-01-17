import Eyes from "./eyes.js"

export default class Dragon {
    constructor(id) {
        this.area;
        this.updateArea()
        this.eyes = new Eyes(id, this.area, [{ x: 0.2, y: 0.651 }, { x: 0.225, y: 0.696 }], 0.07)

        window.addEventListener('resize', () => { 
            this.updateArea() 
            this.eyes.updatePosition(this.area)
        })
    }

    updateArea() {
        var dragon = document.querySelector('.dragon');

        var aspectNatural = dragon.naturalWidth / dragon.naturalHeight;
        var rect = dragon.getBoundingClientRect()
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