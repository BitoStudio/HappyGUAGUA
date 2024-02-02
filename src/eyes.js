export default class Eyes {
    constructor(id, dragon, data) {
        this.dragon = dragon
        this.speed = 0.001
        this.data = data

        this.watchRate = 0
        this.watchDir = { x: 0, y: 0 }
        this.seeds = { x: Math.random(), y: Math.random() }
        this.touched = false

        this.pupils = $(this.dragon.pattern).find('.pupil');

        this.updatePosition()

        window.addEventListener('touchmove', this.handleMouseMove.bind(this), false);
        window.addEventListener('touchstart', this.handleMouseDown.bind(this), false);
        window.addEventListener('touchend', this.handleMouseUp.bind(this), false);
    }

    updatePosition() {
        this.pupils.each((index, pupil) => {
            const range = this.computePosition(this.dragon.area, this.data.pos[index]);
            const size = this.dragon.area.w * this.data.scale;

            this.displacement = size * 0.2;
            $(pupil).width(size).height(size);

            if (this.dragon.data.align == 'top') {
                $(pupil).css({
                    'top': `${range.top - size / 2}px`,
                    'left': `${range.left - size / 2}px`
                });
            } else {
                $(pupil).css({
                    'bottom': `${range.bottom - size / 2}px`,
                    'left': `${range.left - size / 2}px`
                });
            }
        });
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
        this.pupils.each((index, pupil) => {
            const { left, top, width, height } = pupil.getBoundingClientRect();

            const center = {
                x: left + width / 2,
                y: top + height / 2
            };

            const touch = {
                x: e.touches[0].clientX,
                y: e.touches[0].clientY
            };

            const dir = {
                x: touch.x - center.x,
                y: touch.y - center.y
            };

            const magnitude = Math.sqrt(dir.x ** 2 + dir.y ** 2);

            this.watchDir = {
                x: dir.x / magnitude * this.displacement * this.data.displaceScale.x,
                y: dir.y / magnitude * this.displacement * this.data.displaceScale.y
            };
        });
    }

    lerp(a, b, t) {
        return a + t * (b - a);
    }

    update(elapsed) {
        this.watchRate += this.touched ? 0.05 : -0.02;
        this.watchRate = Math.max(0, Math.min(this.watchRate, 1));

        const noiseX = Math.sin(elapsed * this.speed + this.seeds.x * Math.PI * 2) * this.displacement * this.data.displaceScale.x;
        const noiseY = Math.cos(elapsed * this.speed + this.seeds.y * Math.PI * 2) * this.displacement * this.data.displaceScale.y;
        const x = this.lerp(noiseX, this.watchDir.x, this.watchRate);
        const y = this.lerp(noiseY, this.watchDir.y, this.watchRate);

        this.pupils.each((index, pupil) => {
            $(pupil).css('transform', `translate(${x}px, ${y}px)`);
        });
    }
}