import data from "./products.json"
import ProductList from "./ProductList"
import "./product.css"
import { useState } from "react"
import Titlecard from "./TitleCard"

const Products = () => {

    const [count, setCount] = useState(0);
    const [addedItems, setAddItems] = useState([]);

    const addToCart = (addData) => {
        const temp = [...addedItems, addData];
        setAddItems(temp);
        setCount(count + 1);
        console.log("added: ", count);
        console.log(temp)
    };
    const removeItems = (removeId) => {
        const temp = addedItems.filter((a) => a.productID !== removeId)
        setAddItems(temp);
        setCount(count - 1)
        console.log("Removed: ", count)
        console.log(removeId)
    };
    return (

        <div className="container" >
            <Titlecard count={count} />
            {data.map((prdt) => (
                <ProductList
                    key={prdt.productID}
                    productID={prdt.productID}
                    productName={prdt.productName}
                    productCatagory={prdt.productCatagory}
                    price={prdt.price}
                    productImg={prdt.productImg}
                    isSale={prdt.sale}
                    rating={prdt.rating}
                    addToCart={addToCart}
                    removeFromCart={removeItems}
                    isRemoved={Boolean(addedItems.find((f) => f.productID === prdt.productID))}

                />
            ))}
        </div>
    )
}
export default Products;