const TarifaBestsellers = 500;
const TarifaLiteratura = 100;
const TarifaAcademicos = 0;

let CostoPrestamo;

let OpcionLibros = parseInt(prompt("Seleccione la categoría:\n1. BestSellers\n2. Literatura\n3. Académicos"));
while(OpcionLibros < 1 || OpcionLibros > 3) {
  alert("Opción inválida. Por favor, seleccione una de las opciones dadas.");
  OpcionLibros = parseInt(prompt("Seleccione la categoría:\n1. BestSellers\n2. Literatura\n3. Académicos"));
}

switch (OpcionLibros) {
    case 1:
        let TitulosBestsellers = parseInt(prompt("Seleccione el título del libro que desea llevar: \n1. Sapiens: Una breve historia de la humanidad \n2. El poder del hábito \n3. El monje que vendió su Ferrari"));
        CostoPrestamo = TarifaBestsellers;
        break;
    case 2:
        let TitulosLiteratura = parseInt(prompt("Seleccione el título del libro que desea llevar: \n1. Cien años de soledad \n2. Don Quijote de la Mancha \n3. El conde de Montecristo"));
        CostoPrestamo = TarifaLiteratura;
        break;
    case 3:
        let TitulosAcademicos = parseInt(prompt("Seleccione el título del libro que desea llevar: \n1. La estructura de las revoluciones científicas \n2. El Capital \n3. La riqueza de las naciones"));
        CostoPrestamo = TarifaAcademicos;
        break;
}

let CantidadLibros = parseInt(prompt("¿Cuántos libros desea solicitar? (1-5)"));
while (CantidadLibros < 1 || CantidadLibros > 5) {
    alert("Cantidad de libros inválida. Puede solicitar máximo 5 libros.");
    CantidadLibros = parseInt(prompt("¿Cuántos libros desea solicitar? (1-5)"));
}

if (OpcionLibros !== 3) {
    let TiempoPrestamo = parseInt(prompt("¿Por cuántos días desea pedir el préstamo? (1-30)"));
    while (TiempoPrestamo < 1 || TiempoPrestamo > 30) {
        alert("Cantidad de días inválida. El plazo de días debe estar entre 1 y 30 días.");
        TiempoPrestamo = parseInt(prompt("¿Por cuántos días desea pedir el préstamo? (1-30)"));
    }

    if (TiempoPrestamo >= 10) {
        const valor = CostoPrestamo * TiempoPrestamo;
        const descuento = valor * 0.1;
        alert("Su descuento es de: $" + descuento);
        const valorTotal = valor - descuento;
        alert("Costo total: $" + valorTotal);
    } else {
        const valorNormal = CostoPrestamo * TiempoPrestamo;
        alert("Costo total: $" + valorNormal);
    }
} else {
    alert("Su préstamo de libros académicos no tiene costo. ¡Disfrute su lectura!");
}
