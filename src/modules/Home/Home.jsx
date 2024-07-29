import React, { useEffect, useState } from 'react'
import Main from '../../components/Main/Main'
import State from '../../components/Statcard/State'
import Team from '../../components/TeameStore/Team'
import Gallery from '../../components/Gallery/Gallery'
import Massage from '../../components/Msg/Massage'
import Products from '../../components/Products/products'
import Category from '../../components/Categories/category'
function Home() {
  const [products , setproducts] = useState([]) ;
  useEffect(()=>{
    let fetchproducts = async () => {
      let respons = await fetch('https://fakestoreapi.com/products/?limit=5') ;
      let data = await respons.json()
      console.log(data)
      setproducts(data)
    }
    fetchproducts()
  },[]) 

// *************

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
            <button className=' fixed ml-5 mt-4'>
              <label class="ui-switch">
                <input type="checkbox" />
                <div onClick={toggleDarkMode} class="slider">
                  <div class="circle"></div>
                </div>
              </label>
            </button>

          <Main/> 
          <Gallery/>
          <Category/>
            {
              products.length > 0 ?
              // if
              <Products products={products} /> :
              // else
              <div className='loads'>
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
            }
          <State/>
          <Team/>
          <Massage/>

    </>
  )
}

export default Home