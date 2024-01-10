import { createScratchCard } from "./scratch-card.js";

window.onload = ()=>{

    var page = Math.floor(Math.random() * 3) + 1;
    var pageid = 'pattern-' + page;
    var pagttern = document.getElementById(pageid);
    console.log(pageid);
    pagttern.style = "display: block;";

    var canvas = document.getElementById('cover-1');
    createScratchCard(document.getElementById('cover-' + page + '-1'), {
        cover: 'assets/silver.jpg',
        brush: 'assets/brush.png',
        brushSize: 80,
        callbackRatio: 50,
        callback: Mycallback1
    });

    createScratchCard(document.getElementById('cover-' + page + '-2'), {
        cover: 'assets/silver.jpg',
        brush: 'assets/tbr.png',
        brushSize: 80,
        callbackRatio: 70,
        callback: Mycallback2
    });

    createScratchCard(document.getElementById('cover-' + page + '-3'), {
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
}