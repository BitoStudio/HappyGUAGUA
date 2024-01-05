function moveHandler(e){
    const cover = document.querySelector('.cover');
    const scratches = document.createElement('scratch');

    var x, y;
    if(e.type.includes(`touch`)) {
        const { touches, changedTouches } = e.originalEvent ?? e;
        const touch = touches[0] ?? changedTouches[0];
        x = touch.clientX;
        y = touch.clientY;
    } else if (e.type.includes(`mouse`)) {
        x = e.clientX;
        y = e.clientY;
    }

    scratches.style.left = -50 + x +'px';
    scratches.style.top = -50 + y +'px';
    cover.appendChild(scratches);
    // console.log(x + ' ' + y);
}

document.addEventListener('touchmove', moveHandler)
document.addEventListener('mousemove', moveHandler)

// var c = 0;
// document.addEventListener('touchstart', function(e) {
//     const cover = document.querySelector('.cover');
//     c += 0;
//     cover.style='background: ;';
// })