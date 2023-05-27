import './ItemList.css'
import { Item } from '../Item/Item'

export const ItemList = ({ prodList }) => {
        return(
            <>
                {prodList.map(prod => <Item key={prod.id} {...prod}/>)}
            </>
        )
    }

