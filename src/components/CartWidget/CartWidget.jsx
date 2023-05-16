import './CartWidget.css'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

const CartWidget = () => {
    const {totalQuantity} = useContext(CartContext)

    return(
        <div className="cart">
            <img src="./images/cart.svg" alt="CartWidget" className="cart__img"/>
            <span className="cart__span">{totalQuantity}</span>
        </div>
    )
}

export default CartWidget