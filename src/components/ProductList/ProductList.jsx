import React from "react";
import Product from "../Product/Product";
import Loader from "../Loader/Loader";

const ProductList = ({ products }) => {


  if (products === undefined) {
    return <div>
      <Loader />
    </div>
  }

  return (
    <div className="product-lists grid grid-cols-4 gap-10  mt-10">
      {products.map(product => {
        let discountedPrice =
          product.price - product.price * (product.discountPercentage / 100);

        return (
          <Product
            key={product.id}
            product={{ ...product, discountedPrice }}
          />
        );
      })}
    </div>
  );
};

export default ProductList;