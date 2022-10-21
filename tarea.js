/* EJERCICIO #1 */
let playa = [ "ojotas","paragua","coco","gorro","camara","pelota","limonada","pelota de futbol","anteojos","sandia"]
console.log(playa)
let tarjeta={
    Entidademisora:'NBank',
    Numero:'1234 5678 9876 5432',
    Titular:'AL HOLDER',
    Frvhadecaducidad:'12/99'
}
console.log(tarjeta)
let Perro={
    Nombre:"Pancho",
    Años:4,
    comer(){console.log(comer)},
}
console.log(Perro)
let Gato={
    Nombre:"paco",
    Años:3,
    caminar(){console.log(caminar)}
}
console.log(Gato)
let bici={
    asiento:'tiposillin',
    Cantidadderayos:12,
    diametroderueda:26,
    frenar(){
        console.log("frenar")
    }, 
    girar(){
        console.log("girar")
    } 

   
} 

console.log(bici.Cantidadderayos)
console.log(bici.frenar())
let auto={
    color:"rojo",
    velocidad:"200 km/h",
    ruedas:4,
    motor:" 8500 rpm " ,
    arranca(){
        console.log("arranca")
    }, 
    Frena(){
        console.log("Frenar")
    }, 
    
    dobla(){
        console.log("dobla")
    } 



} 
console.log(auto)

let mascotas=["mono","elefante","serpiente","rinoceronte","Leon","Jirafa","cebra","hipopotamo"]
console.log(mascotas)

let frutas=["uva","frutilla","cereza","banana","manzana"]
console.log(frutas)

let utiles=["2 mochilas","2 gorras","3 libros","3 cartucheras","2 leches","2 galones de agua"]
console.log(utiles)

/* EJERCICIO #2 */
for(let i = 1; i<=100;i++ ){
    console.log(i,"hola")
}
/* EJERCICIO #3 */


 (function (){  
    
    let contador = 0;
let saludo = function (){
    contador++;
    console. log (contador,"hola muy buenas");
    if (contador === 20){
        clearInterval(intervalo);
    }
};
// setTimeout(saludo, 3000);
let intervalo = setInterval (saludo, 500);
     } ())
