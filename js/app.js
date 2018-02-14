
var container = document.getElementById('container');
var button = document.getElementById('button');
var textarea = document.getElementById('message');
var span = document.getElementById("send");

//Crear Elementos
var containerpost = document.createElement('section');
//Agregar eventos
button.addEventListener('click', showPost);
textarea.addEventListener('keyup', toDisable);//desabilitar boton

function toDisable(){
  event.preventDefault();
  var counter = textarea.value.length;
  //desabilitar boton
  if (counter == 0 || counter >= 141){
    button.disabled = true;
  }else{
    button.disabled = false;
  }
}

function showPost(event){
  event.preventDefault();
  var post = textarea.value;//variable que guarda el mensaje del usuario
  var postParagraph = document.createElement('p');
