import './Item.css'
import { Link } from 'react-router-dom'

export const Item = ({ id, name, price, image }) => {
    return(
        <article className="card">
            <div className='card__img'>
                <img src={image} alt="" className='card__img--size'/>
            </div>
            <h2>{name}</h2>
            <p className='card__price'>${price}</p>
            <Link to={`/detail/${id}`}><button className='card__btn'>Ver Detalle</button></Link>
        </article>
    )
} 