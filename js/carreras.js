let Edad = parseInt(prompt(`Bienvenido a las apuestas de carreras F1. Ingrese su edad`));
while (Edad < 18) {
    alert("Usted es menor de edad, no puede apostar.");
    Edad = parseInt(prompt(`Bienvenido a las apuestas de carreras F1. Ingrese su edad`));
}

let cuotaPilotoA = 1.6;
let cuotaPilotoB = 1.3;
let cuotaPilotoC = 1.7;
let cuotaPilotoD = 1.2;
let cuotaPilotoE = 1.5;
let cuotaPilotoF = 1.8;

let tipoCarrera = parseInt(prompt(`Seleccione el tipo de apuesta \n1. Ganador de Carrera \n2. Posiciones exactas (seleccionar 1er y 2do puesto)`));
while (tipoCarrera < 1 || tipoCarrera > 2) {
    alert("Apuesta inválida. Por favor, seleccione las apuestas disponibles");
    tipoCarrera = parseInt(prompt(`Seleccione el tipo de apuesta \n1. Ganador de Carrera \n2. Posiciones exactas (seleccionar 1er y 2do puesto)`));
}

let opcionCarrera = parseInt(prompt(`Seleccione la carrera para apostar \n1. Carrera 1: Piloto A (${cuotaPilotoA}), Piloto B (${cuotaPilotoB}), Piloto C (${cuotaPilotoC}) \n2. Carrera 2: Piloto A (${cuotaPilotoD}), Piloto B (${cuotaPilotoE}), Piloto C (${cuotaPilotoF})`));
while (opcionCarrera < 1 || opcionCarrera > 2) {
    alert("Carrera inválida. Por favor ingrese una carrera disponible.")
    opcionCarrera = parseInt(prompt(`Seleccione la carrera para apostar \n1. Carrera 1: Piloto A (${cuotaPilotoA}), Piloto B (${cuotaPilotoB}), Piloto C (${cuotaPilotoC}) \n2. Carrera 2: Piloto A (${cuotaPilotoD}), Piloto B (${cuotaPilotoE}), Piloto C (${cuotaPilotoF})`));
}

let pilotoGanador = "";
let cuotaPiloto = 0;

switch (tipoCarrera) {
    case 1:
        switch (opcionCarrera) {
            case 1:
                pilotoGanador = prompt(`Seleccione el piloto por el que desea apostar \n1. Piloto A (${cuotaPilotoA}) \n2. Piloto B (${cuotaPilotoB}) \n3. Piloto C (${cuotaPilotoC})`);
                cuotaPiloto = pilotoGanador === "1" ? cuotaPilotoA : (pilotoGanador === "2" ? cuotaPilotoB : cuotaPilotoC);
                alert(`Usted ha seleccionado al Piloto ${pilotoGanador === "1" ? "A" : (pilotoGanador === "2" ? "B" : "C")} con cuota ${cuotaPiloto}`);
                break;
            case 2:
                pilotoGanador = prompt(`Seleccione el piloto por el que desea apostar \n1. Piloto D (${cuotaPilotoD}) \n2. Piloto E (${cuotaPilotoE}) \n3. Piloto F (${cuotaPilotoF})`);
                cuotaPiloto = pilotoGanador === "1" ? cuotaPilotoD : (pilotoGanador === "2" ? cuotaPilotoE : cuotaPilotoF);
                alert(`Usted ha seleccionado al Piloto ${pilotoGanador === "1" ? "D" : (pilotoGanador === "2" ? "E" : "F")} con cuota ${cuotaPiloto}`);
                break;
        }
        break;

    case 2:
        switch (opcionCarrera) {
            case 1:
                let primerPuesto1 = parseInt(prompt(`Seleccione el piloto para el primer puesto \n1. Piloto A (${cuotaPilotoA}) \n2. Piloto B (${cuotaPilotoB}) \n3. Piloto C (${cuotaPilotoC})`));
                let segundoPuesto1 = parseInt(prompt(`Seleccione el piloto para el segundo puesto \n1. Piloto A \n2. Piloto B \n3. Piloto C`) !== primerPuesto1 ? primerPuesto1 : parseInt(prompt(`Por favor, seleccione un piloto diferente al primer puesto`)));
                alert(`Piloto seleccionado en el primer puesto: ${primerPuesto1}, Piloto seleccionado en el segundo puesto: ${segundoPuesto1}`);
                break;
            case 2:
                let primerPuesto2 = parseInt(prompt(`Seleccione el piloto para el primer puesto \n1. Piloto D (${cuotaPilotoD}) \n2. Piloto E (${cuotaPilotoE}) \n3. Piloto F (${cuotaPilotoF})`));
                let segundoPuesto2 = parseInt(prompt(`Seleccione el piloto para el segundo puesto \n1. Piloto D \n2. Piloto E \n3. Piloto F`) !== primerPuesto2 ? primerPuesto2 : parseInt(prompt(`Por favor, seleccione un piloto diferente al primer puesto`)));
                alert(`Piloto seleccionado en el primer puesto: ${primerPuesto2}, Piloto seleccionado en el segundo puesto: ${segundoPuesto2}`);
                break;
        }
        break;
}

let montoApuesta = parseInt(prompt("Ingrese el monto de su apuesta (10.000 - 1'000.000) "));
while (montoApuesta < 10000 || montoApuesta > 1000000) {
    alert("Monto de apuesta inválido. El rango es de 10.000 a 1'000.000");
    montoApuesta = parseInt(prompt("Ingrese el monto de su apuesta (10.000 - 1'000.000) "));
}
alert(`Su apuesta es de ${montoApuesta}`);

let montoGanado = Math.random() < 0.5 ? cuotaPiloto * montoApuesta : 0;
let mensajeResultado = montoGanado > 0 ? "Felicidades, ¡ha ganado la apuesta!" : "Lo siento, ha perdido la apuesta.";
alert(`${mensajeResultado} Su monto ganado es: ${montoGanado}`);
