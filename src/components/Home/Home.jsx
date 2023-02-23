import "./Home.scss";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Products from "../Products/Products";
import { useEffect } from "react";
import { useLoaderData, useLocation } from "react-router-dom";

const Home = () => {
    const location = useLocation();
    useEffect(()=>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    },[location])
    return (
        <div>
            <Banner />
            <div className="main-content">
                <div className="layout">
                    <Category />
                    <Products headingText="Popular Products"/>
                </div>
            </div>
        </div>
    )
};

export default Home;
