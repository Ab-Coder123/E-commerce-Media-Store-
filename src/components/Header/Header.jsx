import React from "react";
import { Link, Navigate } from "react-router-dom";

const navigations = [

{
  name: "Home" ,
  path: "/" 
} ,

{
  name : 'About' ,
  path : '/About'

} ,

{
  name: 'products' ,
  path: '/modules/Product-page/product'
} ,


{

  name : 'MAssage' ,
  path : '/Massage'

} , 



{
  name : 'Teamstore' , 
  path : '/Team'

} ,


]



const Header = () => {
  return (
    <>
      <header className="text-gray-600 shadow-lg body-font w-full">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
            {
              navigations.map((navigation) =>  {
                  return(
                    <Link to={navigation.path} className="cursor-pointer mr-5 transition-height ease-out duration-500 hover:text-gray-900 hover:shadow-lg">
                    {navigation.name}
                  </Link>
              )
              })
            }
         
          </nav>
          <Link to='/'className="cursor-pointer flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">Media-Store</span>
          </Link>
          <Link to='/modules/Cart/Cart' className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
            <button className="inline-flex items-center transition-height ease-out duration-500 bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-indigo-600 hover:text-white  rounded text-base mt-4 md:mt-0">
              Go to Cart
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;
