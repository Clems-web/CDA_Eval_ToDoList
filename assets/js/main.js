import css from "../css/main.css";
import Chart from '../../node_modules/chart.js/auto';
import {valide} from "./valide";
import {edit} from "./edit";
import {del} from "./del";

let list = document.getElementById('list');
let button = document.getElementById('addTask');
let task = document.getElementById('taskName');

let storage = window.localStorage;
let indexStorage = storage.length + 1;
console.log(indexStorage);
console.log(storage);

for (let x = 0; x < storage.length; x++){

    let divSpan = document.createElement('div');
    let span = document.createElement('span');
    span.setAttribute('data-id', storage.key(x));
    span.innerHTML = storage.getItem(storage.key(x));
    divSpan.append(span);

    let divIconValide = document.createElement('div');
    let divIconEdit = document.createElement('div');
    let divIconDel = document.createElement('div');

    divIconValide.append(new valide().getNewElement());
    divIconEdit.append(new edit().getNewElement());
    divIconDel.append(new del().getNewElement());

    divIconDel.addEventListener('click', function () {
        this.parentElement.parentElement.remove();
        let spanToDel = this.parentElement.parentElement.firstChild.firstChild;
        let dataId = spanToDel.getAttribute('data-id');
        storage.removeItem(dataId);

    });

    divIconEdit.addEventListener('click', function () {
        let divSpan = this.parentElement.parentElement.firstChild;
        let spanToChange = this.parentElement.parentElement.firstChild.firstChild;

        let textSpan = spanToChange.innerHTML;
        spanToChange.remove();

        let input = document.createElement('input');
        input.value = textSpan;

        let confirm = document.createElement('button');
        confirm.innerHTML = 'confirm';

        divSpan.append(input, confirm);

        confirm.addEventListener('click', function () {
            let newSpan = document.createElement('span');
            newSpan.innerHTML = input.value;

            divSpan.append(newSpan);

            input.remove();
            this.remove();
        });

    });

    divIconValide.addEventListener('click', function () {
        let spanTovalidate = this.parentElement.parentElement.firstChild.firstChild;
        spanTovalidate.style.textDecoration = 'line-through';
    });

    let divIcon = document.createElement('div');
    divIcon.setAttribute('class', 'divIcon');
    divIcon.append(divIconValide, divIconEdit,divIconDel);

    let taskDiv = document.createElement('div');
    taskDiv.setAttribute('class', 'taskDiv');
    taskDiv.append(divSpan, divIcon);

    list.prepend(taskDiv);
}



button.addEventListener('click', function () {

    if (task.value !== "") {
        let divSpan = document.createElement('div');
        let span = document.createElement('span');
        span.setAttribute('data-id', indexStorage);
        span.innerHTML = task.value;
        divSpan.append(span);

        storage.setItem(indexStorage, span.innerHTML);
        indexStorage++;
        console.log(indexStorage);

        task.value = "";

        let divIconValide = document.createElement('div');
        let divIconEdit = document.createElement('div');
        let divIconDel = document.createElement('div');

        divIconValide.append(new valide().getNewElement());
        divIconEdit.append(new edit().getNewElement());
        divIconDel.append(new del().getNewElement());

        divIconDel.addEventListener('click', function () {
            this.parentElement.parentElement.remove();
            let spanToDel = this.parentElement.parentElement.firstChild.firstChild;
            let dataId = spanToDel.getAttribute('data-id');
            storage.removeItem(dataId);

        });

        divIconEdit.addEventListener('click', function () {
            let divSpan = this.parentElement.parentElement.firstChild;
            let spanToChange = this.parentElement.parentElement.firstChild.firstChild;

            let textSpan = spanToChange.innerHTML;
            spanToChange.remove();

            let input = document.createElement('input');
            input.value = textSpan;

            let confirm = document.createElement('button');
            confirm.innerHTML = 'confirm';

            divSpan.append(input, confirm);

            confirm.addEventListener('click', function () {
                let newSpan = document.createElement('span');
                newSpan.innerHTML = input.value;

                divSpan.append(newSpan);

                input.remove();
                this.remove();
            });

        });

        divIconValide.addEventListener('click', function () {
            let spanTovalidate = this.parentElement.parentElement.firstChild.firstChild;
            spanTovalidate.style.textDecoration = 'line-through';
        });

        let divIcon = document.createElement('div');
        divIcon.setAttribute('class', 'divIcon');
        divIcon.append(divIconValide, divIconEdit,divIconDel);

        let taskDiv = document.createElement('div');
        taskDiv.setAttribute('class', 'taskDiv');
        taskDiv.append(divSpan, divIcon);

        list.append(taskDiv);
    }
})




