const pizzas = [
  {
    id:1,
    nombre: "Napolitana",
    ingredientes: ["tomate","muzzarella","albahaca","aceituna"],
    precio: 400,
  },
    {
    id:2,
    nombre: "Marinara",
    ingredientes:["tomate","cebolla","ajo","oregano","aceite"],
    precio: 800,
  },
    {
    id:3,
    nombre: "Carbonara",
    ingredientes:["panceta","huevo","nata","pimienta negra"],
    precio:900,
  },
  {
    id:4,
    nombre: "Hawaiana",
    ingredientes:["anana","muzzarella","tomate","jamon"],
    precio:500,
  },
  {
    id:5,
    nombre: "Cuatro quesos",
    ingredientes:["muzzarella","ricotta","parmesano","roquefort"],
    precio:1000,
  },
  {
    id:6,
    nombre: "Caprichosa",
    ingredientes:["jamon","alcachofa","huevo","aceite de oliva","champiñon"],
    precio:1100,
  },
];

//-----------------------Ejercicio A)-------------------
console.log("------------------------------------");
console.log("a) las pizzas impares son");
console.log(pizzas.filter((pizza) => pizza.id % 2 == 1));


console.log("Las pizzas con id impar son");
for(let i=0; i < pizzas.length; i++){
if(pizzas[i].id % 2 == 1){
  console.log(pizzas[i].nombre);
}
};



//-----------------------Ejercicio B)-------------------
console.log("------------------------------------");
console.log ("b) las pizzas menores a 600 pesos son");
console.log(pizzas.filter((pizza) => pizza.precio < 600));

console.log("Las pizzas que salen menos de 600 pesos son:");
for(let i=0; i < pizzas.length; i++){
if(pizzas[i].precio < 600){

  console.log(pizzas[i].nombre);
}
};



//-----------------------Ejercicio C)-------------------
console.log("------------------------------------");
const arrNombres = pizzas.map((pizza) => pizza.nombre);
console.log("c)VERSION MAP DE ARRAY");
console.log(" las pizzas son", arrNombres);
console.log("--------")
console.log ("VERSION FOREACH");
console.log ("todas las pizzas son:");
const todasLasPizzas = pizzas.forEach(function(pizza){
    console.log(pizza.nombre);
});





//-----------------------Ejercicio D)-------------------
console.log("------------------------------------");
console.log ("d) todos los precios son")
const todosLosPrecios = pizzas.forEach(function(pizza){
    console.log(pizza.precio);
});


//-----------------------Ejercicio E)-------------------

console.log("------------------------------------");
console.log("e)");
for(let i=0; i < pizzas.length; i++){
console.log("La pizza",pizzas[i].nombre,"sale ", pizzas[i].precio,"pesos")
};