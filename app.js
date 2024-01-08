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
const scContainer1 = document.getElementById('js--sc--container1')
// const scInfos1 = document.querySelector('.sc__infos');
const sc1 = new ScratchCard('#js--sc--container1', {
  scratchType: SCRATCH_TYPE.LINE,
  containerWidth: scContainer1.offsetWidth,
  containerHeight: 300,
  imageForwardSrc: '/assets/transperant.jpg',
  imageBackgroundSrc: '/assets/sad_frog.jpg',
  htmlBackground: '',
  clearZoneRadius: 50,
  nPoints: 0,
  pointSize: 0,
  // callback: function () {
  //   alert('Now the window will reload !')
  //   window.location.reload()
  // }
})

const scContainer2 = document.getElementById('js--sc--container2')
// const scInfos1 = document.querySelector('.sc__infos');
const sc2 = new ScratchCard('#js--sc--container2', {
  scratchType: SCRATCH_TYPE.LINE,
  containerWidth: scContainer2.offsetWidth,
  containerHeight: 300,
  imageForwardSrc: '/assets/transperant.jpg',
  imageBackgroundSrc: '/assets/sad_frog.jpg',
  htmlBackground: '',
  clearZoneRadius: 50,
  nPoints: 0,
  pointSize: 0,
  // callback: function () {
  //   alert('Now the window will reload !')
  //   window.location.reload()
  // }
})

const scContainer3 = document.getElementById('js--sc--container3')
// const scInfos1 = document.querySelector('.sc__infos');
const sc3 = new ScratchCard('#js--sc--container3', {
  scratchType: SCRATCH_TYPE.LINE,
  containerWidth: scContainer3.offsetWidth,
  containerHeight: 300,
  imageForwardSrc: '/assets/transperant.jpg',
  imageBackgroundSrc: '/assets/sad_frog.jpg',
  htmlBackground: '',
  clearZoneRadius: 50,
  nPoints: 0,
  pointSize: 0,
  // callback: function () {
  //   alert('Now the window will reload !')
  //   window.location.reload()
  // }
})

// Init
sc1.init().then(() => {
  sc1.canvas.addEventListener('scratch.move', () => {
    let percent = sc1.getPercent().toFixed(0);
    // scInfos.innerHTML = percent + '%';
    // console.log(percent)
  })
}).catch((error) => {
  // image not loaded
  alert(error.message);
});

sc2.init();
sc3.init();