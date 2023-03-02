//De donde sale la programacion Reactiva

export class SharingService {
    // "SINGLE SOURCE OF TRUTH"
};
//Singleton significa que solo hay una unica instancia
//de esta clase en toda mi App
//Para qué me sirve esto?
//Para compartir datos
//"Nostros utlizamos el servicio para compartir informacion y el componente usa esa informacion"
//pero por qué?
//Si yo guardo info en un component que va a pasar con esa info si la vista cambia?
//Mi info desaparece porque un component tiene un ciclo de vida, se crear se instancia, se utiliza y se destruye.

//que haciamos antes para compartir info, viejemos al pasado
export class SharingService2 {
    // "SINGLE SOURCE OF TRUTH"

    //este es nuestro primer observable
    //-------------------
    private informacionSubject: Subject<string[]> = new Subject();
    //la info va y viene a traves de este canal
    //-------------------

    getInformacion() {
        return this.informacionSubject.asObservable();
        //que hace el .asObersable
        //transforma nuestro sashet(subject) en un observable
        //de esta manera dentro de mi componente no voy a poder
        //emitir ningun tipo de informacion si no utilizo el 
        //setInformation dentro del componente
    }

    setInformacion(informacion: string[]) {
        this.informacionSubject.next(informacion);
        //Que estamos haciendo aca?
        //estamos diciendo que a traves de este canal de comunicacion(informacionSubject) ahora
        //va a pasar esta informacion .next(estaInformacion)
    }

    //el encasulamiento dice voy a tener propiedades privadas dentro de mis clases
    //de manera que la unica forma de poder acceder a ellos sea en ambientes controlados
    //llamados metodos que son la unica forma de poder acceder y modificar estos datos desde
    //el exterior
};

export class LazyComponent {
    variableInterna: any[] = []
    
    constructor(private sharinService: SharingService2) {
        this.sharinService.getInformacion().subscribe((info) => {
            let canalInformacion = this.sharinService.getInformacion();
            canalInformacion.next("pasar informacion");
            //podemos pasar informacion por nuestro canal de comunicacion
            //a traves del metodo qe definimos que es setInformation
            //pero lo que no podemos hacer es recuperar
            //nuestro canal de comunicacion
            //y a partir de ahi poder emitir informacion con el metodo
            //.next eso lo evitamos dentro de nuestro canal de comunicacion
            //dotando al metodo getInformation de un metodo llamado
            //this.informacionSubject.asObservable();
            //ese metodo se llama .asObservable()
            this.variableInterna = info;
        });
        //|.subscribe() a partir de aca nos estamos suscribiendo
        //a esta informacion
        //Vamos a ser las personas que nos metemos por los agujeritos
        //del tubo a ver que es lo que esta pasando.
        //dentro del suscribe como vamos a obtener informacion?
        //con un callback |info => {}|

        this.sharinService.setInformacion(['']);
        //Aca estamos emitiendo informacion por el canal
        
    }
    //Un observable tiene una unica direccion que es un emisor hcia receptores
    //pero un sashet tiene dos direccion, que quiere decir esto?
    //Que puede tanto recibir informacion(subscribe) como emitir informacion
    //.next()
    //hay una regla de oro, si vos en un componente te vas a suscribir
    //ese componente no tendria que poder modificar, siempre desconfiemos
    //de nuestros compañeros

}

//patron observer
//Utilizamos la programacion Reactiva para cuando nosotros
//emitimos una informacion y los recepteros ni si quiera
//obtuvieron los datos o pongo que quiero obtener datos y el
//otro ni siquiera emitio la informacion
//Como se yo cuando algo pasa?
//Y ahi es cuando llegan los observables
//Que es un observable?
//En la programacion Reactiva hay diferentes tipos de observables
//Un observable es aquel que es un canal de informacion por lo cual
//va a pasar informacion
//En la vida real, pensariamos un observable como un tubo vacio
//si lo agarro de un extremo puedo ver el otro a traves del hueco del medio
//Y en ese tubo en alguno de sus costados tengo diferentes agujeros donde
//hay personas mirando por ese agujero, ahora vengo yo y tiro una pelotita
//por ahi, las personas somos diferentes, cada persona tiene diferente skills
//diferentes contextos, cada persona va a ver algo diferente en esa pelotita
//Alguno va a decir eh, la pelotita era roja, el de al lado va a decir
//la pelotita iba a 15cm por horaxd y despues tenemos otro que diga
//Chicos no se dieron cuenta no era una pelotita era un cuadrado
//Esa forma de pensar es la programacion Reactiva, yo tengo un observable
//Mi canal de informacion, mi tubito que va a tener diferentes oyentes(diferentes)
//componentes mirando a traves de el y cuando la informacion pase por ese observable
//cada uno de estos componentes van a ser cosas diferentes con la informacion que pasa
//Algunos por ejemplo, supongamos que compartimos informacion del usuario, algun
//componente solo utilizara el nombre, el otro el apellido, otro utilizara la edad, etc.
//Esto es parte de la programacion reactiva
//Hay diferentes tipos de observables

//SITUACION


//hoisting

const a = 1;

function suma(val) {
    return a + val;
}