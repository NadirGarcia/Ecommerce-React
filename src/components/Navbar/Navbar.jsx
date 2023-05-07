import'./Navbar.css';
import { NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import  products from '../../asyncmock/products.json'
import { useState, useEffect } from 'react';

const Navbar = () => {
    const [linkItem, setLinkItem] = useState([])

    useEffect(() => {
        const getLinkItem = new Promise ((resolve, reject) => 
            resolve(products)
        )
        getLinkItem.then(result => {
            const getCategories = products.map(item => item.category).sort()
            const categories = new Set(getCategories)
            setLinkItem([...categories])})
    },[])

    return(
        <header className='container'>
            <div className='container__brand'>
                <NavLink to={'/'}><img src='./images/controller.svg' alt='logo'/></NavLink>
                <span>NG gaming</span>
            </div>
            <nav className='nav'>
                <ul className="nav__list">
                    {linkItem.map(item => <NavLink className='nav__list--link' key={item} to={`/category/${item}`}><li>{item.toUpperCase()}</li></NavLink>)}
                </ul>
            </nav>
            <CartWidget counter = {5} />
        </header>
    )
}

export default Navbar