import "./Products.scss";
import Product from './Product/Product'
const Products = ({innerPage, headingText,randomProduct}) => {
    return (
        <div className="products-container">
            {
                !innerPage && 
                 <div className="sec-heading"> {headingText}</div>
            }
            <div className="products">
                <Product randomProduct={randomProduct}/>
            </div>
        </div>
    )
};

export default Products;
