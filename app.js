import { createScratchCard } from "./scratch-card.js";

var canvas = document.getElementById('cover-1');
createScratchCard(canvas, {
    cover: 'assets/transperant.jpg',
    brush: 'assets/brush.png',
    brushSize: 80,
    callbackRatio: 50,
    callback: Mycallback1
});

createScratchCard(document.getElementById('cover-2'), {
    cover: 'assets/silver.jpg',
    brush: 'assets/tbr.png',
    brushSize: 80,
    callbackRatio: 70,
    callback: Mycallback2
});

createScratchCard(document.getElementById('cover-3'), {
    cover: 'assets/silver.jpg',
    brush: 'assets/tbr.png',
    brushSize: 80,
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