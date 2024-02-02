import React from "react";

const Cart = () => {
  const Cart = JSON.parse(localStorage.getItem("Cart")) || [];
  return (
    <>
      
          <table className="w-full  table-auto text-left">
            <thead className=" text-center">
              <tr>
                <th classNameName="border-y border-blue-gray-100 bg-blue-gray-50/50 p-9 ">
                  <p className="block antialiased font-sans text-sm text-blue-gray-900 font-normal leading-none opacity-70">
                    Name
                  </p>
                </th>
                <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-9 ">
                  <p className="block antialiased font-sans text-sm text-blue-gray-900 font-normal leading-none opacity-70">
                    Price
                  </p>
                </th>
                <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-9 ">
                  <p className="block antialiased font-sans text-sm text-blue-gray-900 font-normal leading-none opacity-70">
                    Date
                  </p>
                </th>
                <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-9 ">
                  <p className="block antialiased font-sans text-sm text-blue-gray-900 font-normal leading-none opacity-70">
                    Status
                  </p>
                </th>
                <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-9 ">
                  <p className="block antialiased font-sans text-sm text-blue-gray-900 font-normal leading-none opacity-70">
                    Account
                  </p>
                </th>
                <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-9 ">
                  <p className="block antialiased font-sans text-sm text-blue-gray-900 font-normal leading-none opacity-70"></p>
                </th>
              </tr>
            </thead>
            {Cart?.map(cart => {
                 return (
            <tbody>
              <tr className="">
                <td className="p-9">
                  <div className="flex items-center gap-3">
                    <img
                      src={cart?.image}
                      alt={cart}
                      className="inline-block relative object-center  w-12 h-12  border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1"
                    />
                    <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-bold">
                      {cart?.category}
                    </p>
                  </div>
                </td>
                <td className="p-9">
                  <p className="block font-bold antialiased font-sans text-sm leading-normal text-blue-gray-900 ">
                    ${cart?.price}
                  </p>
                </td>
                <td className="p-5">
                  <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal">
                    Wed 3:30am
                  </p>
                </td>
                <td className="p-9">
                  <div className="w-max">
                    <div className="relative grid items-center font-sans font-bold uppercase whitespace-nowrap select-none bg-red-500/20 text-red-900 py-1 px-2 text-xs rounded-md">
                      <span className="">Progress.....</span>
                    </div>
                  </div>
                </td>
                <td className="p-9">
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-12 rounded-md border border-blue-gray-50 p-1">
                      <img
                        src="https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/logos/visa.png"
                        alt="visa"
                        className="inline-block relative object-center !rounded-none rounded-md h-full w-full object-contain p-1"
                      />
                    </div>
                    <div className="flex flex-col">
                      <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal capitalize">
                        visa
                      </p>
                      <p className="block antialiased font-sans text-sm leading-normal text-blue-gray-900 font-normal opacity-70">
                        06/2026
                      </p>
                    </div>
                  </div>
                </td>
                <td className="p-9">
                  <button
                    className="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-gray-900 hover:bg-gray-900/10 active:bg-gray-900/20"
                    type="button"
                  >
                    <span className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        className="h-4 w-4"
                      >
                        <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z"></path>
                      </svg>
                    </span>
                  </button>
                </td>
                <td className="p-9 ">
                  <button
                    className=" relative  align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-gray-900 hover:bg-gray-900/10 active:bg-gray-900/20"
                    type="button"
                  >
                    <span className="  bg-red-700 border rounded-lg p-2 absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
                      <h2 className=" text-white">Delete</h2>
                    </span>
                  </button>
                </td>
              </tr>
            </tbody>
                   );
                })}
          </table>
      <div className="flex min-h-screen items-center justify-center">
        <div className="p-6 overflow-scroll px-0"></div>
      </div>
    </>
  );
};

export default Cart;
