import ScratchCard from './scratchCard.js';

export default class ScratchCards {
    constructor(id) {
        const body = document.body
        body.addEventListener('mousemove', handleMouseMove, { passive: false });
        body.addEventListener('touchmove', handleMouseMove, { passive: false });


        this.value = 0
        this.increaseRate = 0.05;
        this.decreaseRate = 0.01;

        const cards = [new ScratchCard(this, id + '-1', {
            cover: 'assets/silver.jpg',
            brush: 'assets/brush.png',
            brushSize: 30,
            callbackRatio: 70,
            callback: () => {
                console.log('my callback function 1');
            }
        }),

        new ScratchCard(this, id + '-2', {
            cover: 'assets/silver.jpg',
            brush: 'assets/tbr.png',
            brushSize: 30,
            callbackRatio: 70,
            callback: () => {
                console.log('my callback function 2');
            }
        }),

        new ScratchCard(this, id + '-3', {
            cover: 'assets/silver.jpg',
            brush: 'assets/tbr.png',
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
    }

    add() {
        this.value += this.increaseRate;
    }

    update() {
        this.value -= this.decreaseRate
        this.value = Math.max(0, Math.min(this.value, 1));
    }
}