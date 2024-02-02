import ScratchCard from './scratchCard.js';

export default class ScratchHolder {
    constructor(main, data, onFinsihed) {
        this.main = main
        const id = this.main.id
        const body = document.body
        this.onFinsihed = onFinsihed

        body.addEventListener('touchmove', handleTouchMove.bind(this), { passive: false });
        body.addEventListener('touchend', handleTouchUp.bind(this));

        this.value = 0
        this.increaseRate = 0.05;
        this.decreaseRate = 0.03;
        this.finishedScratch = 0

        this.cards = [
            new ScratchCard(this, id, '1', data[0]),
            new ScratchCard(this, id, '2', data[1]),
            new ScratchCard(this, id, '3', data[2])]

        function handleTouchMove(e) {
            e.preventDefault()
            if (!this.main.scratchable) return

            var touchX = e.clientX || e.touches[0].clientX;
            var touchY = e.clientY || e.touches[0].clientY;

            this.cards.forEach(card => card.receiveTouched({ x: touchX, y: touchY }))
        }

        function handleTouchUp() {
            this.cards.forEach(card => card.resetLastPoint())
        }

        this.scores = 0
    }

    scratchFinish(score) {
        this.scores += score
        this.finishedScratch++;

        if (this.finishedScratch == 3) {
            var result;

            if (this.scores === 3 || this.scores === 4) {
                result = 1;
            } else if (this.scores >= 5 && this.scores <= 7) {
                result = 2;
            } else if (this.scores >= 8 && this.scores <= 9) {
                result = 3;
            }

            this.onFinsihed(result)
        }
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