export default class Pattern {
    constructor(id) {
        const imgData = {
            1: 'url(/assets/textures/test_v2_bg.png)',
            2: 'url(/assets/textures/test_v2_picture.png)',
            3: 'url(/assets/textures/test_v1_picture.png)'
        }

        const patternId = 'pattern-' + id;

        const element = document.getElementById(patternId);
        element.style.display = "block";
        element.style.backgroundImage = imgData[id]

        console.log(patternId);
    }
}