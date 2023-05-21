import './CartList.css'
import { ItemCart } from "../ItemCart/ItemCart"

export const CartList = ({ cart }) => {
    return (
        <>
            { cart.map(prod => <tr className="cart__box"><ItemCart key= {prod.id} {...prod}/></tr> ) }
        </>
    )
}