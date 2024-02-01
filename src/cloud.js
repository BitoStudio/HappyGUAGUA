export default class Cloud {
    constructor(element) {
        this.div = $(element)
        this.speed = 0.001 * getRandomNumber(0.5, 1)
        this.distance = 15 * getRandomNumber(0.5, 1)
        this.seed = Math.random()
        this.offset = 0

        const textures = ['/assets/textures/cloud_01.png',
            '/assets/textures/cloud_02.png',
            'assets/textures/cloud_03.png']


        this.div.css('width', `${Math.random() * 30 + 35}%`)

        this.div.children('img').attr('src', textures[Math.floor(Math.random() * 3)])


        this.div.on('touchstart', (e) => {
            e.preventDefault();
            this.div.children('img').animate({ width: "70%" }, 100);
            this.div.children('img').animate({ width: "100%" }, 100);
        })

        function getRandomNumber(min, max) {
            return Math.random() * (max - min) + min;
        }

    }

    update(t) {
        this.offset = Math.sin(t.elapsed * this.speed + this.seed * Math.PI * 2) * this.distance
        this.div.css('transform', `translateX(${this.offset}px)`)
    }
}