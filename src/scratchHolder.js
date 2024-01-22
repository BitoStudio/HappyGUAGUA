import ScratchCard from './scratchCard.js';

export default class ScratchHolder {
    constructor(id, data, onFinsihed) {
        const body = document.body
        this.onFinsihed = onFinsihed

        body.addEventListener('mousemove', handleMouseMove.bind(this), { passive: false });
        body.addEventListener('touchmove', handleMouseMove.bind(this), { passive: false });
        body.addEventListener('mouseup', handleMouseUp.bind(this));
        body.addEventListener('touchend', handleMouseUp.bind(this));

        this.value = 0
        this.increaseRate = 0.05;
        this.decreaseRate = 0.03;
        this.finishedScratch = 0

        this.cards = [
            new ScratchCard(this, id, '1', data[0]),
            new ScratchCard(this, id, '2', data[1]),
            new ScratchCard(this, id, '3', data[2])]

        function handleMouseMove(e) {
            e.preventDefault()

            var touchX = e.clientX || e.touches[0].clientX;
            var touchY = e.clientY || e.touches[0].clientY;

            this.cards.forEach(card => card.receiveTouched({ x: touchX, y: touchY }))
        }

        function handleMouseUp() {
            this.cards.forEach(card => card.resetLastPoint())
        }
    }

    scratchFinish() {
        this.finishedScratch++;
        if (this.finishedScratch == 3)
            this.onFinsihed()
    }

    add() {
        this.value += this.increaseRate;
    }

    update() {
        this.value -= this.decreaseRate
        this.value = Math.max(0, Math.min(this.value, 1));
    }

    reset() {
        this.cards.forEach(card => card.reset());
    }
}