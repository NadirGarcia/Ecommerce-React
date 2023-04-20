import CartWidget from "../../CartWidget/CartWidget";
import'./Navbar.css';

const Navbar = () => {
    return(
        <header className='container'>
            <nav>
                <img src='./images/controller.svg' alt='logo'/>
                <span>NG gaming</span>
                <CartWidget counter = {5} />
                <ul className="nav__list">
                    <li><a href="#">Consolas</a></li>
                    <li><a href="#">Notebooks</a></li>
                    <li><a href="#">Juegos</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar