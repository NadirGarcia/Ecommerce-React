import './ItemDetailContainer.css'
import { useParams } from "react-router-dom"
import { ItemDetail } from "../../components/ItemDetail/ItemDetail"
import { useState, useEffect } from "react"
import { getFirestore, doc, getDoc } from 'firebase/firestore'



export const ItemDetailContainer = () => {
    const [detailProduct, setDetailProduct] = useState([])
    const { prodId } = useParams() 

    useEffect(() => {
        const db = getFirestore()

        const productRef = doc(db, 'products', prodId) 

        getDoc(productRef).then(prod => {
            setDetailProduct({id: prod.id, ...prod.data()})
        })
        /* const getDetailProducts = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(products.find(prod => prod.id === Number(prodId)))
            }, 2000)
        })
        getDetailProducts.then(result => setDetailProduct(result)) */
    }, [prodId]);

        return(
            <section className='detail__container'>
                {detailProduct.length !== 0 ? <ItemDetail {...detailProduct}/> : <h2>Cargando producto...</h2>}
            </section>
        )
}