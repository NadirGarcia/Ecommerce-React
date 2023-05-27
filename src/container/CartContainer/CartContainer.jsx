import './CartContainer.css'
import { CartContext } from "../../context/CartContext"
import { useContext } from "react"
import { CartList } from "../../components/CartList/CartList"
import { NavLink } from "react-router-dom"

export const CartContainer = () => {
    const { cart, total, clear } = useContext(CartContext)

    return(
        <main className='cart__container'>
            <table >
                <caption>
                    <h1>Mi Carrito</h1>
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
                        <td></td>
                        <td><NavLink to='/checkout'><button className='btn'>Terminar mi compra</button></NavLink></td>
                        <td></td>
                        <td><h4>Total ${total}</h4></td>
                        <td><button  className='btn' onClick={() => clear()}>Vaciar carrito</button></td>
                    </tr>
                </tfoot>
            </table>
        </main>
    )
}
