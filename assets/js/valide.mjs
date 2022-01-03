const valide = function () {
    this.element = 'i';
    this.classe = 'far fa-check-circle';

    this.getNewElement = function () {
        let creaI = document.createElement(this.element);
        creaI.setAttribute('class', this.classe);
        creaI.style.color = '#95d6b7';

        return creaI;
    }
}

export {valide};