import React, { createContext, useState, useEffect, useContext } from "react";

const ProductContext = createContext();
function ProductProvider(props) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
      } catch {
        setProducts([]);
      }
    };
    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products }}>
      {props.children}
    </ProductContext.Provider>
  );
}

export default ProductProvider;
export const useProductContext = () => useContext(ProductContext);
