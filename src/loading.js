export default class Loading {

    constructor(useLoadingPage, onLoaded) {
        $(document).ready(function () {
            const loadButton = $('#loading-button');
            const loadingPage = $('#loading-page');
            const mainPage = $('#main-page');

            function handleTouchStart(event) {
                event.preventDefault();
                loadButton.css('transform', 'translate(-50%, -50%) scale(0.9)');
            }

            function handleTouchEnd(event) {
                event.preventDefault();
                loadButton.css('transform', 'translate(-50%, -50%) scale(1)');
                loadingPage.addClass('hidden');
                mainPage.removeClass('hidden');
                onLoaded();
            }

            if (useLoadingPage) {
                loadButton.on('touchstart', handleTouchStart);
                loadButton.on('touchend', handleTouchEnd);
            } else {
                loadingPage.addClass('hidden');
                mainPage.removeClass('hidden');
            }
        });
    }
}