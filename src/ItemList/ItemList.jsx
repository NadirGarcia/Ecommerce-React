import './ItemList.css'
import products from "../asyncmock/products.json"

import { useEffect, useState } from "react"
import { Item } from '../Item/Item'
import { useParams } from 'react-router-dom'

export const ItemList = () => {
    const [prodList, setProdList ] = useState([])
    const { categoryId } = useParams()
    
    useEffect(() => {
        const getProducts = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(products)
            }, 2000)
        })
        
        const getProductsByCategory = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(products.filter(prod => prod.category === categoryId))
            }, 2000)
        })

        const asyncFunction = categoryId ? getProductsByCategory : getProducts

        asyncFunction.then(prod => {setProdList(prod)})
        
    }, [categoryId])
    
        return(
            <>
                {prodList.length !== 0 ? prodList.map(prod => <Item key={prod.id} {...prod}/>) : <h2>Cargando productos....</h2>}
            </>
        )
    }

