export default class Pattern {
    constructor(id) {
        console.log(document.body);

        const imgData = {
            1: 'url(/assets/textures/test_v1_picture_300dpi.png)',
            2: 'url(/assets/textures/test_v2_picture.png)',
            3: 'url(/assets/textures/test_v1_picture.png)'
        }
        document.body.style.backgroundImage = imgData[id]

        const patternId = 'pattern-' + id;
        const renderer = document.getElementById(patternId);
        renderer.style = "display: block;";


        console.log(patternId);
    }
}