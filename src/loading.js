export default class Loading {

    constructor(useLoadingPage, onLoaded) {
        
        const loadButton = document.getElementById('loading-button');
        const loadingPage = document.getElementById('loading-page');
        const mainPage = document.getElementById('main-page');

        if (useLoadingPage) {
            loadButton.addEventListener('touchstart', function (event) {
                event.preventDefault();

                loadButton.style.transform = 'translate(-50%, -50%) scale(0.9)';
            });

            loadButton.addEventListener('touchend', function (event) {
                event.preventDefault();

                loadButton.style.transform = 'translate(-50%, -50%) scale(1)';

                loadingPage.classList.add('hidden');
                mainPage.classList.remove('hidden');

                onLoaded()
            });

        } else {
            loadingPage.classList.add('hidden');
            mainPage.classList.remove('hidden');
        }
    }
}