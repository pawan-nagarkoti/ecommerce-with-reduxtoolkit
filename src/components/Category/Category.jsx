import "./Category.scss";
import Products from "../Products/Products";
import { useEffect } from "react";
import { useLoaderData, useLocation } from "react-router-dom";

const Category = () => {
    const location = useLocation();
    useEffect(()=>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    },[location])
    return (
        <div className="category-main-content">
            <div className="layout">
                <div className="category-title">Category Title</div>
                <Products innerPage={true}/>
            </div>
        </div>
    )
};

export default Category;
