import './ItemDetail.css'
import { ItemCount } from "../ItemCount/ItemCount"

export const ItemDetail = ({ id, name, image, description, price, stock}) => {

    return(
            <article className="detail__card">
                <img className='detail__img' src={image} alt=""/>
                <h2>{name}</h2>
                <p>{description}</p>
                <span>${price}</span>
                <ItemCount stock={stock}/>
            </article>
    )
}