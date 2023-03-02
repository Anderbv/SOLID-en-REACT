//Liskov basicamente que un subtipo de objeto deberia ser sustituible
//por un objeto que sea del que hereda, osea que son intercambiables    
//si hacemos un animal y un perro deberian ser intercambiablse sin que petasen
//absolutamente nada

// export class Animal {
//     swim(distance: number) {
//         console.log(`${distance}m`)
//     }
// };
export class SwimmingAnimal {
    swim(distance: number) {
        console.log(`${distance}m`)
    }
};

export class Dog extends SwimmingAnimal {
    swim(distance: number) {
        console.log(`${distance}m`)
    }
};

export class Cat extends WalkingAnimal {
    
};

//en este caso Cat no es intercambiable por Animal
//porque el metod swim peta, esa no es la idea
//en este caso podriamos crear diferentes tipos de animales
