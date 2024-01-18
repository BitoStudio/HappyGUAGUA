export default class Pattern {
    constructor(id, data) {
        
        const patternId = 'pattern-' + id;

        const element = document.getElementById(patternId);
        element.style.display = "flex";
        element.style.backgroundImage = `url(${data.bgTex})`

        console.log(patternId);
    }
}