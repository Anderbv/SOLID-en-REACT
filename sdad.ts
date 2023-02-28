const logger = <T>(variable: T) => {
    console.log(variable)
  }

logger<string>('Hola');
//asignamos el tipo al ejecutar la funcion

interface GenericType<T> {
    value: T
};

const xd: GenericType<number> = {
    value: 1
} 

interface AndersonType {
    name: string;
    edad: number;
    dni: number
}

const ander: Partial<AndersonType> = {
    name: 'Ander',
    edad: 19
};

const logger2 = <T>(variable: T) => {
    console.log(variable)
}

logger2<AndersonType>(ander as AndersonType);
//En este caso estamos diciendo que el objeto ander que utiliza parcialmente el type
//AndersonType name, edad que lo tome como si fuese el completo, que no lo tome como
//un partial

interface PersonaInterface {
    nombre: string;
    edad: number;
    dni?: string;
}

interface AlumnoInterface {
    curso: string;
};

const alumnaOPersona: PersonaInterface | AlumnoInterface = {
    curso: 'Angular'
};
//en este caso estamos buscando que cumpla con uno o el otro, con alguno de los dos(con una de las 2 interfaces)

const alumnoOPersona: PersonaInterface & AlumnoInterface = {
    nombre: "Alex",
    edad: 18,
    curso: "Angular",
}
//en este caso esperamos que cumpla con las dos interfaces