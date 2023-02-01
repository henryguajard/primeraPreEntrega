//categorias
const juegosDeTerrasa = `J`;
const mesas =`M`
const sofas =`S`

//productos
let productTerraza01 =`Juego living de terraza Sofia`
let productTerraza02 =`Juego living de terraza Home Alaya`
let productTerraza03 =`Juego living de terraza Arrayan Premium`
let productMesas01= `Mesa bar TuHome`
let productMesas02= `Mesa Amazonas negro`
let productMesas03= `Mesa blue dark`
let productSofas01= `Sofa slow`
let productSofas02= `Sofa Kunza`
let productSofas03= `Sofa Essential`

//precios
let precioTerraza01= 499990;
let precioTerraza02= 699990;
let precioTerraza03= 799990;
let precioMesas01= 299990;
let precioMesas02= 399990;
let precioMesas03= 199990;
let precioSofas01= 599990;
let precioSofas02= 899990;
let precioSofas03= 699990;

//Bienvenida
bienvenida()

function bienvenida() {
   alert(`¡bienvenido a DecoHouse :D !`);
  }

for (let i = 0; i < 100; i++) {
   let nombre = prompt("Ingrese su nombre para obtener un descuento");
   while (Number(nombre)) {
     nombre = parseInt(
     prompt(`ese no es un nombre vuelve a intentarlo`));
    }
    if(isNaN(nombre)) {
     alert(`felicidades  ${nombre} obtienes 20% de descuento`);
     break;
    }
}
bienvenida()  

let introduccion =``
//FUNCTION CATEGORIAS
function categorias (){
    let introduccion =prompt(`En este sitio web podras encontrar
    los muebles que tu casa necesita  elije la "Letra" de la 
    Categoria que andas buscando:
     ${juegosDeTerrasa}. Juegos de terraza
     ${mesas}. Mesas
     ${sofas}. Sofas`).toUpperCase();

    let contador =0
    while((introduccion!=`${juegosDeTerrasa}`)&&(introduccion!=`${mesas}`)&&(introduccion!=`${sofas}`)){
     alert(`categoria no encontrada`);
     contador++
     let introduccion =prompt(`En este sitio web podras encontrar
     los muebles que tu casa necesita  elije la "Letra" de la 
     Categoria que andas buscando:
     1. ${juegosDeTerrasa}. Juegos de terraza
     2. ${mesas}. Mesas
     3. ${sofas}. Sofas`).toUpperCase();
     alert(`categoria correcta`);
     alert(`regarga la pagina`);
     break;
    }
  
  if(introduccion==`J`){
    let seleccionTerrazas=  prompt(`"JUEGOS DE TERRAZAS" seleciona el numero del producto que necesitas:
    1. ${productTerraza01} $ ${precioTerraza01}
    2.${productTerraza02} $ ${precioTerraza02}
    3.${productTerraza03} $ ${precioTerraza03}`);


    if(seleccionTerrazas>=1 && seleccionTerrazas<=3){
        if(seleccionTerrazas==1){
      let cantidad=Number(prompt(` ${productTerraza01} $ ${precioTerraza01}
      ingresa la cantidad  que deceas comprar :)`));
      let totalConDescuento= (cantidad*precioTerraza01)*0.80;
      alert(`se te aplico 20% de descuento el total es: ${totalConDescuento}`);
      alert(`gracias por tu compra :D`);

    }else if(seleccionTerrazas==2){
        let cantidad=Number(prompt(`${productTerraza02} $ ${precioTerraza02}
        ingresa la cantidad  que deceas comprar :)`));
      let totalConDescuento= (cantidad*precioTerraza02)*0.80;
      alert(`se te aplico 20% de descuento el total es: ${totalConDescuento}`);
      alert(`gracias por tu compra :D`);

    }else if(seleccionTerrazas==3){
        let cantidad=Number(prompt(`${productTerraza03} $ ${precioTerraza03}
        ingresa la cantidad  que deceas comprar :)`));
      let totalConDescuento= (cantidad*precioTerraza03)*0.80;
      alert(`se te aplico 20% de descuento el total es: ${totalConDescuento}`);
      alert(`gracias por tu compra :D`);

    }
    }else{
        alert(`producto no encontrado :/
        vuelve a empezar`)
    }
  }
  if(introduccion==`M`){
    let seleccionMesas=  prompt(`"MESAS" seleciona el numero del producto que necesitas:
    1. ${productMesas01} $ ${precioMesas01}
    2.${productMesas02} $ ${precioMesas02}
    3.${productMesas03} $ ${precioMesas03}`);
  

    if(seleccionMesas>=1 && seleccionMesas<=3){
        if(seleccionMesas==1){
      let cantidad=Number(prompt(` ${productMesas01} $ ${precioMesas01}
      ingresa la cantidad  que deceas comprar :)`));
      let totalConDescuento= (cantidad*precioMesas01)*0.80;
      alert(`se te aplico 20% de descuento el total es: ${totalConDescuento}`);
      alert(`gracias por tu compra :D`);

    }else if(seleccionMesas==2){
        let cantidad=Number(prompt(`${productMesas02} $ ${precioMesas02}
        ingresa la cantidad  que deceas comprar :)`));
      let totalConDescuento= (cantidad*precioMesas02)*0.80;
      alert(`se te aplico 20% de descuento el total es: ${totalConDescuento}`);
      alert(`gracias por tu compra :D`);

    }else if(seleccionMesas==3){
        let cantidad=Number(prompt(`${productMesas03} $ ${precioMesas03}
        ingresa la cantidad  que deceas comprar :)`));
      let totalConDescuento= (cantidad*precioMesas03)*0.80;
      alert(`se te aplico 20% de descuento el total es: ${totalConDescuento}`);
      alert(`gracias por tu compra :D`);

    }
    }else{
        alert(`producto no encontrado :/
        vuelve a empezar`)
    }
  }
if(introduccion==`S`){
    let seleccionsofas=  prompt(`"SOFAS" seleciona el numero del producto que necesitas:
    1. ${productSofas01} $ ${precioSofas01}
    2.${productSofas02} $ ${precioSofas02}
    3.${productSofas03} $ ${precioSofas03}`);


    if(seleccionsofas>=1 && seleccionsofas<=3){
        if(seleccionsofas==1){
      let cantidad=Number(prompt(` ${productSofas01} $ ${precioSofas01}
      ingresa la cantidad  que deceas comprar :)`));
      let totalConDescuento= (cantidad*precioSofas01)*0.80;
      alert(`se te aplico 20% de descuento el total es: ${totalConDescuento}`);
      alert(`gracias por tu compra :D`);

    }else if(seleccionsofas==2){
        let cantidad=Number(prompt(`${productSofas02} $ ${precioSofas02}
        ingresa la cantidad  que deceas comprar :)`));
      let totalConDescuento= (cantidad*precioSofas02)*0.80;
      alert(`se te aplico 20% de descuento el total es: ${totalConDescuento}`);
      alert(`gracias por tu compra :D`);

    }else if(seleccionsofas==3){
        let cantidad=Number(prompt(`${productSofas03} $ ${precioSofas03}
        ingresa la cantidad  que deceas comprar :)`));
      let totalConDescuento= (cantidad*precioSofas03)*0.80;
      alert(`se te aplico 20% de descuento el total es: ${totalConDescuento}`);
      alert(`gracias por tu compra :D`);

    }
    }
    else{
        alert(`producto no encontrado :/
        vuelve a empezar`)
    }
  } 

}

categorias()