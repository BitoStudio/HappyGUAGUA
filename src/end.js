
export default class End {
    constructor(onReply) {
        this.end = document.getElementById('end-overlay')

        this.replay = document.getElementById('end-again')
        this.replay.addEventListener('touchend', () => {
            onReply()
            this.hide()
        })

        this.share = document.getElementById('end-share')

        this.share.addEventListener('touchend', () => {
            this.shareImage()
        })
    }

    show() {
        html2canvas(document.body).then((canvas) => {
            this.image = canvas
            this.end.style.transition = "opacity 2s ease";
            this.end.classList.remove('hidden');
        })
    }

    hide() {
        this.end.style.transition = "none";
        this.end.classList.add('hidden')
    }

    shareImage() {
        const imageDataUrl = this.image.toDataURL();

        // Check if Web Share API is supported
        if (navigator.share) {
            // Share the image using Web Share API
            navigator.share({
                title: 'Shared HTML Image',
                text: 'Check out this HTML to Image!',
                files: [new File([dataURItoBlob(imageDataUrl)], 'image.png', { type: 'image/png' })],
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

