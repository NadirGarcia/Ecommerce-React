import './ItemList.css'
import { useEffect, useState } from "react"
import { Item } from '../Item/Item'
import { useParams } from 'react-router-dom'
import { collection, getFirestore, getDocs, query, where } from 'firebase/firestore'

export const ItemList = () => {
    const [prodList, setProdList ] = useState([])
    const { categoryId } = useParams()
    
    useEffect(() => {
        const db = getFirestore();

        const collectionRef = categoryId
        ? query(collection(db, 'products'), where('category', '==', categoryId))
        : collection(db, 'products')

        getDocs(collectionRef).then(prod => {
            setProdList(prod.docs.map(doc => ({
                id: doc.id, ...doc.data()})
            ))
        })
    }, [categoryId])
    
        return(
            <>
                {prodList.length !== 0 ? prodList.map(prod => <Item key={prod.id} {...prod}/>) : <h2>Cargando productos....</h2>}
            </>
        )
    }

