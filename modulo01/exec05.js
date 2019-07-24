var usuarios = [
  {
  nome: "Diego",
  habilidades: ["Javascript", "ReactJS", "Redux"]
  },
  {
  nome: "Gabriel",
  habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
  }
 ];

 for (nomes of usuarios) {
   console.log(
     `O ${nomes.nome} possui as habilidades ${nomes.habilidades.join(', ')}.`
     )
 }