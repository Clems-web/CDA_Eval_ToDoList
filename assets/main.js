import css from "./css/main.css";
import {valide} from "./js/valide.mjs";
import {edit} from "./js/edit.mjs";
import {del} from "./js/del.mjs";
import "../node_modules/chart.js/dist/chart.js";

let list = document.getElementById('list');
let button = document.getElementById('addTask');
let task = document.getElementById('taskName');

let numberOfDelete = 0;

let storage = window.localStorage;
let indexStorage = storage.length + 1;

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

        numberOfDelete++;

    });

    divIconEdit.addEventListener('click', function () {
        let divSpan = this.parentElement.parentElement.firstChild;
        let spanToChange = this.parentElement.parentElement.firstChild.firstChild;
        let spanDataId = spanToChange.getAttribute('data-id');

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
            newSpan.setAttribute('data-id', spanDataId);
            storage.setItem(spanDataId, newSpan.innerHTML);

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

            numberOfDelete++;

        });

        divIconEdit.addEventListener('click', function () {
            let divSpan = this.parentElement.parentElement.firstChild;
            let spanToChange = this.parentElement.parentElement.firstChild.firstChild;
            let spanDataId = spanToChange.getAttribute('data-id');

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
                newSpan.setAttribute('data-id', spanDataId);
                storage.setItem(spanDataId, newSpan.innerHTML);

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
        divIcon.append(divIconValide, divIconEdit, divIconDel);

        let taskDiv = document.createElement('div');
        taskDiv.setAttribute('class', 'taskDiv');
        taskDiv.append(divSpan, divIcon);

        list.append(taskDiv);
    }
})

let buttonCanva = document.getElementById('canvaButton');
let refresh = document.getElementById('refresh');
refresh.addEventListener('click', function () {
   window.location.reload();
});

let ctx = document.getElementById('myChart');


buttonCanva.addEventListener('click', function () {

    let myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: [""],
            datasets: [{
                label: 'Number of task done',
                data: [numberOfDelete],
                backgroundColor: 'red',
                borderColor: 'black',
                borderWidth: '1'
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
})



