const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];

// ------ Ejercicio A ------

console.log("------ Ejercicio A ------");

console.log("* LAS PIZZAS CON ID IMPAR SON: ");
const PizzasIdImpar = pizzas.filter((producto) => {
  return producto.id % 2 !== 0;
});

PizzasIdImpar.forEach((producto) => {
  console.log(`-> La ${producto.nombre} Tiene id IMPAR`);
});

console.log("\n");

// ------ Ejercicio B ------

console.log("------ Ejercicio B ------");
console.log("¿HAY ALUGUNA PIZZA QUE VALGA MENOS DE $600");
const PrecioMenorA600 = pizzas.some((producto) => {
  return producto.precio < 600;
})
  ? console.log("Si, hay Productos que valen menos de $600")
  : console.log("No hay Productos que valen menos de $600");

console.log("\n");

// ------ Ejercicio C ------

console.log("------ Ejercicio C ------");
console.log("ESTOS SON NUESTROS PRODUCTOS Y SUS PRECIOS: ");
const NombrePizaYPrecio = pizzas.forEach((producto) => {
  console.log(`-> ${producto.nombre}, con valor de $${producto.precio}`);
});
console.log("\n");

// ------ Ejercicio C ------

console.log("------ Ejercicio C ------");
console.log("ESTOS SON LOS INGREDIENTES QUE TIENEN NUESTRAS ESPECIALIDADES:");
const RecorrerPizzas = pizzas.forEach((producto) => {
  console.log(`*** ${producto.nombre.toLocaleUpperCase()} ***`);
  const RecorrerIngredientes = producto.ingredientes.forEach((ingrediente) => {
    console.log(`-> ${ingrediente}`);
  });
});

console.log("\n");
