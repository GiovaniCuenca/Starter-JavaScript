var inputTodo = document.querySelector('#idinputTodo');
var hora = document.querySelector('#idHora');
var listaElements = document.querySelector("#lista");
var botaoEnviar = document.querySelector('#idEnviar');

var li = 0;

var todos = [
  {
    hora: 20,
    text: Texto,
  }
];

function renderTodos() {


      
      li ++;

      var criarTodo = document.createElement('li');
      criarTodo.setAttribute('id', `li${li}`);

      var linkElement = document.createElement('a');
      linkElement.setAttribute('href', "#");
      var linkText = document.createTextNode('excluir');

      var textTodo = document.createTextNode(linkElement);

      linkElement.appendChild(linkText);
      
      criarTodo.appendChild(textTodo);
      criarTodo.appendChild(linkElement);

      listaElements.appendChild(criarTodo);

      inputTodo.value = "";
      hora.value = "";
      todos.focus();

      
  }
}

function adicionar() {
  if(inputTodo.value =="" || hora.value == "") {
    window.alert('Por gentileza preencher todos os campos: ToDo e Hora');
  } else {

  }
}