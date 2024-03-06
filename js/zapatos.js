const PrecioClasicos = 500000;
const PrecioRunning = 800000;
const PrecioBasketball = 1000000;

const OpcionClasico = 1;
const OpcionRunning = 2;
const OpcionBasketball = 3;

let CostoZapatos;

let OpcionZapatos = parseInt(prompt("Seleccione el modelo de tenis \n1. Clásicos \n2. Running \n3. Basketball"));
while(OpcionZapatos < 1 || OpcionZapatos >3) {
  alert("Opción inválida. Por favor, seleccione una de las opciones dadas.")
  OpcionZapatos = parseInt(prompt("Seleccione el modelo de tenis \n1. Clásicos \n2. Running \n3. Basketball"));
}

let Talla = parseInt(prompt("Ingrese la talla de los zapatos (35-44):"));
while (Talla < 35 || Talla > 44) {
  alert("Talla inválida. La talla debe estar entre 35 y 44.");
  Talla = parseInt(prompt("Ingrese la talla de los zapatos (35-44):"));
}

let pares = parseInt(prompt("Ingrese la cantidad de pares que desea llevar (1-5):"));
while (pares < 1 || pares > 5) {
  alert("Cantidad de pares inválida. Debe ser entre 1 y 5.");
  pares = parseInt(prompt("Ingrese la cantidad de pares que desea llevar (1-5):"));
}

switch (OpcionZapatos) {
  case 1:
    CostoZapatos = PrecioClasicos;
      if (pares >= 3) {
        const valor = (PrecioClasicos * pares);
        const descuento = valor * 0.1;
        alert("Su descuento es de: $" + descuento);
        const valorTotal = valor - descuento;
        alert("Costo total: $" + valorTotal);
      }else if (pares < 3) {
        const valorNormal = (PrecioClasicos * pares);
        alert("Costo total: $" + valorNormal)
      }
    break;
    case 2: 
    CostoZapatos = PrecioRunning;
    if (pares >= 3) {
      const valor = (PrecioRunning * pares);
      const descuento = valor * 0.1;
      alert("Su descuento es de: $" + descuento);
      const valorTotal = valor - descuento;
      alert("Costo total: $" + valorTotal);
    }else if (pares < 3) {
        const valorNormal = (PrecioRunning * pares);
        alert("Costo total: $" + valorNormal)
      }
  break;
  case 3: 
  CostoZapatos = PrecioBasketball;
  if (pares >= 3) {
    const valor = (PrecioBasketball * pares);
    const descuento = valor * 0.1;
    alert("Su descuento es de: $" + descuento);
    const valorTotal = valor - descuento;
    alert("Costo total: $" + valorTotal);
  }else if (pares >= 1) {
    const valorNormal = (PrecioBasketball * pares);
    alert("Costo total: $" + valorNormal)
  }
break;

 }