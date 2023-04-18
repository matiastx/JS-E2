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

// Utilizando métodos de array e iterando sobre el array de pizzas, realizar las siguientes actividades, imprimiendo en consola:

// a)  Las pizzas que tengan un id impar.
// b) Responder: ¿Hay alguna pizza que valga menos de $600?
// c) El nombre de cada pizza con su respectivo precio.
// d) Todos los ingredientes de cada pizza (En cada iteración imprimir los ingredientes de la pizza que se esta recorriendo). Ayuda: van a tener que realizar dos recorridos, ya que cada pizza del array de pizzas tiene una propiedad "ingredientes" cuyo valor es un array con ingredientes.

// TODAS  las respuestas deben ser USER-FRIENDLY.

// ------ Ejercicio A ------

console.log("------ Ejercicio A ------");

for (const elemento of pizzas) {
  if (elemento.id % 2 !== 0) {
    console.log(`* La ${elemento.nombre} Tiene id IMPAR`);
  }
}
console.log("\n");

// ------ Ejercicio B ------

console.log("------ Ejercicio B ------");

console.log(`¿Hay alguna pizza que valga menos de $600?`);

let MenosDe600 = 0;
let PizzaMenosDe600 = [];

for (const elemento of pizzas) {
  if (elemento.precio < 600) {
    MenosDe600++;
    PizzaMenosDe600.unshift(elemento.nombre);
  }
}
if (MenosDe600 > 0) {
  console.log(
    `Si, En este momento hay ${MenosDe600} pizzas con valor inferior a $600`,
    `\n(Estas son: ${PizzaMenosDe600.toLocaleString()})`
  );
} else {
  console.log(`No, en este momento no hay pizzas que valen menos de $600`);
}
console.log("\n");

// ------ Ejercicio C ------

console.log("------ Ejercicio C ------");
console.log("Estos son nuestros Productos y sus Precios:");
for (const elemento of pizzas) {
  console.log(`* ${elemento.nombre} - $ ${elemento.precio}`);
}
console.log("\n");

// ------ Ejercicio C ------

console.log("------ Ejercicio C ------");
console.log("Te contamos sobre nuestras Pizzas y sus Ingredientes:");
for (const elemento of pizzas) {
  console.log(`* ${elemento.nombre.toLocaleUpperCase()}: `);
  for (ingredientes of elemento.ingredientes) {
    console.log(`-> ${ingredientes}`);
  }
}
console.log("\n");
