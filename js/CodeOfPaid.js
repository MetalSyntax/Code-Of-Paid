/*Codigo de Pago*/
function Calcular_CDP(){
    
/*Validacion de Numeros*/
if (document.getElementById("IDC").value.length<4){ 
alert("El ID es muy corto");
}
if (document.getElementById("IDC").value.length>8){ 
alert("El ID es muy largo");
}    
if (document.getElementById("IDC").value.length>=5 && document.getElementById("IDC").value.length<=8){

var Constante = [9,7,3,1];

var A1 = document.getElementById("IDC").value; 
var B1 = (A1 / 10000000);
var B2 = (A1 - 10000000*Math.floor(B1));
var C1 = (B2 / 1000000);
var C2 = (B2 - 1000000*Math.floor(C1));
var D1 = (C2 / 100000);
var D2 = (C2 - 100000*Math.floor(D1));
var E1 = (D2 / 10000);
var E2 = (D2 - 10000*Math.floor(E1));
var F1 = (E2 / 1000);
var F2 = (E2 - 1000*Math.floor(F1));
var G1 = (F2 / 100);
var G2 = (F2 - 100*Math.floor(G1));
var H1 = (G2 / 10);
var H2 = (G2 - 10*Math.floor(H1));
var I1 = (H2 / 1);
var I2 = (H2 - 1*Math.floor(I1));

var Multiplos = (Constante[2]*Math.floor(B1))+(Constante[3]*Math.floor(C1))+
                (Constante[0]*Math.floor(D1))+(Constante[1]*Math.floor(E1))+
                (Constante[2]*Math.floor(F1))+(Constante[3]*Math.floor(G1))+
                (Constante[0]*Math.floor(H1))+(Constante[1]*H2);
    
var DigitoVerificador = Multiplos % 10;
    
var CodigodePago = A1.concat(DigitoVerificador);

$("#Resultado_CDP").val(0+CodigodePago);
                   
/*Hitorial*/
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);
    
  var li = document.createElement("li");
  var inputValue = document.getElementById("Resultado_CDP").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("¡Debes escribir algo!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("resultado_CM").value;

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  } 
}
}
/*Limpiar*/
function Limpiar_CDP() {
    document.getElementById("CDP").reset();
}

