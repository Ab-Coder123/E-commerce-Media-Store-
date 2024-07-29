import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Products from "../../components/Products/products";

const CategoryProduct = () => {
  const { name } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(
        `https://fakestoreapi.com/products/category/${name}`
      );
      // هنا دا لينك ل ال هيديوديني ل المنتجات لكن علي حسب ال اسم
      const data = await response.json();
      console.log(data);
      setProduct(data);
    };

    fetchProduct();
  }, []);


     //  dark mode

     const [darkblack, setDarkMode] = useState("light");

     useEffect(() => {
       if (darkblack === "dark") {
         document.documentElement.classList.add("dark");
       } else {
         document.documentElement.classList.remove("dark");
       }
     }, [darkblack]);
   
     const toggleDarkMode = () => {
       setDarkMode(darkblack === "dark" ? "light" : "dark");
     };

  return (
    <>
    

    <button className=' fixed ml-5'>
              <label class="ui-switch">
                <input type="checkbox" />
                <div onClick={toggleDarkMode} class="slider">
                  <div class="circle"></div>
                </div>
              </label>
            </button>
      <div></div>

      {product.length > 0 ? (
        <Products products={product} />
      ) : (
        //دي بتاعه ايه دي ال هي بتاعه ال ال ايليمنت المنتجات ال تصميم نفسه ال انتا جايبه لكن مش هيجيب المنتجات كلها هو هيجيب حسب ال فانكشن ال فوق   products هتستغرب هنا هو ال
        <div className="loads">
          <svg
            className="cartproduct"
            role="img"
            aria-label="Shopping cart line animation"
            viewBox="0 0 128 128"
            width="128px"
            height="128px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="8"
            >
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
      )}
    </>
  );
};

export default CategoryProduct;
