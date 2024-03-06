        
const PrecioBasico = 2000; 
const PrecioPremium = 4000;
 
const OpcionBasico = 1;
const OpcionPremium = 2;

let costoUnitario;
let piezas;

let opcionSeleccionada = parseInt(prompt("seleccione tipo de serrvicio \n1. Básico ($2000 c/u) \n2. Premium ($4000 c/u)"));

if (opcionSeleccionada === OpcionBasico) {
    costoUnitario = PrecioBasico;
    piezas = parseInt(prompt("Ingrese cantidad de piezas (1-20):"));
}else if (opcionSeleccionada === OpcionPremium) {
    costoUnitario = PrecioPremium;
    piezas = parseInt(prompt("Ingrese cantidad de piezas (1-20):"));
}else {
    alert("opción inválida");
} 

if(piezas < 1 || piezas > 20) {
    alert("Cantidad de piezas inválida");
}else {
    alert("Costo total: $" + (costoUnitario * piezas));
}