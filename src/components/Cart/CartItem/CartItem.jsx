import { MdClose } from "react-icons/md";
import "./CartItem.scss";
import prod from '../../../assets/products/earbuds-prod-1.webp';
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { removeCartItem, increment, decrement, getCartTotal } from "../../../Features/cartSlice";

const CartItem = () => {
    let cart = useSelector((state) => state.cart.cart);

    const dispatch = useDispatch();
    const removeItem = (id) => {
        dispatch(removeCartItem(id))
    }
    useEffect(() => {
        dispatch(getCartTotal())
    }, [cart])

    return (
        <div className="cart-products">
            {
                cart.map(({ image, title, quantity, id }, index) =>
                    <div className="cart-product" key={index}>
                        <div className="image-container">
                            <img src={image} alt="" />
                        </div>
                        <div className="prod-details">
                            <span className="name">{title}</span>
                            <MdClose className="close-btn" onClick={() => removeItem(id)} />
                            <div className="quantity-buttons">
                                <span onClick={() => dispatch(decrement(id))}>-</span>
                                <span>{quantity}</span>
                                <span onClick={() => dispatch(increment(id))}>+</span>
                            </div>
                            {/* <div className="text">
                                <span>3</span>
                                <span>x</span>
                                <span>&#8377;4567</span>
                            </div> */}
                        </div>
                    </div>
                )
            }
        </div>
    )
};

export default CartItem;
