import { CartContext } from "../../context/CartContext"
import { useContext } from "react"

export const ItemCart = ({ id, name, price, quantity}) => {
    const { removeItem } = useContext(CartContext)

    return(
        <>
            <td><h3>{name}</h3></td>
            <td><p>${price}</p></td>
            <td><p>{quantity}</p></td>
            <td><p>${price*quantity}</p></td>
            <td><button onClick={() => removeItem(id)}>x</button></td>
        </>
    )
}