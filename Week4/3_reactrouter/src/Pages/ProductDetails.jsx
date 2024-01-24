import { useParams, useNavigate } from "react-router-dom";
import products from "../Data/products.json";
import { useEffect } from "react";
function ProductDetails() {
  //useParams() returns an object with the parameters passed to the route
  const params = useParams();
  console.log(params);
  //find the product with the matching id
  const product = products.find((product) => product.id == params.id);
  console.log(product);
  //I can make sure that product exists
  //useNavigate returns a navigate function
  //This is typically used inside of an effect
  const navigate = useNavigate();
  //effect that fires when product is given a value
  useEffect(() => {
    if (!product) {
      navigate("/notfound");
    }
  }, [product]);

  return (
    <>
      <h2>Product Details</h2>
      {product && (
        <div className="card">
          <div className="card-header">
            <h3>
              {product.make} {product.model}
            </h3>
          </div>
          <div className="card-body">
            <p>Price: {product.price}</p>
            <p>{product.description}</p>
          </div>
        </div>
      )}
    </>
  );
}

export default ProductDetails;
