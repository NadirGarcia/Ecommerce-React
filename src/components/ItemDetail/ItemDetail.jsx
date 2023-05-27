import './ItemDetail.css'
import { ItemCount } from "../ItemCount/ItemCount"
import { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import { NavLink } from 'react-router-dom'

export const ItemDetail = ({ id, name, image, description, price, stock}) => {
    const [buttonState, setButtonState] = useState(false)
    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        addItem({id, name, price, quantity});
    }

    const changeBUttonState = () => {
        setButtonState(prev => !prev)
    }

    if(buttonState){
        return(
            <div className="detail__card--add">
                <h2>Su producto fue agregado al carrito!!</h2>
                <div>
                    <NavLink to = {'/'}><button className='detail__card--btn'>Seguir comprando</button></NavLink>
                    <NavLink to = {'/cart'}><button className='detail__card--btn'>Ir al carrito</button></NavLink>
                </div>
            </div>
        )
    } 
    
    return(
        <>
            <span className='detail__title'>{name}</span>
            <section className="detail__card">
                <div>
                    <img className='detail__img' src={image} alt=""/>
                </div>
                <div>
                    <span className='detail__price'>${price}</span>
                    <ItemCount stock={stock} onAdd={handleOnAdd} changeBUttonState={changeBUttonState}/>
                </div>
            </section>
            <div className='detail__description'>
                <h3>Descripcion</h3>
                <p >{description}</p>
            </div>
        </>
    )
}