//Nuestros componentes, clases, fns deberian depender de abstraciones y no de
//implementaciones concretas

const fetcher = async (url: string) => {
    const res = await fetch(url);
    return res.json();
}

const Todo = () => {
   
}