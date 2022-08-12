const pizzaObj = [
  {
    id:0,
    nombre: "Napolitana",
    imagen: 'https://www.pizzafrog.com.ar/wp-content/uploads/2017/03/napolitana-frog-300x300.png',
    ingredientes: ["tomate","muzzarella","albahaca","aceituna"],
    precio: 400,
  },
    {
    id:1,
    nombre: "Marinara",
    imagen: 'https://lapasta.ar/wp-content/uploads/2021/02/Pizza_marinara-scaled-e1619349698413-300x300.jpg',
    ingredientes:["tomate","cebolla","ajo","oregano","aceite"],
    precio: 800,
  },
    {
    id:2,
    nombre: "Carbonara",
    imagen: 'https://i.pinimg.com/600x315/67/c4/38/67c4386274ce07fdc12837d4fd57e9f3.jpg',
    ingredientes:["panceta","huevo","nata","pimienta negra"],
    precio:900,
  },
  {
    id:3,
    nombre: "Hawaiana",
    imagen: 'https://img-global.cpcdn.com/recipes/fc78f1f22ba72d3f/300x300cq70/photo.jpg',
    ingredientes:["anana","muzzarella","tomate","jamon"],
    precio:500,
  },
  {
    id:4,
    nombre: "Cuatro quesos",
    imagen: 'https://pizzafactory.com.ar/image/cache/catalog/pizzas/Queso/0013-300x300.jpg',
    ingredientes:["muzzarella","ricotta","parmesano","roquefort"],
    precio:1000,
  },
  {
    id:5,
    nombre: "Caprichosa",
    imagen: 'https://img-global.cpcdn.com/recipes/ea4f082bd3f70403/300x300cq70/photo.jpg',
    ingredientes:["jamon","alcachofa","huevo","aceite de oliva","champiñon"],
    precio:1100,
  },
];




// guardo en el localstorage


localStorage.setItem("pizzas", JSON.stringify(pizzaObj));

// obtengo del local storage

let pizzas = JSON.parse(localStorage.getItem("pizzas")) || [];
console.log(pizzas);

//renderizo en cards

const cardPizza = document.querySelector('.cardPizza');


pizzaObj.map((pizza) => {
  const div = document.createElement('div');
  div.innerHTML =
  `
<div class="pizza__item">
    <div class = "contenido">
        <p class="pizzaNombre">${pizza.nombre}</p>
        <div class="imgPizza"><img src= ${pizza.imagen}/></div>
        <p class="pizzaPrecio">$${pizza.precio}</p>
        <p class="pizzaIngredientes">${pizza.ingredientes}</p>
    </div>
    </div>
`;
cardPizza.appendChild(div);
});



const pizzaInput = document.querySelector('.pizzaInput');

const searchPizza = (e) => {
  e.preventDefault();
  const searchedPizza = pizzaInput.value.trim();
  console.log(searchedPizza);

if(searchedPizza === ''){
  alert('ingresa una pizza')
  return;
}
};

//No supe como comparar el input value con el nombre de la pizza, y que me devuelva los demas datos de esa posicion donde esta el nombre.


const form = document.getElementById('form');

const init = () => {
  form.addEventListener('submit', searchPizza);
};
init();