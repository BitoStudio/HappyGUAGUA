import ScratchCard from './scratchCard.js';

export default class ScratchCards {
    constructor(id) {
        const body = document.body
        
        body.addEventListener('mousemove', handleMouseMove, { passive: false });
        body.addEventListener('touchmove', handleMouseMove, { passive: false });
        body.addEventListener('mouseup', handleMouseUp);
        body.addEventListener('touchend', handleMouseUp);

        this.value = 0
        this.increaseRate = 0.05;
        this.decreaseRate = 0.03;

        const cards = [new ScratchCard(this, id + '-1', {
            cover: 'assets/textures/test_pattern_health.png',
            brush: 'assets/textures/brush.png',
            brushSize: 30,
            callbackRatio: 70,
            callback: () => {
                console.log('my callback function 1');
            }
        }),

        new ScratchCard(this, id + '-2', {
            cover: 'assets/textures/test_pattern_love.png',
            brush: 'assets/textures/tbr.png',
            brushSize: 30,
            callbackRatio: 70,
            callback: () => {
                console.log('my callback function 2');
            }
        }),

        new ScratchCard(this, id + '-3', {
            cover: 'assets/textures/test_pattern_work.png',
            brush: 'assets/textures/tbr.png',
            brushSize: 30,
            callbackRatio: 70,
            callback: () => {
                console.log('my callback function 3');
            }
        })
        ]

        function handleMouseMove(e) {
            e.preventDefault()

            var touchX = e.clientX || e.touches[0].clientX;
            var touchY = e.clientY || e.touches[0].clientY;

            cards.forEach(card => card.receiveTouched({ x: touchX, y: touchY }))
        }

        function handleMouseUp() {
            cards.forEach(card => card.reset())
        }
    }

    add() {
        this.value += this.increaseRate;
    }

    update() {
        this.value -= this.decreaseRate
        this.value = Math.max(0, Math.min(this.value, 1));
    }
}