function saludo() {
  let nombre = prompt("Ingrese su nombre:");

  if (nombre) {
    alert("¡Bienvenido, " + nombre + "!");
  } else {
    alert("Por favor, ingrese su nombre.");
  }
}