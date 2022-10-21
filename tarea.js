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
let Animal={
    clases:'perro y gato',
    Atributos:'pancho,4años(Perro) y Paco,3años(Gato)',
    Metodos:'comer(perro) y caminar(gato)'

}
console.log(Animal)
let bici={
    atributos:'tipo_sillin,Num_radios,Diam_rueda',
    Metodos:'girar,frenar,pedalear'

} 
console.log(bici)
let auto={
    atributos:'color,velocida,ruedas,motor',
    Metodos:'arranca(),frena(),dobla()'

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
