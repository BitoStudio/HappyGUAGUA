export default class ScratchCard {
    constructor(parent, id, params) {

        this.id = id
        this.canvas = document.getElementById('cover-' + id)
        var isDrawing = false;
        var lastPoint;
        var canvasWidth = this.canvas.width;
        var canvasHeight = this.canvas.height;
        var ctx = this.canvas.getContext('2d');
        var cover = new Image();
        var brush = new Image();
        var brushSize = params.brushSize ? params.brushSize : 80;

        var callbackRatio = params.callbackRatio ? params.callbackRatio : 50;

        brush.src = params.brush ? params.brush : 'assets/brush.png';
        cover.src = params.cover ? params.cover : 'assets/transperant.jpg';
        cover.onload = function () {

            const imgRatio = cover.height / cover.width
            const winRatio = canvasHeight / canvasWidth
            if (imgRatio > winRatio) {
                const h = canvasWidth * imgRatio
                ctx.drawImage(cover, 0, (canvasHeight - h) / 2, canvasWidth, h)
            }
            else {
                const w = canvasWidth * winRatio / imgRatio
                ctx.drawImage(cover, (canvasWidth - w) / 2, 0, w, canvasHeight)
            }
            // ctx.drawImage(cover, 0, 0, canvasWidth, canvasHeight * cover.height / cover.width);
        };

        // canvas.addEventListener('mousedown', handleMouseDown);
        // canvas.addEventListener('touchstart', handleMouseDown);
        // canvas.addEventListener('mousemove', handleMouseMove);
        // canvas.addEventListener('touchmove', handleMouseMove);
        // canvas.addEventListener('mouseup', handleMouseUp);
        // canvas.addEventListener('touchend', handleMouseUp);

        // function distanceBetween(point1, point2) {
        //     return Math.sqrt(Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2));
        // }

        // function angleBetween(point1, point2) {
        //     return Math.atan2(point2.x - point1.x, point2.y - point1.y);
        // }

        // // Only test every `stride` pixel. `stride`x faster,
        // // but might lead to inaccuracy
        // function getFilledInPixels(stride) {
        //     if (!stride || stride < 1) { stride = 1; }

        //     var pixels = ctx.getImageData(0, 0, canvasWidth, canvasHeight),
        //         pdata = pixels.data,
        //         l = pdata.length,
        //         total = (l / stride),
        //         count = 0;

        //     // Iterate over all pixels
        //     for (var i = count = 0; i < l; i += stride) {
        //         if (parseInt(pdata[i]) === 0) {
        //             count++;
        //         }
        //     }

        //     return Math.round((count / total) * 100);
        // }

        // function getMouse(e, pos) {
        //     var offsetX = 0, offsetY = 0;

        //     const touchX = (e.pageX || e.touches[0].clientX) - canvas.getBoundingClientRect().left;
        //     const touchY = (e.pageY || e.touches[0].clientY) - canvas.getBoundingClientRect().top;
        //     const isInside = touchX > 0 && touchX < canvas.width && touchY > 0 && touchY < canvas.height



        //     return { x: touchX, y: touchY };
        // }

        // function handlePercentage(filledInPixels) {
        //     filledInPixels = filledInPixels || 0;
        //     // console.log(filledInPixels + '%');
        //     if (filledInPixels > callbackRatio) {
        //         canvas.parentNode.removeChild(canvas);
        //         if (params.callback) params.callback();
        //     }
        // }

        // function handleMouseDown(e) {
        //     isDrawing = true;
        //     lastPoint = getMouse(e);
        // }

        // function handleMouseMove(e) {
        //     if (!isDrawing) { return; }

        //     e.preventDefault();

        //     var currentPoint = getMouse(e);
        //     var dist = distanceBetween(lastPoint, currentPoint);
        //     var angle = angleBetween(lastPoint, currentPoint);
        //     var x, y;

        //     for (var i = 0; i < dist; i++) {
        //         x = lastPoint.x + (Math.sin(angle) * i) - brushSize / 2;
        //         y = lastPoint.y + (Math.cos(angle) * i) - brushSize / 2 + brushSize / 4;
        //         ctx.globalCompositeOperation = 'destination-out';
        //         ctx.drawImage(brush, x, y, brushSize, brushSize * brush.height / brush.width);
        //     }

        //     lastPoint = currentPoint;
        //     handlePercentage(getFilledInPixels(32));

        //     parent.add()
        // }

        // function handleMouseUp(e) {
        //     isDrawing = false;
        // }
    }

    isInside(touch) {
        const offsetX = touch.x - this.canvas.getBoundingClientRect().left;
        const offsetY = touch.y - this.canvas.getBoundingClientRect().top;
        return offsetX > 0 && offsetX < this.canvas.width && offsetY > 0 && offsetY < this.canvas.height
    }


    receiveTouched(touch) {
        if (this.isInside(touch)) {
            console.log(this.id);
        }
    }
}
