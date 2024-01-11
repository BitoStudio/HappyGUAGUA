import ScratchCard from './scratchCard.js';

export default class ScratchCards {

    constructor(id) {
        const card1 = new ScratchCard(id + '-1', {
            cover: 'assets/silver.jpg',
            brush: 'assets/brush.png',
            brushSize: 30,
            callbackRatio: 70,
            callback: Mycallback1
        })

        const card2 = new ScratchCard(id + '-2', {
            cover: 'assets/silver.jpg',
            brush: 'assets/tbr.png',
            brushSize: 30,
            callbackRatio: 70,
            callback: Mycallback2
        })

        const card3 = new ScratchCard(id + '-3', {
            cover: 'assets/silver.jpg',
            brush: 'assets/tbr.png',
            brushSize: 30,
            callbackRatio: 70,
            callback: Mycallback3
        })

        function Mycallback1() {
            console.log('my callback function 1');
        }
        function Mycallback2() {
            console.log('my callback function 2');
        }
        function Mycallback3() {
            console.log('my callback function 3');
        }
    }
}