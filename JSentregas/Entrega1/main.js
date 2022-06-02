let arrayIngredientes = ["Agua", "Harina", "Levadura", "Salsa", "Oregano", "Aceitunas", "Sal", "Albahaca", "Queso", "Tomate"];


function paridad(){

  let paresArr = [];
  let imparesArr = [];

  for(let i = 0; i < arrayIngredientes.length; i++){
  if(arrayIngredientes[i].length % 2 == 0){
    paresArr.push(arrayIngredientes[i]);
  }
  else {
    imparesArr.push(arrayIngredientes[i]);
  }
}
    console.log("Los ingredientes pares son: ", paresArr);
    console.log("Los ingredientes impares son: ", imparesArr);
}
paridad();