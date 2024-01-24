//get the product data
import products from "../Data/products.json";
import { Link } from "react-router-dom";
function ProductList() {
  console.log(products);
  return (
    <>
      <h2>ProductList</h2>
      <ul>
        {products.map((product) => {
          return (
            <li key={product.id}>
              <p>
                {product.make} {product.model}
              </p>
              <Link to={"/product/" + product.id}>Show Details</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
export default ProductList;
