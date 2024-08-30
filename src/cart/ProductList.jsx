import PropTypes from "prop-types";
import "./product.css";
const ProductList = ({
    productID,
    productName,
    productCatagory,
    price,
    productImg,
    isSale,
    addToCart,
    removeFromCart,
    isRemoved = false,
}) => {
    return (
        <div className="card">
            <img src={productImg} className="card-img-top pic" alt="product image" />
            <div className="card-body">
                <h5 className="card-title">{productName}</h5>
                <i className="fa fa-star star"></i>
                <p className="card-text">{productCatagory}</p>
                <p className="card-text">&#8377; {price}</p>
                {isRemoved ? (<button onClick={() => removeFromCart(productID)} className="btn btn-primary">Remove from Cart</button>)
                    :
                    (<button className="btn btn-primary"
                        onClick={() => { addToCart({ productID, productName, productCatagory, price }); }} >
                        Add to cart
                    </button>)
                }
                {isSale && <div className="sale">Sale</div>}
            </div>
        </div>
    );
};

ProductList.propTypes = {
    productID: PropTypes.number.isRequired,
    productName: PropTypes.string,
    productCatagory: PropTypes.string,
    productImg: PropTypes.string,
    price: PropTypes.number,
    isSale: PropTypes.bool,
    rating: PropTypes.number,
    addToCart: PropTypes.func,
    removeFromCart: PropTypes.func,
    isRemoved: PropTypes.bool
};

export default ProductList;
