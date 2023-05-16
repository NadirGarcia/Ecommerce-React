import './ItemCount.css'
import { useState } from "react"
import { NavLink } from 'react-router-dom'

export const ItemCount = ({ initial = 1, stock, onAdd }) => {
    const [quantity, setquantity] = useState(initial)
    const [buttonState, setButtonState] = useState(true)

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
        { buttonState ? (
            <div>
                <button onClick={increase}>+</button>
                <span>{quantity}</span>
                <button onClick={decrease}>-</button>
                <button onClick={() => {onAdd(quantity); setButtonState(prev => !prev)}}>Añadir a carrito</button>
            </div>
            ):(
            <div>
                <NavLink to = {'/'}><button>Seguir comprando</button></NavLink>
                <NavLink to = {'/cart'}><button>Ir a carrito</button></NavLink>
            </div>
            )
        } 
        </>  
    )
}