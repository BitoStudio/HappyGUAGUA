
export default class End {
    constructor(main) {
        this.end = $('#end-overlay')
        this.main = main

        this.video = $('#end-dragon');
        this.video.on('complete', () => {
            this.replay.stop(true).fadeTo(500, 1);
            this.share.stop(true).fadeTo(500, 1);
        })

        this.replay = $('#end-again')
        this.replay.hide()
        this.replay.on('touchend', () => {
            this.hide()
            this.main.replay()

            setTimeout(()=>{
                this.reset()
            }, 1000)
        })

        this.share = $('#end-share')
        this.share.hide()
        this.share.on('touchend', () => {
            this.shareImage()
        })
    }

    reset() {
        this.video.get(0).seek(0)
        this.replay.hide()
        this.share.hide()
    }

    show() {
        setTimeout(() => {
            html2canvas(document.body).then((canvas) => {
                this.image = canvas
                this.end.fadeIn(1000)

                setTimeout(()=>{
                    this.video.get(0).play();
                }, 1000)
            })
        }, (1000));
    }

    hide() {
        this.end.hide();
    }

    shareImage() {
        const imageDataUrl = this.image.toDataURL();

        // Check if Web Share API is supported
        if (navigator.share) {
            // Share the image using Web Share API
            navigator.share({
                // title: 'Shared HTML Image',
                files: [new File([dataURItoBlob(imageDataUrl)], 'image.jpg', { type: 'image/jpeg' })],
            })
                .then(() => console.log('Shared successfully'))
                .catch(error => console.error('Error sharing:', error));
        } else {
            console.error('Web Share API not supported.');
        }

        function dataURItoBlob(dataURI) {
            const byteString = atob(dataURI.split(',')[1]);
            const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
            const ab = new ArrayBuffer(byteString.length);
            const ia = new Uint8Array(ab);

            for (let i = 0; i < byteString.length; i++) {
                ia[i] = byteString.charCodeAt(i);
            }

            return new Blob([ab], { type: mimeString });
        }
    }
}

