export default class Sound {
    constructor() {
        this.audio = new Audio('../assets/sound/writing-on-paper-6988.mp3')
        this.audio.loop = true
    }

    play() {
        const context = new (window.AudioContext || window.webkitAudioContext)();
        const source = context.createMediaElementSource(this.audio);
        this.gainNode = context.createGain();
        source.connect(this.gainNode);
        this.gainNode.connect(context.destination);
        this.audio.play()
    }

    setVolume(volume) {
        if (!this.audio.paused)
            this.gainNode.gain.value = volume
    }
}