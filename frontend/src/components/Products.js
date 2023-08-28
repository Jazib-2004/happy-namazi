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
  <h2 className="text-center font-bold text-3xl">No Products to show.</h2>;
  return (
    <div>
      <section className="py-16">
        <div className="container mx-auto">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm md:max-w-none mx-auto md:mx-0">
              {filteredProducts.map((product) => {
                return <Product key={product.id} product={product} />;
              })}
            </div>
          ) : (
            <h2 className="pt-24 text-center font-bold text-3xl">
              No Products to show.
            </h2>
          )}
        </div>
      </section>
    </div>
  );
}

export default Products;
