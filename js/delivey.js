const tipo_1 = 1;
const tipo_2 = 2;
const tipo_3 = 3;

const tipocomida1 = "Hamburguesa";
const tipocomida2 = "Pizzería";
const tipocomida3 = "Comida China";

const Hamburguesa_simple = 25000;
const Pizza_familiar = 50000;
const Arroz_chino = 30000;

const envio = 5000;

let tiporest = parseInt(prompt("Seleccione el restaurante: \n1. Hamburguesas \n2. Pizzería \n3. Comida China"));

switch (tiporest) {
    case 1: /*Hamburguesas*/
        alert(`La ${tipocomida1} cuesta ${Hamburguesa_simple}`);
        let cantidad1 = parseInt(prompt("Seleccione la cantidad"));
        const valor_pagar1 = Hamburguesa_simple * cantidad1;
        alert(`El costo de su producto es ${valor_pagar1}`);
        const total1 = valor_pagar1 + envio;
        alert(`Su total a pagar es ${total1}`);
        break;
    case 2: /*Pizza*/
    alert(`La ${tipocomida2} cuesta ${Pizza_familiar}`);
        let cantidad2 = parseInt(prompt("Seleccione la cantidad"));
        const valor_pagar2 = Hamburguesa_simple * cantidad2;
        alert(`El costo de su producto es ${valor_pagar2}`);
        const total2 = valor_pagar2 + envio;
        alert(`Su total a pagar es ${total2}`);
        break;
    case 3: /*Arroz chino*/
    alert(`La ${tipocomida3} cuesta ${Arroz_chino}`);
        let cantidad3 = parseInt(prompt("Seleccione la cantidad"));
        const valor_pagar3 = Hamburguesa_simple * cantidad3;
        alert(`El costo de su producto es ${valor_pagar3}`);
        const total3 = valor_pagar3 + envio;
        alert(`Su total a pagar es ${total3}`);
        break;

    default:
        alert("Selección no válida. Por favor, seleccione entre 1, 2 o 3.");
        break;
}

if (tiporest>3 || tiporest<0){
    alert("Fin de la transaccion");

}else if(tiporest === 1|| tiporest === 2 || tiporest === 3){
    const tiempo = "Tiempo de delivery 45 minutos a 1 hora.";
    const mediopago1 = "efectivo";
    const mediopago2 = "tarjeta débito/crédito";
    
    alert(tiempo);
    
    let mediopago = parseInt(prompt("Seleccione el tipo de pago: \n1. Efectivo \n2. Tarjeta débito/crédito"));
    
        if (mediopago === 1) {
            alert(`Su medio de pago es ${mediopago1}`);
            alert(`Fin de la transaccion`);
        }else if (mediopago === 2){
            alert(`Su medio de pago es ${mediopago2}`);
            alert(`Fin de la transaccion`);
        }else if(mediopago>2 || 1>mediopago){
            alert(`Medio de pago invalido`);
            alert(`Fin de la transaccion`);
        }    
} 