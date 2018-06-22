function saludar() {
       var hora= document.getElementById("nn").value;
       var capa = document.getElementById("capa");
       //*var hora = 5;
       var saludo;
       for(var i =0;i < hora;i++){
       if (hora<12) {
         saludo="Buenos Dias";
       }else if(hora<18){
         saludo="Buenas Tardes";
       }else if(hora<=24){
         saludo="Buenas Noches";   
       }else {
         saludo="Digite una hora Valida";
       }
       var h1 = document.createElement("h1");
       h1.innerHTML = saludo;
       //* document.getElementById("sal2").innerHTML= saludo;  
       capa.appendChild(h1);
       }		
}      

function limpiar() {
  /*var limpio = "";
  document.getElementById("nn").value= limpio;
  document.getElementById("sal2").innerHTML= limpio;*/
  location.reload();
}