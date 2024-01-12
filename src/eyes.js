export default class Eyes {
    constructor() {
        window.addEventListener('mousemove', handleMouseMove, false);
        window.addEventListener('touchmove', handleMouseMove, false);

        this.speed = 0.0005
        this.displacement = 10


        var lefteye = document.getElementById('eye-left');
        var righteye = document.getElementById('eye-right');

        this.pupils = document.querySelectorAll('.eye-pupil');

        function handleMouseMove(e) {

            eyes.forEach(eye => {
                // Get the mouse position on the horizontal axis
                let mouseX = eye.getBoundingClientRect().right;
                // If it's the left eye we need the left offset instead the right
                if (eye.classList.contains('eye-left')) {
                    mouseX = eye.getBoundingClientRect().left;
                }
                // Now we also need the vertical offset
                let mouseY = eye.getBoundingClientRect().top;
                // Now we are going to calculate the radian value of the offset between the mouse and the eye
                let radianDegrees = Math.atan2(e.pageX - mouseX, e.pageY - mouseY);
                // Let's convert this into a degree based value so we can use it in CSS
                let rotationDegrees = radianDegrees * (180 / Math.PI) * -1 + 180;
                // Now all we have to do is add this degrees to our eye!
                eye.style.transform = `rotate(${rotationDegrees}deg)`;
            })
        }
    }

    update(elapsed) {
        // console.log(noise.perlin2(elapsed * 0.1, 0.1));
        const x = noise.perlin2(elapsed * this.speed, 0.1) * this.displacement
        const y = noise.perlin2(0.1, elapsed * this.speed) * this.displacement



        this.pupils.forEach(pupil => {
            pupil.style.transform = `translate(${x}px, ${y}px)`

        })
    }
}