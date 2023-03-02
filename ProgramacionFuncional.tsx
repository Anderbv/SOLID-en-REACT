//Que es la programacion funcional
let a = 1;
let b = 2;
//creamos una referencia a un espacio en memoria
//dnetro del espacio de memoria se encuentra 1

//Programar de forma imperactiva, es programar yendo
//al objetivo
function suma(){
  b = 3;
  return a + 1;
}

//esta forma es horrible si queremos programar de forma funcional
//por que? porque estamos utilizando variables externas
//suma depende de una variable externa
//si a en algun punto del codigo cambia, el resultado
//de suma se veria re afectado

function sumaFuncionality(number1, number2) {
  return number1 + number2
}

//de esta forma suma seria declarativa
//en esta fn estoy modificando una variable externa 
//para nada, dependemos de una variable externa?
//tampoco

const c = sumaFuncionality(1,2);

//mi funcion declartiva es reutilizable en cualquier lugar
//Que significa que algo sea declarativo?
//Si yo siempre utilizo los mismos datos de entrada
//entonces el resultado siempre tendria que ser el mismo

// COMO HACER QUE TU CODIGO SEA FUNCIONAL?
// FUNCIONES DECLARATIVAS
// NO CREAR EFECTOS SECUANDARIOS
// INMUTABILIDAD => Las cosas se cambian no se modifican

const persona = {
  nombre: "Alan",
  edad: 15
}

let arreglo = [1,2,3] 

arreglo = [...arreglo, 4] //inmutabilidad

const persona2 = {...persona, edad: 29}

const filteredArray = arreglo.filter(n => n % 2 === 0)
console.log(filteredArray)

function sumarxd(...args) {
  let total = 0;
  args.forEach(a => (total += a))
  return total;
}

const resultA = sumarxd(3, 5, 2)
const resultBWithDivision = divideByTwo(sumarxd(1, 5))
console.log(resultBWithDivision)

function divideByTwo(value) {
  return value / 2;
}

let productos = [{precio: 300, nameProduct: 'Dildo'}, {precio: 250, nameProduct: 'PussyToy'}];

productos = productos.map((product) => ({...product, precio: product.precio * 2}))
//multiplicamos la propiedad precio por 2 de cada uno de nuestro productos

const array = [1,2,3,4,5,6,7,8,9]

for(let i = 0; i < array.length; i++) {
  setTimeout(() => {console.log(i)}, 3000) 
}

arreglo.map(e => {
  console.log(e)
  return e;
})


class Auto {
  kmH;
  constructor(kmH) {
    this.kmH = kmH;
  }
  
  getKmH() {
      return this.kmH;
  }
  
  setKmH(kmH) {
    this.kmH = kmH
  }
  
}

class UtilitiesJs {
  static convertKmHToMl(kmH) {
    //Que un metodo sea statico significa que no necesita
    //de instancearse a la clase que pertenece para poder
    //ser utilizado
    return kmH * 0.621
  }
}

const ferrari = new Auto(200);
const MlFerrari = UtilitiesJs.convertKmHToMl(ferrari.getKmH());
console.log(MlFerrari)