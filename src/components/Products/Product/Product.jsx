import "./Product.scss";
import prod from '../../../assets/products/earbuds-prod-1.webp';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import {relatedProduct} from '../../../Features/cartSlice';

const Product = ({randomProduct}) => {
    // console.log('randomproduct', randomProduct)
    const product = useSelector((state) => state.cart.product);
    // const {id} = useParams();
    // const dispatch = useDispatch();

    // let stored = [];
    // for(let i=0; i<product.length; i++){
    //     const test = Math.floor(Math.random() * product.length);
    //     if(stored.length>3){
    //         break;
    //     }
    //     stored.push(product[test])
    // }
    // useEffect(()=>{
    //     dispatch(relatedProduct(stored))
    // },[id])
    const navigate = useNavigate();
    return (
        <>
            {
                product.map(({ description, id, image, price, quantity, title }, index) =>
                    <div className="product-card" key={index} onClick={()=>navigate(`/product/${id}`)}>
                        <div className="thumbnail">
                            <img src={image} alt='Product_img' />
                        </div>
                        <div className="prod-details">
                            <span className="name">{title}</span>
                            <span className="price">&#8377;{price}</span>
                        </div>
                    </div>
                )
            }
        </>
    );
};

export default Product;
