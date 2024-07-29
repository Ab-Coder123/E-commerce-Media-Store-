import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

// modules
import Home from "./modules/Home/Home";
import Product from "./modules/Product/Product";
import Productpage from "./modules/Product-page/product";
import CategoryProduct from "./modules/Categoryproduct/categoryproduct";
import Cart from "./modules/Cart/Cart";
import Login from "./modules/Login/Login";
import SignUp from "./modules/SignUp/SignUp";

// main sections
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { AuthProvider } from "./Firebase/Context/Contextindex";

function App() {
  const [load, setload] = useState(false);

  useEffect(() => {
    setload(true);
    setTimeout(() => {
      setload(false);
    }, 1000);
  }, [Product]);

  return (
    <BrowserRouter>
      {load ? (
        <div className="load">
          <div className="preloader">
            <svg
              className="cart"
              role="img"
              aria-label="Shopping cart line animation"
              viewBox="0 0 128 128"
              width="128px"
              height="128px"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="8">
                <g className="cart__track" stroke="hsla(0,10%,10%,0.1)">
                  <polyline points="4,4 21,4 26,22 124,22 112,64 35,64 39,80 106,80" />
                  <circle cx="43" cy="111" r="13" />
                  <circle cx="102" cy="111" r="13" />
                </g>
                <g className="cart__lines" stroke="currentColor">
                  <polyline
                    className="cart__top"
                    points="4,4 21,4 26,22 124,22 112,64 35,64 39,80 106,80"
                    stroke-dasharray="338 338"
                    stroke-dashoffset="-338"
                  />
                  <g className="cart__wheel1" transform="rotate(-90,43,111)">
                    <circle
                      className="cart__wheel-stroke"
                      cx="43"
                      cy="111"
                      r="13"
                      stroke-dasharray="81.68 81.68"
                      stroke-dashoffset="81.68"
                    />
                  </g>
                  <g className="cart__wheel2" transform="rotate(90,102,111)">
                    <circle
                      className="cart__wheel-stroke"
                      cx="102"
                      cy="111"
                      r="13"
                      stroke-dasharray="81.68 81.68"
                      stroke-dashoffset="81.68"
                    />
                  </g>
                </g>
              </g>
            </svg>
          </div>
        </div>
      ) : (
        <>
          <Header />
          <AuthProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Products/:id" element={<Product />} />
              <Route path="/modules/Categoryproduct/:name" element={<CategoryProduct />} />
              <Route path="/modules/Cart/Cart" element={<Cart />} />
              <Route path="/modules/Product-page/product" element={<Productpage />} />
              <Route path="/modules/Login/Login" element={<Login />} />
              <Route path="/modules/SignUp/SignUp" element={<SignUp />} />
            </Routes>
          </AuthProvider>
          <Footer />
        </>
      )}
    </BrowserRouter>
  );
}

export default App;
