const pizzas = [
  {
    id:0,
    nombre: "Napolitana",
    ingredientes: ["tomate","muzzarella","albahaca","aceituna"],
    precio: 400,
  },
    {
    id:1,
    nombre: "Marinara",
    ingredientes:["tomate","cebolla","ajo","oregano","aceite"],
    precio: 800,
  },
    {
    id:2,
    nombre: "Carbonara",
    ingredientes:["panceta","huevo","nata","pimienta negra"],
    precio:900,
  },
  {
    id:3,
    nombre: "Hawaiana",
    ingredientes:["anana","muzzarella","tomate","jamon"],
    precio:500,
  },
  {
    id:4,
    nombre: "Cuatro quesos",
    ingredientes:["muzzarella","ricotta","parmesano","roquefort"],
    precio:1000,
  },
  {
    id:5,
    nombre: "Caprichosa",
    ingredientes:["jamon","alcachofa","huevo","aceite de oliva","champiñon"],
    precio:1100,
  },
];

const numero = document.getElementById("numeroInput");
const nombrePizza = document.getElementById('h2');
const precioPizza = document.getElementById('h4');
const boton = document.getElementById('boton');

boton.addEventListener('click', function () {

//tuve que poner numero.value == 6 porque me tiraba undefined solo en ese numero y no me tiraba el alert

if (numero.value > pizzas.length || numero.value < 0 || numero.value == 6){
alert('no hay pizza con ese id');
}
else{
const nombreDePizza = document.createTextNode(pizzas[numero.value].nombre);
nombrePizza.appendChild(nombreDePizza);

const precioDePizza = document.createTextNode(pizzas[numero.value].precio);
precioPizza.appendChild(precioDePizza);
}
});
