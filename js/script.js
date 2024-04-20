const chk = document.getElementById('chk');
const myid = document.querySelector('.myid');
const tetwhite = document.getElementsByClassName('text-dark');
const blue = document.getElementsByClassName('blue');
const coralterna = document.getElementsByClassName('cor-alterna');
const minhas = document.querySelector('.minhas');

chk.addEventListener('change', () => {
  myid.classList.toggle('bg-dark');
  minhas.classList.toggle('text-white');
  
  // Iterando sobre a coleção de elementos e adicionando/removendo a classe
  for (let i = 0; i < 5; i++) {
    tetwhite[i].classList.toggle('text-white');
    blue[i].classList.toggle('bg-white');
    coralterna[i].classList.toggle('nova-cor');
  }
});

