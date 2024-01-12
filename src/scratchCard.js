export default class ScratchCard {
    constructor(holder, id, params) {

        this.holder = holder
        this.id = id

        this.canvas = document.getElementById('cover-' + id)
        this.lastPoint = 0;

        var canvasWidth = this.canvas.width;
        var canvasHeight = this.canvas.height;
        var ctx = this.canvas.getContext('2d');

        var cover = new Image();
        cover.src = params.cover ? params.cover : 'assets/transperant.jpg'

        this.brush = new Image();
        this.brush.src = params.brush ? params.brush : 'assets/brush.png'
        this.brushSize = params.brushSize ? params.brushSize : 80;
        this.callbackRatio = params.callbackRatio ? params.callbackRatio : 50

        cover.onload = function () {
            const imgRatio = cover.height / cover.width
            const canvasRatio = canvasHeight / canvasWidth
            if (imgRatio > canvasRatio) {
                const h = canvasWidth * imgRatio
                ctx.drawImage(cover, 0, (canvasHeight - h) / 2, canvasWidth, h)
            }
            else {
                const w = canvasWidth * canvasRatio / imgRatio
                ctx.drawImage(cover, (canvasWidth - w) / 2, 0, w, canvasHeight)
            }
        }
    }


    reset() {
        this.lastPoint = -1
    }

    checkTouch(touch) {
        const offsetX = touch.x - this.canvas.getBoundingClientRect().left;
        const offsetY = touch.y - this.canvas.getBoundingClientRect().top;

        return {
            isInside: offsetX > 0 && offsetX < this.canvas.width && offsetY > 0 && offsetY < this.canvas.height,
            pos: {
                x: offsetX,
                y: offsetY
            }
        }
    }

    receiveTouched(touch) {
        const result = this.checkTouch(touch)

        if (result.isInside)
            this.draw(result.pos)
        else
            this.reset()
    }

    draw(pos) {
        if (this.lastPoint == -1)
            this.lastPoint = pos

        const currentPoint = pos;
        const dist = this.distanceBetween(this.lastPoint, currentPoint);
        const angle = this.angleBetween(this.lastPoint, currentPoint);
        const ctx = this.canvas.getContext('2d')

        var x, y;

        for (var i = 0; i < dist; i++) {
            x = this.lastPoint.x + (Math.sin(angle) * i) - this.brushSize / 2;
            y = this.lastPoint.y + (Math.cos(angle) * i) - this.brushSize / 2 + this.brushSize / 4;
            ctx.globalCompositeOperation = 'destination-out';
            ctx.drawImage(this.brush, x, y, this.brushSize, this.brushSize * this.brush.height / this.brush.width);
        }

        this.lastPoint = currentPoint;
        this.handlePercentage(this.getFilledInPixels(32));

        this.holder.add()
    }

    distanceBetween(point1, point2) {
        return Math.sqrt(Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2));
    }

    angleBetween(point1, point2) {
        return Math.atan2(point2.x - point1.x, point2.y - point1.y);
    }

    getFilledInPixels(stride) {
        if (!stride || stride < 1) { stride = 1; }
        const ctx = this.canvas.getContext('2d')


        var pixels = ctx.getImageData(0, 0, this.canvas.width, this.canvas.height),
            pdata = pixels.data,
            l = pdata.length,
            total = (l / stride),
            count = 0;

        // Iterate over all pixels
        for (var i = count = 0; i < l; i += stride)
            if (parseInt(pdata[i]) === 0)
                count++;

        return Math.round((count / total) * 100);
    }

    handlePercentage(filledInPixels) {
        filledInPixels = filledInPixels || 0;
        if (filledInPixels > this.callbackRatio) {
            canvas.parentNode.removeChild(canvas);
            if (params.callback) params.callback();
        }
    }
}
