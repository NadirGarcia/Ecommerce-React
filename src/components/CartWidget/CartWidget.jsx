import './CartWidget.css'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { NavLink } from 'react-router-dom'

export const CartWidget = () => {
    const {totalQuantity} = useContext(CartContext)

    return(
        <div className="cart">
            <NavLink to={'/cart'}><img src="../images/cart.svg" alt="CartWidget" className="cart__img"/></NavLink>
            <span className="cart__span">{totalQuantity}</span>
        </div>
    )
}

