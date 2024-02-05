export default class SE {
    constructor() {
        this.button = new Audio('https://bitostudio.github.io/HappyGUAGUA/assets/sound/button.mp3')
        this.button.loop = false

        this.stamp = new Audio('https://bitostudio.github.io/HappyGUAGUA/assets/sound/stamp_japan.wav')
        this.stamp.loop = false

        this.celebration = new Audio('https://bitostudio.github.io/HappyGUAGUA/assets/sound/dragon_happy_new_year.wav')
        this.celebration.loop = false
    }

    init() {
        this.context1 = new (window.AudioContext || window.webkitAudioContext)();
        this.source1 = this.context1.createMediaElementSource(this.button);
        this.gainNode1 = this.context1.createGain();
        this.source1.connect(this.gainNode1);
        this.gainNode1.connect(this.context1.destination);
        this.gainNode1.gain.value = 0;
        this.button.play();

        this.context2 = new (window.AudioContext || window.webkitAudioContext)();
        this.source2 = this.context2.createMediaElementSource(this.stamp);
        this.gainNode2 = this.context2.createGain();
        this.source2.connect(this.gainNode2);
        this.gainNode2.connect(this.context2.destination);
        this.gainNode2.gain.value = 0;
        this.stamp.play();

        this.context3 = new (window.AudioContext || window.webkitAudioContext)();
        this.source3 = this.context3.createMediaElementSource(this.celebration);
        this.gainNode3 = this.context3.createGain();
        this.source3.connect(this.gainNode3);
        this.gainNode3.connect(this.context3.destination);
        this.gainNode3.gain.value = 0;
        this.celebration.play();
    }

    playBotton() {
        this.gainNode1.gain.value = 1;
        this.button.play();
    }

    playStamp() {
        this.gainNode2.gain.value = 1;
        this.stamp.play();
    }

    playCelebration() {
        this.gainNode3.gain.value = 1;
        this.celebration.play();
    }
}