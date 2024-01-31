var d = document, $d = $(d),
    w = window, $w = $(w),
    wWidth = $w.width(), wHeight = $w.height(),
    particles = $('.particles'),
    particleCount = 0,
    maxCount = 20,
    size = 5,
    colors = [
        '#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5',
        '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4CAF50',
        '#8BC34A', '#CDDC39', '#FFEB3B', '#FFC107', '#FF9800',
        '#FF5722', '#795548', '#9E9E9E', '#607D8B', '#777777'
    ],

    life = 1000,
    lifeDecay = 20,
    splashSpeed = 3,
    splashDecay = 0.95,
    mouseX = $w.width() / 2, mouseY = $w.height() / 2,
    paritclesPerSpawn = 2,
    randomDisplacement = 10;


let prevMouseX;
let prevMouseY;
let prevTimestamp;

function calculateVelocity(currentX, currentY, currentTime) {
    let currentVelocity = 0;

    if (prevMouseX !== undefined && prevMouseY !== undefined && prevTimestamp !== undefined) {
        const deltaX = currentX - prevMouseX;
        const deltaY = currentY - prevMouseY;
        const deltaTime = currentTime - prevTimestamp;

        currentVelocity = { x: deltaX / deltaTime, y: deltaY / deltaTime }
    }

    prevMouseX = currentX;
    prevMouseY = currentY;
    prevTimestamp = currentTime;
    return currentVelocity
}

$w
    .on('resize', function () {
        wWidth = $w.width();
        wHeight = $w.height();
    });

$d
    .on('mousemove touchmove', function (event) {
        if (particleCount < maxCount) {
            mouseX = event.clientX;
            mouseY = event.clientY;
            if (!!event.originalEvent.touches) {
                mouseX = event.originalEvent.touches[0].clientX;
                mouseY = event.originalEvent.touches[0].clientY;
            }
    
            const currentTime = performance.now(); // Using high-resolution time
    
            const vel = calculateVelocity(mouseX, mouseY, currentTime);
    
            createParticle(mouseX, mouseY, vel);
        }

    })

function smoothstep(edge0, edge1, x) {
    // Scale, bias and saturate x to 0..1 range
    x = Math.min(Math.max((x - edge0) / (edge1 - edge0), 0), 1);
    // Evaluate polynomial
    return x * x * (3 - 2 * x);
}

function createParticle(mouseX, mouseY, vel) {
    var particle = $('<div class="particle"/>'),
        color = colors[Math.floor(Math.random() * colors.length)],
        negative = size / 2,
        spinVal = 360 * Math.random(),
        spinSpeed = ((36 * Math.random())) * (Math.random() <= .5 ? -1 : 1),
        otime,
        time = otime = (1 + (.5 * Math.random())) * life,
        top = (mouseY + (Math.random() -0.5) * randomDisplacement),
        left = (mouseX + (Math.random() -0.5) * randomDisplacement);

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

    var particleTimer = setInterval(function () {
        time = time - lifeDecay;
        vel.x = vel.x * splashDecay;
        vel.y = vel.y * splashDecay;
        left = left + vel.x * splashSpeed;
        top = top + vel.y * splashSpeed;
        spinVal = spinVal + spinSpeed;

        particle
            .css({
                height: size * smoothstep(0, 0.3, time / otime) * smoothstep(1, 0.7, time / otime) + 'px',
                width: size * smoothstep(0, 0.3, time / otime) * smoothstep(1, 0.7, time / otime) + 'px',
                top: top + 'px',
                left: left + 'px',
                opacity: 1,
                transform: 'rotate(' + spinVal + 'deg)',
                webkitTransform: 'rotate(' + spinVal + 'deg)'
            });

        if (time <= 0 || left <= -size || left >= wWidth + size || top >= wHeight + size) {
            particle.remove();
            particleCount--;
            clearInterval(particleTimer);
        }
    }, 1000 / 40);
}
