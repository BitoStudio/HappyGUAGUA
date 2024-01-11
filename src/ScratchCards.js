import { createScratchCard } from '/src/scratch-card.js'

export default class ScratchCards {
    
    constructor(id) {
        createScratchCard(document.getElementById('cover-' + id + '-1'), {
            cover: 'assets/silver.jpg',
            brush: 'assets/brush.png',
            brushSize: 30,
            callbackRatio: 70,
            callback: Mycallback1
        });

        createScratchCard(document.getElementById('cover-' + id + '-2'), {
            cover: 'assets/silver.jpg',
            brush: 'assets/tbr.png',
            brushSize: 30,
            callbackRatio: 70,
            callback: Mycallback2
        });

        createScratchCard(document.getElementById('cover-' + id + '-3'), {
            cover: 'assets/silver.jpg',
            brush: 'assets/tbr.png',
            brushSize: 30,
            callbackRatio: 70,
            callback: Mycallback3
        });

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