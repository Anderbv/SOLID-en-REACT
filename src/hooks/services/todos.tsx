import axios from 'axios';

type TodoType = {
    id: number;
    userId: number;
    title: string;
    completed: boolean
};
  
const fetchTodos = () => {//fetching de datos
    return axios
      .get<TodoType[]>('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.data)
      
} 
  
  //fetchTodos devuelve una promesa

export {
    type TodoType,
    fetchTodos
}












































interface MamaCoco {
  name: string;
  age: number;
}

class Mama implements MamaCoco {
  name: string;
  age: number;
  constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
  }
}


type User = {
  name: string;
}

interface Book {
  title: string;
  url: string;
  pages: number
}

interface BestSellers extends Book {

}

type outdateBooks = Book & User;

type Learner = User & {dni: number}

//Cuando utilizar types y interface
type Name = string;
const pepe: Name = "pepe";

//Union
//Es algo que solo puede hacer type
//podemos hacer esto
type NewType = Book | User;

// Tuple
type CourseLearners = [Book, number]

//declaration-merging
//solo se puede usar utilizando interface
interface Teacher {
  name: string;
}

interface Teacher {
  age: number;
}

const teacher: Teacher = {
  name: 'Rafa',
  age: 18
}