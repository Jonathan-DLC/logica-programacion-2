
// Lógica de Programación 2 - Conversor Modular de Temperatura

const prompt = require('prompt-sync')();

// Módulo de Validación: se encarga solo de verificar si es un número válido
function esNumeroValido(entrada) {
  return entrada !== null && entrada.trim() !== "" && !isNaN(Number(entrada));
}

// Módulo de Entrada: pide el dato y repite si hay error
function solicitarCelsius() {
  while (true) {
    const entrada = prompt("Ingresa la temperatura en grados Celsius: ");

    if (esNumeroValido(entrada)) {
      return Number(entrada);
    }

    console.log("Error: Debes ingresar un valor numérico válido. Intenta de nuevo.\n");
  }
}

// Módulos de Cálculo
function convertirAKelvin(celsius) {
  return celsius + 273.15;
}

function convertirAFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

// Módulo de Salida
function mostrarResultados(kelvin, fahrenheit) {
  console.log("Grados Kelvin: " + kelvin);
  console.log("Grados Fahrenheit: " + fahrenheit);
}

// Función Principal
function iniciarPrograma() {
  const celsius = solicitarCelsius();
  const kelvin = convertirAKelvin(celsius);
  const fahrenheit = convertirAFahrenheit(celsius);

  mostrarResultados(kelvin, fahrenheit);
}

// Ejecución del programa
iniciarPrograma();
