//1
function rectangulo (base, altura) {
    return + base*altura;
}
console.log("El resultado del área es " + rectangulo (5,4));

//2
function triangulo(base, altura) {
    return + base*altura/2;
}
console.log("El resultado del area es "+ triangulo (10,15));

//3
let largoDelArray = ['Papas fritas', 'Hamburguesa']; 
console.log(largoDelArray.length);

//4
let diaSegunNumero = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes']
console.log(diaSegunNumero[2]);

//5
let cantidadDeLetras = ['Programacion']
let total = cantidadDeLetras.count; 
console.log("El total de los caracteres es " + total); 

//6
function dolarHoy(pesos) {
    return pesos * 180;
}
console.log("El valor en dolar es " + dolarHoy(100));

//7
function precioFinal(precio, iva) {
    return + precio*iva;
}
    console.log("El aumento con el iva es " + precioFinal(98.86, 0.21));

//8
    function mitad(valor1, valor2) {
    return + valor1/valor2 
}
console.log("El resultado es " + mitad (88,2));

//9 
function sumar(num1,num2) {
    return num1 + num2;
}
console.log("El resultado de la suma es " + sumar(4,8));

function multiplicar(num1,num2){
    return num1 * num2; 
}
console.log("El resultado de la multiplicacion es " + multiplicar(4,8));

function restar(num1,num2) {
    return num1 - num2;
}
console.log("El resultado de la resta es " + restar(4,8));

function dividir(num1,num2) {
    return num1/num2;
}
console.log("El resultado de la division es " + dividir(4,8)); 


//EJECUTANDO FUNCIONES
function siguiente(numero) {
    return numero + 1;
  }
console.log("El resultado es " + siguiente (80));
  
  function doble(numero) {
    return 2 * numero;
  }
console.log("El resultado es " + doble (25));
  
  function siguienteDelDoble(numero) {
     return siguiente(doble(numero));
  }
console.log("El resultado es " + siguienteDelDoble(2));

function anterior(numero) {
    return numero - 1;
}
console.log("El resultado es " + anterior(55));

function triple(numero) {
    return numero * 3;
}
console.log("El resultado es " + triple(70)); 

function anteriorDelTriple(numero) {
    return anterior(triple(numero));
}
console.log("El resultado es " + anteriorDelTriple(3));