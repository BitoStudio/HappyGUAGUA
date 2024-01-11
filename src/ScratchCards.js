import ScratchCard from './scratchCard.js';

export default class ScratchCards {
    constructor(id) {
        const card1 = new ScratchCard(id + '-1', {
            cover: 'assets/silver.jpg',
            brush: 'assets/brush.png',
            brushSize: 30,
            callbackRatio: 70,
            callback: () => {
                console.log('my callback function 1');
            }
        })

        const card2 = new ScratchCard(id + '-2', {
            cover: 'assets/silver.jpg',
            brush: 'assets/tbr.png',
            brushSize: 30,
            callbackRatio: 70,
            callback: () => {
                console.log('my callback function 2');
            }
        })

        const card3 = new ScratchCard(id + '-3', {
            cover: 'assets/silver.jpg',
            brush: 'assets/tbr.png',
            brushSize: 30,
            callbackRatio: 70,
            callback: () => {
                console.log('my callback function 3');
            }
        })
    }
}