// el constante del doc
const doc= document;   

// los hooks restantes
let showhModal = doc.getElementById('showhModal')
let laModal =  doc.getElementById('laModal')
let addSub    = doc.getElementById('addSub')

// la verificacion
let verified  = doc.querySelectorAll('.verified')

setTimeout( ()=>{ 
  laModal.style.display = 'flex';
} , 6000);

// el boton de cerra la modal
let closeButton = doc.querySelector('.close-button')
closeButton.addEventListener('click', ()=>{
  laModal.style.display = 'none'; // desaparecemos la modal
})

// agregar los subscritores
addSub.addEventListener('click', (e)=>{
  laModal.querySelectorAll('input').forEach( (ele) => {
       if(ele.value.trim() == '')
       {
         ele.style.border = '1px solid orangered';
          e.preventDefault();  // prevenimos
       } else {
        ele.style.border = '1px solid green';
       }
  })
})
