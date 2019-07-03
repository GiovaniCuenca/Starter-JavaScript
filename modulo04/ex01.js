

function verificarIdade(text) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      return text >= 18 ? resolve() : reject();
    }, 2000);
  });
}

verificarIdade(15)
  .then(function() {
    console.log("Maior que 18");
  })
  .catch(function() {
    console.log("Menor que 18")
  })