// script.js

 

// Seleciona os elementos do DOM

const newTaskInput = document.getElementById('new-task-input');

const addTaskButton = document.getElementById('add-task-btn');

const taskList = document.getElementById('task-list');

// Adiciona evento de clique ao botão de adicionar tarefa

addTaskButton.addEventListener('click', addTask);

 

// Função para adicionar tarefa

function addTask() {

    const taskText = newTaskInput.value.trim();

    if (taskText === '') {

        alert('Por favor, insira uma tarefa.');

        return;

    }

 

    const listItem = document.createElement('li');

    listItem.textContent = taskText;

    // Adiciona botão de excluir tarefa

    const deleteButton = document.createElement('button');

    deleteButton.textContent = 'Excluir';

    deleteButton.classList.add('delete-btn');

    deleteButton.addEventListener('click', deleteTask);

 

    listItem.appendChild(deleteButton);

 

    // Adiciona evento de clique para completar tarefa

    listItem.addEventListener('click', () => {

        listItem.classList.toggle('completed');

    });

 

    taskList.appendChild(listItem);

    newTaskInput.value = '';

}

 

// Função para excluir tarefa

function deleteTask(event) {

    const listItem = event.target.parentElement;

    taskList.removeChild(listItem);

}