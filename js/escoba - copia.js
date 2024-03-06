const tipo1 = 1;
const tipo2 = 2;
const tipo3 = 3;



const durasint = 8000;
const durasnat = 10000;
const suavsint = 10000;
const suavnat = 12000;
const cepsint = 12000;
const cepnat = 15000;

const mango = 2000;
const punta = 500;

let tipo= parseInt(prompt("Selecciones el tipo de produccto \n1. Escoba dura \n2. Escoba suave \n3. Cepillo"));

if (tipo<1 || tipo>3){
    alert("Su entrada es invalida por favor eleigir una opcion del 1 al 3");
    alert(`Fin de la transaccion`);
}else{
    const tipocerda1 = 1;
    const tipocerda2 = 2;
    
    let tipocerdas= parseInt(prompt("Selecciones el tipo de cerdas de su produccto \n1. Natural \n2. Sintetico"));
    
    if (tipocerdas<1 || tipocerdas>3){
        alert("Su entrada es invalida por favor eleigir una opcion del 1 al 3");
        alert(`Fin de la transaccion`);
    }else{
    let cantidad= parseInt(prompt("Selecciones la cantidad (la cantidad debe ser mayor de 3 y menor de 30 unidades)"));
        if (cantidad<3 || cantidad>30){
        alert("Su entrada es invalida por favor eleigir una antida etre 3 y 30 unidades");  
        alert(`Fin de la transaccion`);
        }else{
            const adisionmango = 1
            const adisionpunta = 2
            const ninguno = 0
            
            let adision= parseInt(prompt("Seleccione si quiere un adisional \n1. Mango largo \n2. Gancho en punta \n3. Ninguna"))

            if (adision<1 || adision>3){
                alert("Su entrada es invalida por favor eleigir una opcion del 1 al 3");
                alert(`Fin de la transaccion`);
            }else{
                switch(tipo) {

                    case 1: /* escoba dura */
                    
                    if /*escoba dura mas cerdas naturales*/(tipocerdas === 1){
                        if /*cantidad*/ (cantidad>2 && cantidad<31){
                            if /*adision mango*/ (adision === 1){
                            const valorpagar1dm = (durasnat*cantidad)+(cantidad*mango);
                            alert(`Su total a pagar es de:  ${valorpagar1dm}`);
                            alert(`Fin de la transaccion`);
                            }else if /*adision gancho*/ (adision === 2){
                            const valorpagar1dg = (durasnat*cantidad)+(cantidad*punta);
                            alert(`Su total a pagar es de:  ${valorpagar1dg}`);
                            alert(`Fin de la transaccion`);
                            }else if /*ninguna adision*/ (adision === 3){
                            const valorpagar1d = (durasnat*cantidad);
                            alert(`Su total a pagar es de:  ${valorpagar1d}`);
                            alert(`Fin de la transaccion`);
                            }
                        }
                    } else if /*escoba dura mas cerdas sinteticas*/(tipocerdas === 2){
                        if /*cantidad*/ (cantidad>2 && cantidad<31){
                            if /*adision mango*/ (adision === 1){
                            const valorpagar2dm = (durasnat*cantidad)+(cantidad*mango);
                            alert(`Su total a pagar es de:  ${valorpagar2dm}`);
                            alert(`Fin de la transaccion`);
                            }else if /*adision gancho*/ (adision === 2){
                            const valorpagar2dg = (durasnat*cantidad)+(cantidad*punta);
                            alert(`Su total a pagar es de:  ${valorpagar2dg}`);
                            alert(`Fin de la transaccion`);
                            }else if /*ninguna adision*/ (adision === 3){
                            const valorpagar2d = (durasnat*cantidad);
                            alert(`Su total a pagar es de:  ${valorpagar2d}`);
                            alert(`Fin de la transaccion`);
                            }
                        }
                    }
                    break;
                    case 2: /* escoba suave */
                    
                    if /*escoba dura mas cerdas naturales*/(tipocerdas === 1){
                        if /*cantidad*/ (cantidad>2 && cantidad<31){
                            if /*adision mango*/ (adision === 1){
                            const valorpagar2dm = (suavsint*cantidad)+(cantidad*mango);
                            alert(`Su total a pagar es de:  ${valorpagar2dm}`);
                            alert(`Fin de la transaccion`);
                            }else if /*adision gancho*/ (adision === 2){
                            const valorpagar2dg = (suavsint*cantidad)+(cantidad*punta);
                            alert(`Su total a pagar es de:  ${valorpagar2dg}`);
                            alert(`Fin de la transaccion`);
                            }else if /*ninguna adision*/ (adision === 3){
                            const valorpagar2d = (suavsint*cantidad);
                            alert(`Su total a pagar es de:  ${valorpagar2d}`);
                            alert(`Fin de la transaccion`);
                            }
                        }
                    } else if /*escoba suave mas cerdas sinteticas*/(tipocerdas === 2){
                        if /*cantidad*/ (cantidad>2 && cantidad<31){
                            if /*adision mango*/ (adision === 1){
                            const valorpagar2dm = (durasnat*cantidad)+(cantidad*mango);
                            alert(`Su total a pagar es de:  ${valorpagar2dm}`);
                            alert(`Fin de la transaccion`);
                            }else if /*adision gancho*/ (adision === 2){
                            const valorpagar2dg = (durasnat*cantidad)+(cantidad*punta);
                            alert(`Su total a pagar es de:  ${valorpagar2dg}`);
                            alert(`Fin de la transaccion`);
                            }else if /*ninguna adision*/ (adision === 3){
                            const valorpagar2d = (durasnat*cantidad);
                            alert(`Su total a pagar es de:  ${valorpagar2d}`);
                            alert(`Fin de la transaccion`);
                            }
                        }
                    }
                    break;
                    case 3: /* cepillo */
                    
                    if /*cepillo duro mas cerdas naturales*/(tipocerdas === 1){
                        if /*cantidad*/ (cantidad>2 && cantidad<31){
                            if /*adision mango*/ (adision === 1){
                            const valorpagar3dm = (cepsint*cantidad)+(cantidad*mango);
                            alert(`Su total a pagar es de:  ${valorpagar3dm}`);
                            alert(`Fin de la transaccion`);
                            }else if /*adision gancho*/ (adision === 2){
                            const valorpagar3dg = (cepsint*cantidad)+(cantidad*punta);
                            alert(`Su total a pagar es de:  ${valorpagar3dg}`);
                            alert(`Fin de la transaccion`);
                            }else if /*ninguna adision*/ (adision === 3){
                            const valorpagar3d = (cepsint*cantidad);
                            alert(`Su total a pagar es de:  ${valorpagar3d}`);
                            alert(`Fin de la transaccion`);
                            }
                        }
                    } else if /*cepillo suave mas cerdas sinteticas*/(tipocerdas === 2){
                        if /*cantidad*/ (cantidad>2 && cantidad<31){
                            if /*adision mango*/ (adision === 1){
                            const valorpagar3dm = (cepnat*cantidad)+(cantidad*mango);
                            alert(`Su total a pagar es de:  ${valorpagar3dm}`);
                            alert(`Fin de la transaccion`);
                            }else if /*adision gancho*/ (adision === 2){
                            const valorpagar3dg = (cepnat*cantidad)+(cantidad*punta);
                            alert(`Su total a pagar es de:  ${valorpagar3dg}`);
                            alert(`Fin de la transaccion`);
                            }else if /*ninguna adision*/ (adision === 3){
                            const valorpagar3d = (cepnat*cantidad);
                            alert(`Su total a pagar es de:  ${valorpagar3d}`);
                            alert(`Fin de la transaccion`);

                            }
                        }
                    }
                    break;
                    default :
                    
                        alert("Su entrada es invalida por favor eleigir una opcion del 1 al 3")
                        alert(`Fin de la transaccion`);
                    
                    break;
                }
                    
            }
        }
    }
    
}







