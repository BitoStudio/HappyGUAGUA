// function moveHandler(e){
//     const cover = document.querySelector('.cover');
//     const scratches = document.createElement('scratch');

//     var x, y;
//     if(e.type.includes(`touch`)) {
//         const { touches, changedTouches } = e.originalEvent ?? e;
//         const touch = touches[0] ?? changedTouches[0];
//         x = touch.clientX;
//         y = touch.clientY;
//     } else if (e.type.includes(`mouse`)) {
//         x = e.clientX;
//         y = e.clientY;
//     }

//     scratches.style.left = -50 + x +'px';
//     scratches.style.top = -50 + y +'px';
//     cover.appendChild(scratches);
//     // console.log(x + ' ' + y);
// }

// document.addEventListener('touchmove', moveHandler)
// document.addEventListener('mousemove', moveHandler)

// version 2 - ScratchCard-js
const scContainer = document.getElementById('js--sc--container')
const scInfos = document.querySelector('.sc__infos');
const sc = new ScratchCard('#js--sc--container', {
  scratchType: SCRATCH_TYPE.SPRAY,
  containerWidth: scContainer.offsetWidth,
  containerHeight: 300,
  imageForwardSrc: '/assets/transperant.jpg',
  imageBackgroundSrc: '/assets/sad_frog.jpg',
  htmlBackground: '',
  clearZoneRadius: 50,
  nPoints: 30,
  pointSize: 5,
  callback: function () {
    alert('Now the window will reload !')
    window.location.reload()
  }
})

// Init
sc.init().then(() => {
  sc.canvas.addEventListener('scratch.move', () => {
    let percent = sc.getPercent().toFixed(0);
    scInfos.innerHTML = percent + '%';
    console.log(percent)
  })
}).catch((error) => {
  // image not loaded
  alert(error.message);
});