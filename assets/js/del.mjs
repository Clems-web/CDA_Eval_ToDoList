const del = function () {
    this.element = 'i';
    this.classe = 'far fa-times-circle';

    this.getNewElement = function () {
        let creaI = document.createElement(this.element);
        creaI.setAttribute('class', this.classe);
        creaI.style.color = '#dc5350';

        return creaI;
    }
}

export {del};