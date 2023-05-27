import './ItemCount.css'
import { useState } from "react"

export const ItemCount = ({ initial = 1, stock, onAdd, changeBUttonState }) => {
    const [quantity, setquantity] = useState(initial)

    const increase = () => {
        if(quantity < stock)
        setquantity((prev) => prev + 1)
    }

    const decrease = () => {
        if(quantity > 1)
        setquantity((prev) => prev - 1)
    }

    return(
        <>
            <div className='counter__container'>
                <div className='counter'>
                    <button className='counter__btn' onClick={increase}>▲</button>
                    <span className='counter__qty'>{quantity}</span>
                    <button className='counter__btn' onClick={decrease}>▼</button>
                </div>
                <button className='count__btn' onClick={() => {onAdd(quantity); changeBUttonState()}}>Añadir a carrito</button>
            </div>
        </>  
    )
}