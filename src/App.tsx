import './App.css'
import { Title, TitleWithButtonProps, TitleWithLink } from './openClosedPrinciple/app'
import AppTodos from './SingleResponsabilityP/app'

function App() {

  function saludar() {
    console.log("hola")
  }

  //renderizando componentes que extendieden de un padre
  return (
    <div className='App'>
      {/* <AppTodos /> */}
      <Title title='Hola como estan'><> </></Title>
      <TitleWithLink title='Hola como van' href='ander.com' buttonText='Dulanto'/>
      <TitleWithButtonProps title='Hola como van' onClick={saludar} buttonText='Dulanto'/>
    </div>
  )
}

export default App
