import "./Header.scss";
import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";
import "./Header.scss";
import Search from "./Search/Search";
import Cart from "../Cart/Cart";
import { useSelector } from "react-redux";

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [showCart, setShowCart] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const navigate = useNavigate();
    const cart = useSelector((state)=> state.cart.cart);

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 200) {
            setScrolled(true)
        } else {
            setScrolled(false)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    }, [])
    return (
        <>
            <header className={`main-header ${scrolled ? 'sticky-header' : null}`}>
                <div className="header-content">
                    <ul className="left">
                        <li onClick={()=> navigate('/')}>Home</li>
                        <li>About</li>
                        <li>Categories</li>
                    </ul>
                    <div className="center"><p>Ecommerce</p></div>
                    <div className="right">
                        <TbSearch onClick={() => setShowSearch(true)}/>
                        <AiOutlineHeart />
                        <span className="cart-icon" onClick={() => setShowCart(true)}>
                            <CgShoppingCart />
                            {
                                cart.length>0 &&
                                <span>{cart.length}</span>
                            }
                        </span>
                    </div>
                </div>
            </header>
            {
                showCart &&
                <Cart setShowCart={setShowCart} />
            }
            {
                showSearch &&
                <Search setShowSearch={setShowSearch} />
            }
        </>
    )
};

export default Header;
