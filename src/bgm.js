export default class Bgm {
    constructor() {
        this.audio = new Audio('/assets/sound/new_year_music.wav')
        this.audio.loop = true
        this.volume = 1
    }

    play() {
        const context = new (window.AudioContext || window.webkitAudioContext)();
        const source = context.createMediaElementSource(this.audio);
        this.gainNode = context.createGain();
        source.connect(this.gainNode);
        this.gainNode.connect(context.destination);
        this.gainNode.gain.value = this.volume;
        this.audio.play()
    }

    setVolume(volume) {
        if (!this.audio.paused)
            this.gainNode.gain.value = volume
    }
}