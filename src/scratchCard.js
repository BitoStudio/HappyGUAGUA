export default class ScratchCard {
    constructor(holder, patternId, cardId, data) {
        this.holder = holder
        this.cardId = cardId
        this.data = data
        this.finished = false
        this.recorded = false
        this.brandnew = true

        const scratch = $('#scratch-card-' + cardId)
        scratch.css({
            'top': data.pos[patternId - 1].top,
            'left': data.pos[patternId - 1].left
        })


        const result = data.results[Math.floor(Math.random() * data.results.length)]

        const origin = scratch.find('.origin')
        origin.hide()
        origin.attr('src', result.origin);

        this.red = scratch.find('.red')
        this.red.hide()
        this.red.attr('src', result.red);

        this.gray = scratch.find('.gray')
        this.gray.hide()
        this.gray.attr('src', result.gray);

        this.lastPoint = 0;

        this.cover = scratch.find('.cover')[0]
        this.cover.classList.remove('end-animation');
        this.cover.width = this.cover.offsetWidth
        this.cover.height = this.cover.offsetHeight

        this.ctx = this.cover.getContext('2d', { willReadFrequently: true });
        this.ctx.imageSmoothingQuality = 'medium';

        this.brush = new Image();
        this.brush.src = data.brush;

        this.paint = new Image();
        this.paint.src = data.cover;
        this.paint.onload = function () {
            this.ctx.globalCompositeOperation = 'source-over'
            // this.ctx.filter = `blur(4px)`;

            // const oc = document.createElement('canvas');
            // const octx = oc.getContext('2d');
            // oc.width = this.paint.width;
            // oc.height = this.paint.height;

            // const steps = (oc.width / this.cover.width)>>1;
            // octx.filter = `blur(${steps}px)`;
            // octx.drawImage(this.paint, 0, 0);

            const imgRatio = this.paint.height / this.paint.width
            const canvasRatio = this.cover.height / this.cover.width
            if (imgRatio > canvasRatio) {
                const h = this.cover.width * imgRatio
                this.ctx.drawImage(this.paint, 0, (this.cover.height - h) / 2, this.cover.width, h)
                // this.ctx.drawImage(oc, 0, 0, oc.width, oc.height, 0, (this.cover.height - h) / 2, this.cover.width, h)
                // this.ctx.drawImage(c1, 0, (this.cover.height - h) / 2, this.cover.width, h)
            }
            else {
                const w = this.cover.width * canvasRatio / imgRatio
                this.ctx.drawImage(this.paint, (this.cover.width - w) / 2, 0, w, this.cover.height)
                // this.ctx.drawImage(oc, 0, 0, oc.width, oc.height, (this.cover.width - w) / 2, 0, w, this.cover.height)
                // this.ctx.drawImage(c1, (this.cover.width - w) / 2, 0, w, this.cover.height)
            }

            setTimeout(()=>{
                origin.show();
                this.gray.show();
            }, 500)

        }.bind(this)
    }

    reset() {
        this.paint.src = this.data.cover;
    }

    resetLastPoint() {
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
            this.resetLastPoint()
    }

    draw(pos) {
        if (this.lastPoint == -1)
            this.lastPoint = pos

        const currentPoint = pos;
        const dist = this.distanceBetween(this.lastPoint, currentPoint);
        const angle = this.angleBetween(this.lastPoint, currentPoint);
        const ctx = this.cover.getContext('2d', { willReadFrequently: true });

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

        if (!this.recorded) {
            this.recorded = true;
            this.originFilledInPixels = filledInPixels;
        }

        if (this.originFilledInPixels !== filledInPixels && this.brandnew) {
            this.brandnew = false;
            // this.cover.classList.add('off');
            $(this.cover).on('animationiteration webkitAnimationIteration', ()=> {
                $(this.cover).off();
                this.cover.classList.add('end-animation');
            })
        }

        if (filledInPixels > this.data.callbackRatio && !this.finished) {
            this.finished = true
            this.red.fadeIn(500)
            this.holder.scratchFinish()
        }
    }
}
