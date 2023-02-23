import "./Cart.scss";
import { MdClose } from "react-icons/md";
import { BsCartX } from "react-icons/bs";
import CartItem from './CartItem/CartItem'
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Cart = ({ setShowCart }) => {

    let totalPrices = useSelector((state) => state.cart.totalPrice);
    let totalQuantity = useSelector((state) => state.cart.totalQuantity);
    let cart = useSelector((state) => state.cart.cart);
    const navigate = useNavigate();
    const handleReturnHomePage = ()=>{
        navigate('/');
        setShowCart(false);
    }

    return (
        <div className="cart-panel">
            <div className="opac-layer"></div>
            <div className="cart-content">
                <div className="cart-header">
                    <div className="heading">Shopping Cart</div>
                    <span className="close-btn"
                        onClick={() => setShowCart(false)}>
                        <MdClose />
                        <span className="text">close</span>
                    </span>
                </div>
                {
                    cart.length === 0 &&
                    <div className="empty-cart">
                        <BsCartX />
                        <span>No products in the cart.</span>
                        <button className="return-cta" onClick={()=> handleReturnHomePage()}>RETURN TO SHOP</button>
                    </div>

                }
                {
                    cart.length>0 &&
                    <>
                        <CartItem/>
                        <div className="cart-footer">
                            <div className="subtotal">
                                <div className="text">Subtotal:</div>
                                <div className="text total">&#8377;{totalPrices}</div>
                            </div>
                            <div className="button">
                                <div className="checkout-cta">Checkout</div>
                            </div>
                        </div>
                    </>
                }
            </div>
        </div>
    )
};

export default Cart;
