import ScratchCard from './scratchCard.js';

export default class ScratchCards {
    constructor(id) {
        this.value = 0
        this.increaseRate = 0.05;
        this.decreaseRate = 0.04;

        this.cards = [new ScratchCard(this, id + '-1', {
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
    }

    add() {
        this.value += this.increaseRate;
    }

    update() {
        this.value -= this.decreaseRate
        this.value = Math.max(0, Math.min(this.value, 1));
        // console.log(this.value);
    }
}