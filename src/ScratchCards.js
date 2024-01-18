import ScratchCard from './scratchCard.js';

export default class ScratchCards {
    constructor(id, data) {
        const body = document.body

        body.addEventListener('mousemove', handleMouseMove, { passive: false });
        body.addEventListener('touchmove', handleMouseMove, { passive: false });
        body.addEventListener('mouseup', handleMouseUp);
        body.addEventListener('touchend', handleMouseUp);

        this.value = 0
        this.increaseRate = 0.05;
        this.decreaseRate = 0.03;

        const cards = [new ScratchCard(this, '1', data[0],
            () => {
                console.log('my callback function 1');
            }),

        new ScratchCard(this, '2', data[1],
            () => {
                console.log('my callback function 1');
            }),

        new ScratchCard(this, '3', data[2],
            () => {
                console.log('my callback function 1');
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