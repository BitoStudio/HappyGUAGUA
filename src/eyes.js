export default class Eyes {
    constructor(id, area, ratio, scale) {
        this.speed = 0.0005
        this.ratio = ratio

        this.watchRate = 0
        this.watchDir = { x: 0, y: 0 }
        this.touched = false
        this.scale = scale

        this.pupils = document.querySelectorAll('.pupil');
        this.updatePosition(area)

        window.addEventListener('touchmove', this.handleMouseMove.bind(this), false);
        window.addEventListener('touchstart', this.handleMouseDown.bind(this), false);
        window.addEventListener('touchend', this.handleMouseUp.bind(this), false);
    }

    updatePosition(area) {
        for (var i = 0; i < this.pupils.length; i++) {
            const range = this.computePosition(area, this.ratio[i])
            const size = area.w * this.scale

            this.displacement = size * 0.08
            this.pupils[i].width = size
            this.pupils[i].height = size
            this.pupils[i].style.top = `${range.top - size / 2}px`
            this.pupils[i].style.left = `${range.left - size / 2}px`
        }
    }

    computePosition(area, ratio) {
        return {
            left: area.left + area.w * ratio.x,
            top: area.top + area.h * ratio.y
        }
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
                x: dir.x / magnitude * this.displacement * 1.5,
                y: dir.y / magnitude * this.displacement * 1.5
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