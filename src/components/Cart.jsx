import { useState } from "react";
import productsDB from "../data/products.json";
import CartInformation from "./CartInformation";
export default function Cart() {
  const [cartTotal, setCartTotal] = useState(productsDB);

  return (
    <div className="content-cart">
      <h2>Shopping Cart</h2>
      <div>
        {cartTotal.map((countProduct) => (
          <CartInformation
            name={countProduct.name}
            price={countProduct.price}
            total={countProduct.total}
            key={countProduct.id}
          />
        ))}
      </div>
      <p className="total">TOTAL{}</p>
      <button className="button-cart">Submit Your Order</button>
    </div>
  );
}
