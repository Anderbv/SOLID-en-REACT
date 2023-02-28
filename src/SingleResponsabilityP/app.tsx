import useFetchTodo from '../hooks/useFetchTodo';


function AppTodos() {

  // //required parce readonly
  //single responsability
  //este componente solo se encarga de renderizar los datos
  const {todo, isFetching} = useFetchTodo();

  if(isFetching) {
    return <p>Loading...</p>
  }

  return (
    <ul className="App">
      {todo.map((todo: any, index: number) => {
        return (
          <li key={index}>
            <span>{todo.id}</span>
            <span>{todo.title}</span>
          </li>
        )
      })}
    </ul>
  )
}

export default AppTodos;
