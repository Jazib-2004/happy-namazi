import React from "react";
import { useProductContext } from "../contexts/ProductContext";
import Product from "./Product";
function Products() {
  const { products } = useProductContext();
  const filteredProducts = products.filter((item) => {
    return (
      item.category === "men's clothing" || item.category === "women's clothing"
    );
  });
  console.log(filteredProducts);
  return (
    <div>
      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm md:max-w-none mx-auto md:mx-0">
            {filteredProducts.map((product) => {
              return (<Product key = {product.id} product = {product}/>)
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Products;
