export default class Eyes {
    constructor(id, dragon, data) {
        this.dragon = dragon
        this.speed = 0.0005
        this.data = data

        this.watchRate = 0
        this.watchDir = { x: 0, y: 0 }
        this.touched = false

        this.pupils = this.dragon.pattern.querySelectorAll('.pupil');
        this.updatePosition()

        window.addEventListener('touchmove', this.handleMouseMove.bind(this), false);
        window.addEventListener('touchstart', this.handleMouseDown.bind(this), false);
        window.addEventListener('touchend', this.handleMouseUp.bind(this), false);
    }

    updatePosition() {
        for (var i = 0; i < this.pupils.length; i++) {
            const range = this.computePosition(this.dragon.area, this.data.pos[i])
            const size = this.dragon.area.w * this.data.scale

            this.displacement = size * 0.2
            this.pupils[i].width = size
            this.pupils[i].height = size

            if (this.dragon.data.align == 'top') {
                this.pupils[i].style.top = `${range.top - size / 2}px`
                this.pupils[i].style.left = `${range.left - size / 2}px`
            } else {
                this.pupils[i].style.bottom = `${range.bottom - size / 2}px`
                this.pupils[i].style.left = `${range.left - size / 2}px`
            }
        }
    }

    computePosition(area, ratio) {
        const range = this.dragon.data.align == 'top' ? {
            left: area.left + area.w * ratio.x,
            top: area.top + area.h * ratio.y
        } : {
            left: area.left + area.w * ratio.x,
            bottom: area.h * ratio.y
        }
        return range
    }

    handleMouseDown(e) {
        this.touched = true
    }

    handleMouseUp(e) {
        this.touched = false
    }

    handleMouseMove(e) {
        this.pupils.forEach(pupil => {
            const { left, top, width, height } = pupil.getBoundingClientRect()

            const center = {
                x: left + width / 2,
                y: top + height / 2
            }

            const touch = {
                x: e.clientX || e.touches[0].clientX,
                y: e.clientY || e.touches[0].clientY
            }

            const dir = {
                x: touch.x - center.x,
                y: touch.y - center.y
            };

            const magnitude = Math.sqrt(dir.x ** 2 + dir.y ** 2);

            this.watchDir = {
                x: dir.x / magnitude * this.displacement * 0.4,
                y: dir.y / magnitude * this.displacement * 1.2
            };
        })
    }

    lerp(a, b, t) {
        return a + t * (b - a);
    }

    update(elapsed) {
        this.watchRate += this.touched ? 0.05 : -0.02
        this.watchRate = Math.max(0, Math.min(this.watchRate, 1));

        const noiseX = noise.perlin2(elapsed * this.speed, 0.1) * this.displacement
        const noiseY = noise.perlin2(0.1, elapsed * this.speed) * this.displacement
        const x = this.lerp(noiseX, this.watchDir.x, this.watchRate)
        const y = this.lerp(noiseY, this.watchDir.y, this.watchRate)

        this.pupils.forEach(pupil => {
            pupil.style.transform = `translate(${x}px, ${y}px)`
        })
    }
}