import { MdClose } from "react-icons/md";
import "./Search.scss";
import prod from '../../../assets/products/earbuds-prod-1.webp'

const Search = ({ setShowSearch }) => {
    return (
        <div className="search-modal">
            <div className="form-field">
                <input type="text" name="" id="" autoFocus placeholder="Search for products" />
                <MdClose onClick={() => setShowSearch(false)} />
            </div>
            <div className="search-result-content">
                <div className="search-results">
                    <div className="search-result-item">
                        <div className="image-container">
                            <img src={prod} alt="" />
                        </div>
                        <div className="prod-details">
                            <div className="name">product name</div>
                            <div className="desc">product name</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Search;
