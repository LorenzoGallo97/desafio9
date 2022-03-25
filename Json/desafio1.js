//? encontrar la temperatura mas baja de los 3 días
const tempsDia1 = [25];
const temps = [...tempsDia1];
const tempMinima = Math.min(...temps);
let Lorenzo = {
  nombre: "Lorenzo Gallo",
  edad: 24,
  genero: "Masculino",
  ocupacion: "Estudiante",
};
Lorenzo["edad"] = 24;
Lorenzo = {
  ...Lorenzo,
  edad: 24,
};
class Persona {
  constructor(nombre, edad, genero, ocupacion) {
    this.nombre = nombre;
    this.edad = edad;
    this.genero = genero;
    this.ocupacion = ocupacion;
  }
  setearPropiedad(propiedad, valor) {
    this[propiedad] = valor;
  }
  borrarPropiedad(propiedad) {
    delete this[propiedad];
  }
}
console.log("Nombre: ", nombre);
console.log("Edad:", edad);
console.log ("Genero:", genero);
console.log ("ocupacion:", ocupacion);