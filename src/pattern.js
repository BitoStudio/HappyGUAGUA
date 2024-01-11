export default class Pattern {
    constructor(id) {
        var patternId = 'pattern-' + id;
        var renderer = document.getElementById(patternId);
        console.log(patternId);
        renderer.style = "display: block;";
    }
}