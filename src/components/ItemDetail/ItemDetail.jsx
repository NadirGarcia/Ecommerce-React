import './ItemDetail.css'
import { ItemCount } from "../ItemCount/ItemCount"
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

export const ItemDetail = ({ id, name, image, description, price, stock}) => {

    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        addItem({id, name, price, quantity});
    }

    

    return(
            <article className="detail__card">
                <img className='detail__img' src={image} alt=""/>
                <h2>{name}</h2>
                <p>{description}</p>
                <span>${price}</span>
                <ItemCount stock={stock} onAdd={handleOnAdd}/>
            </article>
    )
}