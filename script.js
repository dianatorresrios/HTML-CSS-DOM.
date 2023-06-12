// Creamos una función para validar valores numéricos
function esNumero(valor) {
  return !isNaN(parseFloat(valor)) && isFinite(valor);
}

// Creamos un objeto para almacenar la información de los productos y vendedores
var info = {
  "Aqua": [0, 200],
  "Emoción": [0, 180],
  "Alegría": [0, 160],
  "Frescura": [0, 150],
  "Juana": [0, 0],
  "Pedro": [0, 0],
};

// Creamos una función para actualizar la información de venta de un producto/vendedor
function actualizarVentas(nombre, cantidad, precio) {
  if (nombre in info) {
    if (esNumero(cantidad)) {
      cantidad = parseFloat(cantidad);
      info[nombre][0] += cantidad;
      info[nombre][1] += cantidad * precio;
      return true;
    } else {
      console.log("ERROR: La cantidad debe ser un valor numérico.");
      return false;
    }
  } else {
    console.log("ERROR: No se reconoce el nombre del producto o vendedor.");
    return false;
  }
}

// Creamos una función para mostrar la información actualizada en consola
function mostrarInfo() {
  console.log("Cantidad vendida por producto:");
  for (var producto in info) {
    if (!["Juana", "Pedro"].includes(producto)) {
      console.log("- " + producto + ": " + info[producto][0]);
    }
  }
  console.log("Monto recolectado por vendedor:");
  for (var vendedor in info) {
    if (["Juana", "Pedro"].includes(vendedor)) {
      console.log("- " + vendedor + ": $" + info[vendedor][1].toFixed(2));
    }
  }
}

// Creamos una función para determinar el empleado del mes
function empleadoDelMes() {
  var ventas = [info["Juana"][1], info["Pedro"][1]];
  var maxVentas = Math.max(...ventas);
  if (ventas.filter(venta => venta == maxVentas)).length   }
