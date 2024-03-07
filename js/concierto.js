const General = 1;
const Preferencial = 2;
const VIP = 3;

const CostoGeneral = 50000;
const CostoPreferencial = 150000;
const costoVIP = 300000;

let CostoBoletas;
let costoNormal;
let CostoImpuestos;

const mediopago1 = "efectivo";
const mediopago2 = "tarjeta débito/crédito";

let OpcionBoletas = parseInt(prompt("Seleccione su localidad \n1. General \n2. Preferencial \n3. VIP"));
while(OpcionBoletas < 1 || OpcionBoletas > 3) {
    alert("Opción inválida. Por favor seleccione una de las opciones dadas.");
    OpcionBoletas = parseInt(prompt("Seleccione su localidad \n1. General \n2. Preferencial \n3. VIP"));
}

let CantidadBoletas = parseInt(prompt("¿Cuántas boletas desea comprar? (1-5)"))
while (CantidadBoletas < 1 || CantidadBoletas > 5) {
    alert("Cantidad de boletas inválida. Solo se permiten de 1 a 5 boletas por transacción");
    CantidadBoletas = parseInt(prompt("¿Cuántas boletas desea comprar? (1-5)"))
} 

switch(OpcionBoletas) {
    case 1:
        CostoBoletas = CostoGeneral;
        costoNormal = (CostoBoletas * CantidadBoletas);
        alert(`El costo de sus boletas sin impuesto es de: ${costoNormal}`);
        CostoImpuestos = (costoNormal)+(costoNormal*0.1)+(5000*CantidadBoletas);
        alert(`Su costo total es de: ${CostoImpuestos}`);
    break;
    case 2:
        CostoBoletas = CostoPreferencial;
        costoNormal = (CostoBoletas * CantidadBoletas);
        alert(`El costo de sus boletas sin impuesto es de: ${costoNormal}`);
        CostoImpuestos = (costoNormal)+(costoNormal*0.1)+(5000*CantidadBoletas);
        alert(`Su costo total es de: ${CostoImpuestos}`);
    break;
    case 3:
        CostoBoletas = CostoPreferencial;
        costoNormal = (CostoBoletas * CantidadBoletas);
        alert(`El costo de sus boletas sin impuesto es de: ${costoNormal}`);
        CostoImpuestos = (costoNormal)+(costoNormal*0.1)+(5000*CantidadBoletas);
        alert(`Su costo total es de: ${CostoImpuestos}`);
    break;
}
let mediopago = parseInt(prompt("Seleccione el tipo de pago: \n1. Efectivo \n2. Tarjeta débito/crédito"));
while(mediopago < 1 || mediopago > 3){
      alert("Medio de pago inválido. Por favor, seleccione un método dado.")
      mediopago = parseInt(prompt("Seleccione el tipo de pago: \n1. Efectivo \n2. Tarjeta débito/crédito"));
} 

if (mediopago === 1) {
    alert(`Su medio de pago es ${mediopago1}`);
    alert(`Fin de la transaccion`);
}else if (mediopago === 2){
    alert(`Su medio de pago es ${mediopago2}`);
    alert(`Fin de la transaccion`);
}