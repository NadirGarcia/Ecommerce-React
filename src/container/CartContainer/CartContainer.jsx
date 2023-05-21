import './CartContainer.css'
import { CartContext } from "../../context/CartContext"
import { useContext } from "react"
import { CartList } from "../../components/CartList/CartList"
import { NavLink } from "react-router-dom"

export const CartContainer = () => {
    const { cart, total } = useContext(CartContext)

    return(
        <body className='cart__container'>
            <table >
                <caption>
                    Mi Carrito
                </caption>
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>Subtotal</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                        <CartList cart= {cart} />
                </tbody>
                <tfoot>
                    <tr>
                        <td><NavLink to='/checkout'>Comprar</NavLink></td>
                        <td><h4>Total de la compra ${total}</h4></td>
                    </tr>
                </tfoot>
            </table>
        </body>
    )
}
