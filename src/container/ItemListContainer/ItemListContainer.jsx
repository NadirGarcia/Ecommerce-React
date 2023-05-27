import './ItemListContainer.css'
import { ItemList } from "../../components/ItemList/ItemList"
import { getFirestore, query, where, collection, getDocs } from 'firebase/firestore'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'


export const ItemListContainer = ({ greeting }) => {
    const [prodList, setProdList ] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)

        const db = getFirestore();
        const collectionRef = categoryId
        ? query(collection(db, 'products'), where('category', '==', categoryId))
        : collection(db, 'products')

        getDocs(collectionRef).then(prod => {
            setProdList(prod.docs.map(doc => ({
                id: doc.id, ...doc.data()})
            ))
        })
        .catch(error =>{
        console.log(error);
        }).finally(() => {
        setLoading(false)
        })
    }, [categoryId])

    if(loading){
        return (<h2>Cargando productos...</h2>)
    }
    
    return(
        <main>
            <h1 className='list__container--greeting'>{greeting}</h1>
            <section className='list__container'>
                <ItemList prodList={prodList} />
            </section>
        </main>
    )
}

