/*Codigo de Pago*/
function Calcular_CDP(){
    
/*Validacion de Numeros*/
if (document.getElementById("IDC").value.length<4){ 
var Error = "El ID es muy corto";
document.getElementById("Error").innerHTML = Error; 
}
if (document.getElementById("IDC").value.length>10){ 
var Error = "El ID es muy largo";
document.getElementById("Error").innerHTML = Error; 
}    
if (document.getElementById("IDC").value.length>=5 && document.getElementById("IDC").value.length<=9){

var Constante = [9,7,3,1];

var A1 = document.getElementById("IDC").value; 
var B1 = (A1 / 100000000);
var B2 = (A1 - 100000000*Math.floor(B1));
var C1 = (B2 / 10000000);
var C2 = (B2 - 10000000*Math.floor(C1));
var D1 = (C2 / 1000000);
var D2 = (C2 - 1000000*Math.floor(D1));
var E1 = (D2 / 100000);
var E2 = (D2 - 100000*Math.floor(E1));
var F1 = (E2 / 10000);
var F2 = (E2 - 10000*Math.floor(F1));
var G1 = (F2 / 1000);
var G2 = (F2 - 1000*Math.floor(G1));
var H1 = (G2 / 100);
var H2 = (G2 - 100*Math.floor(H1));
var I1 = (H2 / 10);
var I2 = (H2 - 10*Math.floor(I1));
var J1 = (I2 / 1);
var J2 = (I2 - 1*Math.floor(J1));

var Multiplos = (Constante[2]*Math.floor(B1))+(Constante[3]*Math.floor(C1))+
                (Constante[0]*Math.floor(D1))+(Constante[1]*Math.floor(E1))+
                (Constante[2]*Math.floor(F1))+(Constante[3]*Math.floor(G1))+
                (Constante[0]*Math.floor(H1))+(Constante[1]*H2);
    
var DigitoVerificador = Multiplos % 10;
    
var CodigodePago = A1.concat(DigitoVerificador);

$("#Resultado_CDP").val(CodigodePago);
    
}
}
/*Limpiar*/
function Limpiar_CDP() {
    document.getElementById("CDP").reset();
    location.reload();
}

