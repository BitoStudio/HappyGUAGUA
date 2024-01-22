import Loading from "./loading.js";
import Main from "./main.js";

window.onload = () => {
    // quick debug flag
    const useLoadingPage = false

    const id = Math.floor(Math.random() * 3) + 1;

    const main = new Main(id)
    const loding = new Loading(useLoadingPage, () => main.onStarted())
}