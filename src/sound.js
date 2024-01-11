export default class Sound {
    constructor() {
        this.played = false
        this.audio = new Audio('../assets/sound/writing-on-paper-6988.mp3')
        this.audio.loop = true

        window.addEventListener('mouseup', () => this.played = true);
        window.addEventListener('touchend', () => this.played = true);
    }


    setVolume(volume) {
        if (this.played && this.audio.paused) {
            this.audio.play()
        }
        this.audio.volume = volume
    }
}