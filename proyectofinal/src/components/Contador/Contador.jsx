import { useState } from "react";

export function Contador(){

const [contador, setContador] = useState(0);

const incrementar = () =>{
    setContador(contador + 1)
};

const decrementar = () =>{
    setContador(contador - 1)
};

return(
    <div>
        <p>{contador}</p>
        <button onClick={incrementar}> Agregar cookie</button>
         <button onClick={decrementar}> Eliminar cookie</button>
    </div>
)

}