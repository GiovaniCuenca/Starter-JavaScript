var listElement = document.getElementById('lista');
var inputElement = document.getElementById('caixa');
var buttonElement = document.getElementById('botao');

var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function renderTodos() {
  listElement.innerHTML = "";

  for (todo of todos) {
    var todoElement = document.createElement('li');
    var todoText = document.createTextNode(todo);

    var linkElement = document.createElement('a');

    linkElement.setAttribute('href', '#');

    var pos = todos.indexOf(todo);
    linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ')');

    var linkText = document.createTextNode('Excluir');

    linkElement.appendChild(linkText);
    
    todoElement.appendChild(todoText);
    todoElement.appendChild(linkElement);

    listElement.appendChild(todoElement);
  }
}

renderTodos();

function addTodo() {
  var todoText = inputElement.value;

    todos.push(todoText);
    inputElement.value = "";
    renderTodos();
    savetoStorage();
}

buttonElement.onlick = addTodo;

function deleteTodo(pos) {
  todos.splice(pos, 1);
  renderTodos();
  savetoStorage();
}

function savetoStorage() {
  localStorage.setItem('list_todos', JSON.stringify(todos));

}