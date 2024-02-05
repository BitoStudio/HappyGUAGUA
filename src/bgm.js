export default class Bgm {
    constructor(v=1) {
        this.audio = new Audio('https://bitostudio.github.io/HappyGUAGUA/assets/sound/new_year_music.wav')
        this.audio.loop = true
        this.volume = v
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