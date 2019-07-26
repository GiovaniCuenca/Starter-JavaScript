var inputTodo = document.querySelector('#idinputTodo');
var hora = document.querySelector('#idHora');
var listaElements = document.querySelector("#lista");
var botaoEnviar = document.querySelector('#idEnviar');

var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function renderTodos() {
  listaElements.innerHTML = "";

  for (todo of todos) {
    var criarTodo = document.createElement('li');
    var textTodo = document.createTextNode(` - ${todo.horario}: ${todo.text}; `);

    var linkElement = document.createElement('a');
    linkElement.setAttribute('href', '#');

    var pos = todos.indexOf(todo);
    linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ')');

    var linkText = document.createTextNode('excluir');

    linkElement.appendChild(linkText);

    criarTodo.appendChild(linkElement);
    criarTodo.appendChild(textTodo);
    

    listaElements.appendChild(criarTodo);
  }
};

renderTodos();

function adicionar() {
  if(inputTodo.value =="" || hora.value == "") {
    window.alert('Por gentileza preencher todos os campos: ToDo e Hora');
  } else {
      todos.push({text: inputTodo.value, horario: hora.value});

      inputTodo.value = "";
      hora.value = "";
      
      inputTodo.focus();

      renderTodos();
      saveToStorage();
  }
};

function deleteTodo(pos) {
  todos.splice(pos, 1);
  renderTodos();
  saveToStorage();
}

function saveToStorage (){
  localStorage.setItem('list_todos', JSON.stringify(todos));
}