
export default class End {
    constructor() {
        this.end = document.getElementById('end-overlay')
    }

    show(){
        this.end.classList.remove('hidden');
    }
}