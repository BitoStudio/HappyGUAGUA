
var d = document, $d = $(d),
    w = window, $w = $(w),
    wWidth = $w.width(), wHeight = $w.height(),
    particles = $('.particles'),
    particleCount = 0,
    sizes = [
        5
    ],
    colors = [
        '#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5',
        '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4CAF50',
        '#8BC34A', '#CDDC39', '#FFEB3B', '#FFC107', '#FF9800',
        '#FF5722', '#795548', '#9E9E9E', '#607D8B', '#777777'
    ],

    life = 500,
    lifeDecay = 20,
    splashSpeed = 2,
    splashDecay = 0.95,
    mouseX = $w.width() / 2, mouseY = $w.height() / 2;


let prevMouseX;
let prevMouseY;
let prevTimestamp;

function calculateVelocity(currentX, currentY, currentTime) {
    let currentVelocity = 0;

    if (prevMouseX !== undefined && prevMouseY !== undefined && prevTimestamp !== undefined) {
        const deltaX = currentX - prevMouseX;
        const deltaY = currentY - prevMouseY;
        const deltaTime = currentTime - prevTimestamp;

        currentVelocity = {x: deltaX / deltaTime, y: deltaY / deltaTime}
    }

    prevMouseX = currentX;
    prevMouseY = currentY;
    prevTimestamp = currentTime;
    return currentVelocity
}

function updateParticleCount() {
    $('.particle-count > .number').text(particleCount);
};

$w
    .on('resize', function () {
        wWidth = $w.width();
        wHeight = $w.height();
    });

$d
    .on('mousemove touchmove', function (event) {
        mouseX = event.clientX;
        mouseY = event.clientY;
        if (!!event.originalEvent.touches) {
            mouseX = event.originalEvent.touches[0].clientX;
            mouseY = event.originalEvent.touches[0].clientY;
        }

        const currentTime = performance.now(); // Using high-resolution time

        const vel = calculateVelocity(mouseX, mouseY, currentTime);

        createParticle(event, vel);
    })

function createParticle(event, vel) {
    var particle = $('<div class="particle"/>'),
        size = sizes[Math.floor(Math.random() * sizes.length)],
        color = colors[Math.floor(Math.random() * colors.length)],
        negative = size / 2,
        speedHorz = Math.random() * 10,
        speedUp = 0,//Math.random() * 25,
        spinVal = 360 * Math.random(),
        spinSpeed = ((36 * Math.random())) * (Math.random() <= .5 ? -1 : 1),
        otime,
        time = otime = (1 + (.5 * Math.random())) * life,
        top = (mouseY - negative),
        left = (mouseX - negative),
        direction = Math.random() <= .5 ? -1 : 1;

    particle
        .css({
            height: size + 'px',
            width: size + 'px',
            top: top + 'px',
            left: left + 'px',
            background: color,
            transform: 'rotate(' + spinVal + 'deg)',
            webkitTransform: 'rotate(' + spinVal + 'deg)'
        })
        .appendTo(particles);
    particleCount++;
    updateParticleCount();

    var particleTimer = setInterval(function () {
        time = time - lifeDecay;
        vel.x = vel.x * splashDecay;
        vel.y = vel.y * splashDecay;
        // left = left - (speedHorz * direction);
        // top = top - speedUp;
        // speedUp = Math.min(size, speedUp - 0.1);
        left = left + vel.x * splashSpeed;
        top = top + vel.y * splashSpeed;

        spinVal = spinVal + spinSpeed;


        particle
            .css({
                height: size + 'px',
                width: size + 'px',
                top: top + 'px',
                left: left + 'px',
                opacity: ((time / otime) / 2),
                transform: 'rotate(' + spinVal + 'deg)',
                webkitTransform: 'rotate(' + spinVal + 'deg)'
            });

        if (time <= 0 || left <= -size || left >= wWidth + size || top >= wHeight + size) {
            particle.remove();
            particleCount--;
            updateParticleCount();
            clearInterval(particleTimer);
        }
    }, 1000 / 60);
}
