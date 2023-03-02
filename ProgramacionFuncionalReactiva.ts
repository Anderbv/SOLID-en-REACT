//y detras de cada uno de esos agujeros habra una persona obsevando
//hacia dentro 
//Desde un lado yo voy a estar agarrando una pelota roja y la voy
//colocar en un extremo, la empujo la pelota viene pasando
//por cada uno de los agujeros donde hay personas mirando a traves de
//esos agujeros y va a salir por el otro lado
//La programacion Reactiva es cada una de estas personas que estan
//observando a traves de los agujeros del tubo va a reaccionar de forma
//diferente a la informacion, en este caso a la pelota, por ejemplo
//una persona puede estar observando a traves del agujero con una 
//pistola de medidor de velocidad entonces esa persona le interesa
//saber cuantos centimetros por hora pasa la pelota
//la segunda persona puede estar observando de que color es la pelota
//en este caso es rja, la tercera puede estar pasando hay una pelota?
//pasa una pelota? o es un cuadrado qe es lo que esta pasando
//Ahora pensemos que a partir de una misma informacion, yo voy a poder
//reaccionar de forma diferente y ejecutar diferentes comportamientos
//en cuanto a eso

//la programacion reactiva tinee que ver el compartir informacion
//si yo quiero compartir cierta data que viene del back entre diferentes
//componentes, entre diferentes funcionalidades una buena forma es una
//de estas funcionalidades llama al endpoint, esa informacion la agarro
//la guardo dentro de mi archivo que dijimos que era una solucion
//primer problamitica de esto como saben las otras
//funcionalidades que esta esa informacion, como les avisamos?
//es un concepto de asyncronismo muy importante que es algo que
//siempre vamos a estar lidiando con

//Un observable es este canal de comunicacion, estos canales de comunicacion
//representan justamente que voy a tener diferentes sujetos del otro
//lado mirando hacia ese observable, van a observar y cuando pasa info a traves
//del mismo van a reconocer que hay una info nueva y van a reaccionar ejecutando
//su propio comportamiento

//Hay 3 tipos de observable
//1-observable comun que solamente para observar
//2-sashet observable por defecto para trabajar con canales de comunicacion
//qe a parte de recibir informacion puedo emitir un evento por ese canal
//puedo pasar info, una pelota a traves de mi tubo y todos aquellos que esten
//observando este sashet van a poder a recibirlo
//cual es el problema de este tipo? que tambien que los que ven, los que estar
//observando el sashet tambien se pueden transformar en emisores
//otro problema es que si nos suscribimos a este canal de informacion luego
//de que la informacion ya pasó, no voy a tener esta informacion
//es como decir que el dia de hoy me voy a suscribir   a esta revista de dportes
//no voy a esperar a recibir la revista del mes actual, voy a esperar a recibir
//la revista del siguiente mes, o del siguiente, siguiente mes
//como hacemos cuando un componente o una funcionalidad estaba esperando esta
//informacion y aqui es donde se encuentra el tercer tipo de observable que es
//3-Vigeibor sashet, este va a tener una peculiaridad, va a tener un bufer, un cache
//que quiere decir esto, principal diferencia entre un sashet y un vigeibor sashet
//a la hora de definirlo va a estar esperando un valor y este valor va a ser el por 
//defecto de ese canal de informacion entonces si nadie emitio ningun tipo de valor
//a traves de este canal, algo van a recibir
//es como por ejemplo cuando nosotros decismos me suscribo a la revista de deportes
//por suscribirte vas a recibir un email con info de la revista que acabaste de recibir, es la revista? no, es el por defecto es para que estes tranquilo, te estoy
//dando algo en vez de nada
//que pasa si emito algo a traves de este canal?
//lo que va a hacer esto ultimo que se emitio se va almacenar en el cache y va a pasar
//a hacer el defecto de nuestro canal de informacion
//es como si yo me suscribo el 10/16/20 si a la revista y obtengo primero de todo
//la ultima revista que ya se emitio asi ya puedo esperar a la siguiente eso es lo
//mismo es lo lindo del Vigeibor sashet, cual es la problematica? exactamente
//lo mismo que sashet, nuestro observadores pueden emitir una informacion
//es como si yo diga ahora estoy suscrito a mi revista de deportes, bueno voy
//a escribir una revista nueva de deportes y la voy  a amandar a todos los lectores
//NOOOOO, NASHEI QUE HACES? Imagina poder hacer eso, esta re mal.
//Entonces que se puede hacer
//supongamos que teneos una subscripcion de 4 funcionalidades a una informacion
//cuando cualquiera de ellas haga una peticion al backend para recibir info
//esto lo vamos a obtener, la vamos a utilizar y la vamos a compartir con el resto.
//Entonces es lo mismo que un periodista, una periodista va a venir y decir hey gente
//tengo esta informacion, REDACTORES, EDITORES!!! escribanlo, vamos a tener
//diferentes personas trabajando sobre la misma informacion y cada uno de ellos
//la va a tratar de manera diferente