export { createScratchCard };

function createScratchCard(canvas, paras)
{
    var isDrawing, lastPoint;
    var canvasWidth  = canvas.width;
    var canvasHeight = canvas.height;
    var ctx = canvas.getContext('2d');
    var cover = new Image();
    var brush = new Image();
    var brushSize = paras.brushSize? paras.brushSize : 80;

    var callbackRatio = paras.callbackRatio? paras.callbackRatio : 50;

    brush.src = paras.brush? paras.brush : 'assets/brush.png';
    cover.src = paras.cover? paras.cover: 'assets/transperant.jpg';
    cover.onload = function() {
        
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
    
    canvas.addEventListener('mousedown', handleMouseDown, false);
    canvas.addEventListener('touchstart', handleMouseDown, false);
    canvas.addEventListener('mousemove', handleMouseMove, false);
    canvas.addEventListener('touchmove', handleMouseMove, false);
    canvas.addEventListener('mouseup', handleMouseUp, false);
    canvas.addEventListener('touchend', handleMouseUp, false);
    
    function distanceBetween(point1, point2) {
        return Math.sqrt(Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2));
    }
    
    function angleBetween(point1, point2) {
        return Math.atan2( point2.x - point1.x, point2.y - point1.y );
    }
    
    // Only test every `stride` pixel. `stride`x faster,
    // but might lead to inaccuracy
    function getFilledInPixels(stride) {
        if (!stride || stride < 1) { stride = 1; }
        
        var pixels   = ctx.getImageData(0, 0, canvasWidth, canvasHeight),
            pdata    = pixels.data,
            l        = pdata.length,
            total    = (l / stride),
            count    = 0;
        
        // Iterate over all pixels
        for(var i = count = 0; i < l; i += stride) {
        if (parseInt(pdata[i]) === 0) {
            count++;
        }
        }
        
        return Math.round((count / total) * 100);
    }
    
    function getMouse(e, canvas) {
        var offsetX = 0, offsetY = 0, mx, my;
    
        if (canvas.offsetParent !== undefined) {
        do {
            offsetX += canvas.offsetLeft;
            offsetY += canvas.offsetTop;
        } while ((canvas = canvas.offsetParent));
        }
    
        mx = (e.pageX || e.touches[0].clientX) - offsetX;
        my = (e.pageY || e.touches[0].clientY) - offsetY;
    
        return {x: mx, y: my};
    }
    
    function handlePercentage(filledInPixels) {
        filledInPixels = filledInPixels || 0;
        // console.log(filledInPixels + '%');
        if (filledInPixels > callbackRatio) {
            canvas.parentNode.removeChild(canvas);
            if (paras.callback) paras.callback();
        }
    }
    
    function handleMouseDown(e) {
        isDrawing = true;
        lastPoint = getMouse(e, canvas);
    }
    
    function handleMouseMove(e) {
        if (!isDrawing) { return; }
        
        e.preventDefault();
    
        var currentPoint = getMouse(e, canvas);
        var dist = distanceBetween(lastPoint, currentPoint);
        var angle = angleBetween(lastPoint, currentPoint);
        var x, y;
        
        for (var i = 0; i < dist; i++) {
            x = lastPoint.x + (Math.sin(angle) * i) - brushSize/2;
            y = lastPoint.y + (Math.cos(angle) * i) - brushSize/2 + brushSize/4;
            ctx.globalCompositeOperation = 'destination-out';
            ctx.drawImage(brush, x, y, brushSize, brushSize * brush.height / brush.width);
        }
        
        lastPoint = currentPoint;
        handlePercentage(getFilledInPixels(32));
    }
    
    function handleMouseUp(e) {
        isDrawing = false;
    }

}