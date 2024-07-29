import React from "react";
import { Link, NavLink } from "react-router-dom";

const navigations = [
  { name: "Home", path: "/" },
  { name: "About", path: "/About" },
  { name: "Products", path: "/modules/Product-page/product" },
  { name: "Message", path: "/Message" },
  { name: "Teamstore", path: "/Team" },
];

const Header = () => {
  return (
    <header className="text-gray-600 shadow-lg body-font w-full">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row justify-around items-center">
        <nav className="flex items-center text-base">
          {navigations.map((navigation, index) => (
            <Link
              key={index}
              to={navigation.path}
              className="cursor-pointer mr-4 transition-height ease-out duration-500 hover:text-gray-900 hover:dark:text-indigo-600 hover:shadow-lg"
            >
              {navigation.name}
            </Link>
          ))}
        </nav>
        <Link to="/" className="cursor-pointer flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-8 h-8 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl text-gray-900 dark:text-white">Media-Store</span>
        </Link>
        <div className="flex justify-around">
          <Link to="/modules/Cart/Cart" className="inline-flex ml-5 ml-0">
            <button className="inline-flex items-center transition-height ease-out duration-500 bg-gray-100 border-0 py-1 px-1 focus:outline-none hover:bg-indigo-600 hover:text-white rounded text-base mt-4 md:mt-0">
              Cart
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </Link>
          <Link to="/modules/Login/Login" className="inline-flex ml-5 ml-0">
            <button className="inline-flex items-center transition-height ease-out duration-500 bg-gray-100 border-0 py-1 px-1 focus:outline-none hover:bg-indigo-600 hover:text-white rounded text-base mt-4 md:mt-0">
            Login
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </Link>
          <Link to="/modules/SignUp/SignUp" className="inline-flex ml-5 ml-0">
            <button className="inline-flex items-center transition-height ease-out duration-500 bg-gray-100 border-0 py-1 px-1 focus:outline-none hover:bg-indigo-600 hover:text-white rounded text-base mt-4 md:mt-0">
            SignUp
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
