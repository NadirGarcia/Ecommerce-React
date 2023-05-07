import './ItemCount.css'
import { useState } from "react"

export const ItemCount = ({ stock }) => {
    const [count, setcount] = useState(1)

    const increase = () => {
        if(count < stock)
        setcount((prev) => prev + 1)
    }

    const decrease = () => {
        if(count > 1)
        setcount((prev) => prev - 1)
    }

    const onAdd = () => {
        if(stock !== 0){
        console.log(count);
        }else{
            console.log('Producto sin Stock');
        }
    }

    return(
        <div>
            <button onClick={increase}>+</button>
            <span>{count}</span>
            <button onClick={decrease}>-</button>
            <button onClick={onAdd}>Añadir a carrito</button>
        </div>
    )
}