import './CartWidget.css'

const CartWidget = ({ counter }) => {
    return(
        <div className="cart">
            <img src="./images/cart.svg" alt="CartWidget" className="cart__img"/>
            <span className="cart__span">{counter}</span>
        </div>
    )
}

export default CartWidget