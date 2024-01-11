export default class Pattern {
    constructor(id) {
        const patternId = 'pattern-' + id;
        const renderer = document.getElementById(patternId);
        renderer.style = "display: block;";

        console.log(patternId);
    }
}