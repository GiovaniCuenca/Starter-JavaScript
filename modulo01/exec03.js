function temHabilidade(procura) {
  return skills.indexOf(procura) != -1;
 }
 var skills = ["Javascript", "ReactJS", "React Native"];
 var procura = 'React Native';

 console.log(temHabilidade(procura)); // true ou false
