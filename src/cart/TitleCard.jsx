import "./product.css"
import "./topend.css"
import PropTypes from "prop-types"
const Titlecard = ({ count }) => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-2">
                        <h3>Best Buy</h3>
                    </div>
                    <div className="col-8">
                        <ul className="nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" id="navbarDropdown" data-bs-toggle="dropdown" role="button" href="#" aria-expanded="false">Shop</a>
                                <ul className="dropdown-menu" id="navbarDropdown">
                                    <li><a className="dropdown-item" href="#!">Action</a></li>
                                    <li><a className="dropdown-item" href="#!">Another action</a></li>
                                    <li><a className="dropdown-item" href="#!">Something else here</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="col-2">
                        <button type="button" className="btn btn-outline-dark cart"><i className="fa fa-shopping-cart" aria-hidden="true"></i> Cart (<span>{count}</span>)  </button>
                    </div>
                </div>
            </div>
            <div className="top">
                <h1>Shop in Style</h1>
                <p className="slogan">best place to buy</p>
            </div>
        </>
    )
};
Titlecard.propTypes = {
    count: PropTypes.number
};
export default Titlecard;