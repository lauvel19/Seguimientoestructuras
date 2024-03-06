const pagocompleto = 1;
const pago2cu = 2;
const pago3cu = 3;

const valormat = 7000000;

let tipodepago;

let opciondepago = parseInt(prompt("Selecciones el tipo de pago de su matricula \n1. Pago completto de su matricula \n2. Pago a dos cuotas de su matricula \n3. Pago a tres cuotas de su matricula"));

switch(opciondepago) {
    case 1: 
    const descuento = (valormat*5)/100;

    alert(`su descuento es de ${descuento}`);
    
    const valorpagar1 = valormat - descuento;

    alert(`El total a pagar es ${valorpagar1}`);
    break;

    case 2:
    const cuotas2 = (valormat/2);
    alert(`Sus cuotas son de ${cuotas2}`);

    const cuotas2interes = (valormat*0.02);
    alert(`El interes mensual es de ${cuotas2interes}`);

    const valorpagarmes2 = cuotas2+cuotas2interes;
    alert(`El total a pagar es ${valorpagarmes2} por mes`);

    const valorpagar2 = valorpagarmes2*2;
    alert(`El total a pagar es ${valorpagar2}`);
    break;

    case 3:
    const cuotas3 = (valormat/3);
    alert(`Sus cuotas son de ${cuotas3}`);
    
    const cuotas3interes = (valormat*0.02);
    alert(`El interes mensual es de ${cuotas3interes}`);

    const valorpagarmes3 = cuotas3+cuotas3interes;
    alert(`El total a pagar es ${valorpagarmes3} por mes`);

    const valorpagar3 = valorpagarmes3*3;
    alert(`El total a pagar es ${valorpagar3}`);
    break;

    default:
        alert("Su opcion no es valida vuelve a intentarlo")
    
}