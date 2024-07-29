import React from "react";
import { Link } from "react-router-dom";

function products({ products = [] }) {
  
  return (
    <>
      <section className=" text-gray-600 body-font  ">
        <div className="container px-9 py-29 mx-auto">
          <div className="text-center mb-20">
            <h1 className=" mt-20 sm:text-3xl text-2xl font-medium title-font text-gray-900  dark:text-white mb-4">
              Products
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500 ">
              Menu clotheth of men and childern{" "}
            </p>
            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
            </div>
          </div>

          <div className="flex flex-wrap -m-5">
            {products.map((product) => {
              console.log(product, "product");
              const { image, title, price, category , id    } = product;
              return (
                <div className="lg:w-1/4 mx-10 my-5 transition-height ease-out duration-500 cursor-pointer  mrounded-lg shadow-2xl md:w-1/2 p-4 w-full transform hover:translate-y-[-10%] transition-transform duration-500 ease-in-out   ">
                  {" "}
                  <a className="block relative h-48 rounded overflow-hidden">
                    <img
                      alt="ecommerce"
                      className="object-center  object-contain w-full h-full block"
                      src={image}
                    />
                  </a>
                  {/* pragraph and title  */}
                    <div className="mt-4">
                      <h2 className="text-gray-900 title-font text-lg font-medium dark:text-white">
                        {category}
                      </h2>
                      <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 ">
                        {title}
                      </h3>
                    </div>
 
                    <div className="flex justify-between align-baseline pt-5 ">
                      <p className="price-p mt-1">
                        <span className="mark">$</span>
                        {price}
                      </p>
                      <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"> <Link to={`/Products/${id}`}>Buy</Link></button>
                    </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default products;
