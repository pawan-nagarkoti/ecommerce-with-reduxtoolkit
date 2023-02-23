import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RelatedProducts from "./RelatedProducts/RelatedProducts";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
    FaPinterest,
    FaCartPlus,
} from "react-icons/fa";
import "./SingleProduct.scss";
import prod from '../../assets/products/earbuds-prod-1.webp';
import { useSelector } from "react-redux";
import data from '../../data'
import { useDispatch } from "react-redux";
import { cartItem, totalQuantity } from "../../Features/cartSlice";
import { useLoaderData, useLocation } from "react-router-dom";

const SingleProduct = () => {
    const product = useSelector((state)=> state.cart.product);
    const cartQuantity = useSelector((state)=> state.cart.cart);
    const {id} = useParams();
    const [paramId, setParamId] = useState(id);
    const dispatch = useDispatch();
    const location = useLocation();
    useEffect(()=>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    },[location])
    
    const handleAddToCart = (id,title,image,quantity,price)=>{
        dispatch(cartItem({id,title,image,quantity,price}));
    }
    return (
        <>
        {
            product.filter((item)=> paramId==item.id).map(({category,description,id,image,price,title,quantity}, index)=>
                <div className="single-product-main-content" key={index}>
                    <div className="layout">
                        <div className="single-product-page">
                            <div className="left">
                                <img src={ image } />
                            </div>
                            <div className="right">
                                <span className="name">{title}</span>
                                <span className="price">&#8377;{price}</span>
                                <span className="desc">{description}</span>
        
                                <div className="cart-buttons">
                                    {/* <div className="quantity-buttons">
                                        <span onClick={()=> decrement(id,title,image,quantity)}>-</span>
                                        <span>{value}</span>
                                        <span onClick={()=> increment(id,title,image,quantity)}>+</span>
                                    </div> */}
                                    <button className="add-to-cart-button" onClick={()=>handleAddToCart(id,title,image,quantity,price)}>
                                        <FaCartPlus size={20}/>
                                        ADD TO CART
                                    </button>
                                </div>
        
                                <span className="divider" />
                                <div className="info-item">
                                    <span className="text-bold">
                                        Category:
                                        <span>Headphones</span>
                                    </span>
                                    <span className="text-bold">
                                        Share:
                                        <span className="social-icons">
                                            <FaFacebookF size={16} />
                                            <FaTwitter size={16} />
                                            <FaInstagram size={16} />
                                            <FaLinkedinIn size={16} />
                                            <FaPinterest size={16} />
                                        </span>
                                    </span>
                                </div>
                            </div>
                        </div>
                        {/* <RelatedProducts /> */}
                    </div>
                </div>
            )
        }
        </>
    );
};

export default SingleProduct;
