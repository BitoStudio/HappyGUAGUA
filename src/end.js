
export default class End {
    constructor(onReply) {
        this.end = document.getElementById('end-overlay')

        this.replay = document.getElementById('end-again')
        this.replay.addEventListener('touchend', () => {
            onReply()
            this.hide()
        })
    }

    show() {
        this.end.style.transition = "opacity 2s ease";
        this.end.classList.remove('hidden');
    }
    hide() {
        this.end.style.transition = "none";
        this.end.classList.add('hidden')
    }
}