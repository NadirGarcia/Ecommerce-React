import './CartList.css'
import { ItemCart } from "../ItemCart/ItemCart"

export const CartList = ({ cart }) => {
    return (
        <>
            { cart.map(prod => <tr key={prod.id} className="cart__box"><ItemCart {...prod}/></tr> ) }
        </>
    )
}