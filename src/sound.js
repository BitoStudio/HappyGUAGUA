export default class Sound {
    constructor() {
        this.audio = new Audio('../assets/sound/writing-on-paper-6988.mp3')
        this.audio.loop = true
    }

    play() {
        this.audio.play()
    }

    setVolume(volume) {
        this.audio.volume = volume
    }
}