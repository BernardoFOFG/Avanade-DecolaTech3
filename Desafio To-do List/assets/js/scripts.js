const form = document.getElementById("task-form");
const taskList = document.getElementById("tasks");

form.onsubmit = function (e) {
  e.preventDefault();
  const inputField = document.getElementById("task-input");
  toDoTask(inputField.value);
  form.reset();
};

function toDoTask(descricao) {
  const taskContainer = document.createElement("div"); // Criação da div das tarefas
  const newTask = document.createElement("input"); // Insere o input do html
  const taskLabel = document.createElement("label"); // Insere a label da tarefa
  const taskDescriptionNode = document.createTextNode(descricao); // Insere a descrição da tarefa

  newTask.setAttribute("type", "checkbox"); // Insere corretamente o tipo de input
  newTask.setAttribute("name", descricao); // Insere automaticamente o name do input partir valor inserido no input padrão
  newTask.setAttribute("id", descricao); // Insere automaticamente o id do input partir valor inserido no input padrão

  taskLabel.setAttribute("for", descricao); // apontação automática para onde tá indicado o for, como ele vai repetir o nome da tarefa, fica mais facil de visualização
  taskLabel.appendChild(taskDescriptionNode); // Insere a descrição da tarefa

  taskContainer.classList.add("task-item"); // Insere nome das div's das tarefas
  taskContainer.appendChild(newTask);  // Exibe o label
  taskContainer.appendChild(taskLabel); // Exibe o input

  taskList.appendChild(taskContainer); // Exibe "escondido" a div
}
