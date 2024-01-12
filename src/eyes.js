export default class Eyes {
    constructor(id) {

        this.speed = 0.0005
        this.displacement = 10

        this.watchRate = 0
        this.watchDir = { x: 0, y: 0 }
        this.touched = false

        this.eye = document.getElementById(`eye-container-${id}`);
        this.pupils = this.eye.querySelectorAll('.eye-pupil');

        window.addEventListener('mousemove', this.handleMouseMove.bind(this), false);
        window.addEventListener('touchmove', this.handleMouseMove.bind(this), false);

        window.addEventListener('mousedown', this.handleMouseDown.bind(this), false);
        window.addEventListener('touchstart', this.handleMouseDown.bind(this), false);

        window.addEventListener('mouseup', this.handleMouseUp.bind(this), false);
        window.addEventListener('touchend', this.handleMouseUp.bind(this), false);
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
                x: dir.x / magnitude * this.displacement * 0.7,
                y: dir.y / magnitude * this.displacement * 0.7
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