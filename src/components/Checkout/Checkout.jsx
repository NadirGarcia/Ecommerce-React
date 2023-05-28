import './Checkout.css'
import { CartContext } from "../../context/CartContext"
import { useContext, useState } from "react"
import { Form } from "../Form/Form"
import { getFirestore, addDoc, collection  } from 'firebase/firestore'
import swal from 'sweetalert';

export const Checkout = () => {
    const [sendForm, setSendForm] = useState()
    const { cart, total, clear } = useContext(CartContext)
console.log(sendForm);
    const confirmForm = (formData) => setSendForm(formData)

    const sendOrder = () => {
        const order = {
            buyer: sendForm,
            items: cart,
            total,
        }

            const db = getFirestore()
            const orderRef = collection(db, 'orders')

            addDoc(orderRef, order).then(response =>{ 
                if(response.id){
                    const orderAdded = response.id
                    clear()
                    swal({
                        title: "Felicitaciones!",
                        text: `"Tu codigo de compra es" ${orderAdded}`,
                        icon: "success",
                    });
                }
            })
            
    }


    return(
        <>
        <h1 className='checkout__title'>Resumen de tu compra</h1>
        <section className="section__container">
            <article className='section__form'>
                <Form confirmForm={confirmForm}/>
            </article>
            <article className='section__cart'>
                <table >
                    <thead>
                        <tr>
                            <th>Producto</th>
                            <th>Cant</th>
                            <th>Precio</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.map(prod => 
                            <tr key={prod.id}>
                                <td><h3>{prod.name}</h3></td>
                                <td><p>{prod.quantity}</p></td>
                                <td><p>${prod.price*prod.quantity}</p></td>
                            </tr>) 
                        }
                    </tbody>
                    <tfoot>
                        <tr>
                            {sendForm !== undefined && <td><button className='btn' onClick={sendOrder}>Confirmar Compra</button></td>}
                            <td></td>
                            <td><h2>Total: ${total}</h2></td>
                        </tr>
                    </tfoot>
                </table>
            </article>
        </section>
        </>
        
    )
}