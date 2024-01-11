import ScratchCards from "./scratchCards.js";
import Pattern from "./pattern.js";
import Dragon from "./dragon.js";
const patternNum = 3

window.onload = () => {
    const id = Math.floor(Math.random() * patternNum) + 1;

    const pattern = new Pattern(id)
    const scratchCards = new ScratchCards(id)

    const dragon = new Dragon
}