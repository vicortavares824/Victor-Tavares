const chk = document.getElementById('chk');

chk.addEventListener('change', () => {
  forinter(document.getElementsByClassName('minhas'),'text-white');
  forinter(document.getElementsByClassName('icon'),'text-dark');
  forinter(document.getElementsByClassName('tod-white'),'bg-white');
  forinter(document.getElementsByClassName('myid'),'bg-dark');
  forinter(document.getElementsByClassName('bc'),'d-none');
  function forinter(obj,bost){
    for (let i = 0; i < obj.length; i++) { 
        obj[i].classList.toggle(bost); 
    }
  }
  
  
});





