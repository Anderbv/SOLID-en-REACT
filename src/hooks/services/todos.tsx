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