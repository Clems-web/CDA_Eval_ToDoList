const edit = function () {
    this.element = 'i';
    this.classe = 'far fa-edit';

    this.getNewElement = function () {
        let creaI = document.createElement(this.element);
        creaI.setAttribute('class', this.classe);
        creaI.style.color = '#45bfe7';

        return creaI;
    }
}

export {edit};