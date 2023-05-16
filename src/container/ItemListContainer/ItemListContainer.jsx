import './ItemListContainer.css'
import { ItemList } from "../../components/ItemList/ItemList"

const ItemListContainer = ({ greeting }) => {
    return(
        <main>
            <h1 className='list__container--greeting'>{greeting}</h1>
            <section className='list__container'>
                <ItemList />
            </section>
        </main>
    )
}

export default ItemListContainer