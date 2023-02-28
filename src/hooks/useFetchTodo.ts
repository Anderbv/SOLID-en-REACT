import { type TodoType, fetchTodos } from './services/todos';
import { useState, useEffect } from 'react';



//se dedica a la gestion del estado y al fetching
const useFetchTodo = () => {
    const [todo, setTodo] = useState<TodoType[]>([]);
    const [isFetching, setIsFetching] = useState(true);
  
    useEffect(() => {
        //hacemos la gestion del estados con la tarea
        //que ya realizo fetchTodos()
        fetchTodos()
        .then(todos => setTodo(todos))
        .finally(() => {setIsFetching(false);})
      
    }, [])
    
    return {todo, isFetching}
};

export default useFetchTodo;