import { createContext, useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])
    console.log(cart);

    const addItem = (itemAdd) => {
        if(!isInCart(itemAdd.id)){
            setCart(prev => [...prev, itemAdd])
        }else{
            /* const findRepeat = cart.find(prod => prod.id === itemAdd.id)
            itemAdd.quantity = findRepeat.quantity + itemAdd.quantity
            setCart(prev=> [...prev, findRepeat]) */
        }
    }

    const isInCart = (id) => cart.some(prod => prod.id === id )

    const getTotalQuantity = () => {
        let accu = 0
        cart.forEach( prod => {
            accu  += prod.quantity
        })
        return accu
    } 

    const totalQuantity = getTotalQuantity()

    const getTotal = () => {
        let total = 0
        cart.forEach(prod =>{
            total += prod.price * prod.quantity
        })
        return total
    }

    const total = getTotal()

    const removeItem = (id) => {
        const cartUpdated = cart.filter(prod => prod.id !== id)
        setCart(cartUpdated)
    }

    return(
        <CartContext.Provider value={{ addItem, cart, totalQuantity, total, removeItem }}>
            {children}
        </CartContext.Provider>
    )
}