import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ProductProvider from "./contexts/ProductContext";
import CartProvider from "./contexts/CartContext";
import CartItemProvider from "./contexts/CartItemContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CartProvider>
    <CartItemProvider>
      <ProductProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </ProductProvider>
    </CartItemProvider>
  </CartProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
