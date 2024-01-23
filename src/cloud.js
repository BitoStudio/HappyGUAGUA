export default class Cloud {
    constructor(element, seed) {
        this.element = element
        this.speed = 0.001 * getRandomNumber(0.5, 1)
        this.distance = 15 * getRandomNumber(0.5, 1)
        this.seed = Math.random()

        const textures = ['/assets/textures/cloud_01.png',
            '/assets/textures/cloud_02.png',
            '/assets/textures/cloud_03.png']

        this.element.src = textures[Math.floor(Math.random() * 3)]

        function getRandomNumber(min, max) {
            return Math.random() * (max - min) + min;
        }
    }

    update(t) {
        const x = Math.sin(t.elapsed * this.speed + this.seed * Math.PI * 2) * this.distance
        this.element.style.transform = `translate(${-50 + x}px, -50px)`
    }
}