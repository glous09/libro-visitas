
var container = document.getElementById('posts');
var btnSend = document.getElementById('send');
var textarea = document.getElementById('message');
var span = document.getElementById("counter");

//Crear Elementos
var containerpost = document.createElement('p');
//Agregar eventos
send.addEventListener('click', showPost);
/*textarea.addEventListener('keyup', toDisable);//desabilitar boton

function toDisable(){
  var counter = textarea.value.length;
  //desabilitar boton
  if (counter == 0 || counter >= 141){
    send.disabled = true;
  }else{
    send.disabled = false;
  }
}*/

function clear(){
  textarea.value = '';
  textarea.setAttribute('placeholder','Escribe tu comentario');
  counter.textContent = '140';
}

function showPost(event){
  event.preventDefault();
  var post = textarea.value;//variable que guarda el mensaje del usuario
  var postParagraph = document.createElement('p');
  postParagraph.className = "postStyle";

  var textpost = postParagraph.innerText = post; //agregar el mensaje del usuario como contenido del parrafo

  //===========Agregar hijos=====================
  posts.appendChild(containerpost);//agregamos como hijo un p
  containerpost.appendChild(postParagraph);//a la seccion le agregamos omo hijo el parrafo
  //containerpost.insertBefore(postParagraph);
}

  clear();//agregar funcion que limpie
  //toDisable();
