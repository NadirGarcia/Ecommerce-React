import { CartContext } from "../../context/CartContext"
import { useContext } from "react"

export const Cart = () => {
    const { cart, total, removeItem } = useContext(CartContext)

    return(
        cart.map(prod => 
            <div key = {prod.id}>
                <div >
                    <h3>{prod.name}</h3>
                    <p>${prod.price}</p>
                    <p>{prod.quantity}</p>
                    <p>Subtotal ${prod.price*prod.quantity}</p>
                    <button onClick={() => removeItem(prod.id)}>Eliminar</button>
                </div>
                <p>Total ${total}</p>
            </div>
    ))
}