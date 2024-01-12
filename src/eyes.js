export default class Eyes {
    constructor(id) {

        this.speed = 0.0005
        this.displacement = 10

        this.watchRate = 0

        this.eye = document.getElementById(`eye-container-${id}`);
        this.pupils = this.eye.querySelectorAll('.eye-pupil');

        this.watchDir = 0
        window.addEventListener('mousemove', this.handleMouseMove.bind(this), false);
        window.addEventListener('touchmove', this.handleMouseMove.bind(this), false);
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
                x: dir.x / magnitude * this.displacement,
                y: dir.y / magnitude * this.displacement
            };
            this.watchRate += 0.005
        })
    }

    lerp(a, b, t) {
        return a + t * (b - a);
    }

    update(elapsed) {
        this.watchRate -= 0.01
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