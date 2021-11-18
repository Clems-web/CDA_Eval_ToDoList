import css from "../css/main.css";
import Chart from '../../node_modules/chart.js/auto';
import {valide} from "./valide";
import {edit} from "./edit";
import {del} from "./del";

let list = document.getElementById('list');
let button = document.getElementById('addTask');
let task = document.getElementById('taskName');

button.addEventListener('click', function () {

    let divSpan = document.createElement('div');
    let span = document.createElement('span');
    span.innerHTML = task.value;
    divSpan.append(span);

    let divIconValide = document.createElement('div');
    let divIconEdit = document.createElement('div');
    let divIconDel = document.createElement('div');

    divIconValide.append(new valide().getNewElement());
    divIconEdit.append(new edit().getNewElement());
    divIconDel.append(new del().getNewElement());

    divIconDel.addEventListener('click', function () {
        this.parentElement.parentElement.remove();
    })

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
        })


    })

    let divIcon = document.createElement('div');
    divIcon.setAttribute('class', 'divIcon');
    divIcon.append(divIconValide, divIconEdit,divIconDel);

    let taskDiv = document.createElement('div');
    taskDiv.setAttribute('class', 'taskDiv');
    taskDiv.append(divSpan, divIcon);

    list.append(taskDiv);
})




