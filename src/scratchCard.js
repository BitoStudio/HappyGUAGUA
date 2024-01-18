export default class ScratchCard {
    constructor(holder, patternId, cardId, data, callback) {
        this.holder = holder
        this.cardId = cardId
        this.data = data

        const scratch = document.getElementById('scratch-card-' + cardId)
        scratch.style.top = data.pos[patternId - 1].top
        scratch.style.left = data.pos[patternId - 1].left

        const result = scratch.querySelector('.result')
        result.src = data.results[Math.floor(Math.random() * data.results.length)]

        this.lastPoint = 0;

        this.cover = scratch.querySelector('.cover')
        this.cover.width = this.cover.offsetWidth
        this.cover.height = this.cover.offsetHeight

        var coverWidth = this.cover.width;
        var coverHeight = this.cover.height;
        var ctx = this.cover.getContext('2d');

        this.brush = new Image();
        this.brush.src = data.brush;

        var paint = new Image();
        paint.src = data.cover;
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
            x = this.lastPoint.x + (Math.sin(angle) * i) - this.data.brushSize / 2;
            y = this.lastPoint.y + (Math.cos(angle) * i) - this.data.brushSize / 2 + this.data.brushSize / 4;
            ctx.globalCompositeOperation = 'destination-out';
            ctx.drawImage(this.brush, x, y, this.data.brushSize, this.data.brushSize * this.brush.height / this.brush.width);
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
        if (filledInPixels > this.data.callbackRatio) {
            // canvas.parentNode.removeChild(canvas);
            // if (params.callback) params.callback();
        }
    }
}
