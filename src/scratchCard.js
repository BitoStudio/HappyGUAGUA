export default class ScratchCard {
    constructor(holder, id, data, callback) {

        this.holder = holder
        this.id = id

        this.scratch = document.getElementById('scratch-card-' + id)
        this.scratch.style.top = data.top
        this.scratch.style.left = data.left

        this.result = document.getElementById('result-' + id)
        this.result.src = data.results[Math.floor(Math.random() * data.results.length)]

        this.cover = document.getElementById('cover-' + id)

        this.cover.width = this.cover.offsetWidth
        this.cover.height = this.result.offsetHeight

        this.lastPoint = 0;

        var coverWidth = this.cover.width;
        var coverHeight = this.cover.height;
        var ctx = this.cover.getContext('2d');

        var paint = new Image();
        paint.src = data.cover;

        this.brush = new Image();
        this.brush.src = data.brush ? data.brush : 'assets/brush.png'
        this.brushSize = data.brushSize ? data.brushSize : 80;
        this.callbackRatio = data.callbackRatio ? data.callbackRatio : 50

        paint.onload = function () {
            const imgRatio = paint.height / paint.width
            const canvasRatio = coverHeight / coverWidth
            if (imgRatio > canvasRatio) {
                const h = coverWidth * imgRatio
                ctx.drawImage(paint, 0, (coverHeight - h) / 2, coverWidth, h)
            }
            else {
                const w = coverWidth * canvasRatio / imgRatio
                ctx.drawImage(paint, (coverWidth - w) / 2, 0, w, coverHeight)
            }
        }
    }


    reset() {
        this.lastPoint = -1
    }

    checkTouch(touch) {
        const offsetX = touch.x - this.cover.getBoundingClientRect().left;
        const offsetY = touch.y - this.cover.getBoundingClientRect().top;

        return {
            isInside: offsetX > 0 && offsetX < this.cover.width && offsetY > 0 && offsetY < this.cover.height,
            pos: {
                x: offsetX,
                y: offsetY
            }
        }
    }

    receiveTouched(touch) {
        const result = this.checkTouch(touch)

        if (result.isInside) {
            this.draw(result.pos)
            // this.particle.explode(touch.x, touch.y)
        }
        else
            this.reset()
    }

    draw(pos) {
        if (this.lastPoint == -1)
            this.lastPoint = pos

        const currentPoint = pos;
        const dist = this.distanceBetween(this.lastPoint, currentPoint);
        const angle = this.angleBetween(this.lastPoint, currentPoint);
        const ctx = this.cover.getContext('2d')


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
        const ctx = this.cover.getContext('2d')


        var pixels = ctx.getImageData(0, 0, this.cover.width, this.cover.height),
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
        // console.log(filledInPixels + '%');
        if (filledInPixels > this.callbackRatio) {
            // canvas.parentNode.removeChild(canvas);
            // if (params.callback) params.callback();
        }
    }
}
