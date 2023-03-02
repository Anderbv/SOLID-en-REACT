const Button = ({children, color, size}) => {
    return <button style={{color, fontSize: size === 'xl' ? '32px' : '16px'}}>{children}</button>
}

const RedButton = ({children, size}) => {
    return <Button size={size} color='red'>{children}</Button>
}
//redButton es un objeto que es un subtipo de este tipo que es superior(Button)
//porque Button seria nuestro del cual generamos todo
//recuerden que cuando utilicemos este subtipo podemos claramente reemplazarlo
//por el padre
//y donde lo utilicemos no tiene que petar

return (
    <div>
        <Button size='xl'>
            Mi boton funciona
        </Button>
    </div>
)
//Nosotros deberiamos poder cambiar RedButton por Button y que todo siga funcionando
//normalmente