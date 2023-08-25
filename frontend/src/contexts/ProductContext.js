import React, { createContext, useState, useEffect, useContext } from "react";

export const ProductContext = createContext();
function ProductProvider(props) {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
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
