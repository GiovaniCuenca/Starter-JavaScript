function experiencia(anos) {
  if (anos < 1) {
    return 'Iniciante';
  } 
  if (anos < 3) {
    return 'Intermediário';
  }
  if (anos < 6) {
    return 'Avançado';
  }
  else {
    return 'Jedi Master'
  }
 }
 var anosEstudo = 2;
 console.log(experiencia(anosEstudo));
 // De 0-1 ano: Iniciante
 // De 1-3 anos: Intermediário
 // De 3-6 anos: Avançado
 // De 7 acima: Jedi Master
 