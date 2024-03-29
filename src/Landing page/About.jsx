import React from "react";
import addproduct from "../assets/images/addproducts.png";
import addcustomer from "../assets/images/addcustomer.png";
import createinvoice from "../assets/images/createinvoice.png";
import invoicedetails from "../assets/images/invoicedetails.png";
import { FaPlus, FaUsers, FaFileAlt, FaInfoCircle } from "react-icons/fa";

export const About = () => {
  return (
    <main className="mt-5 about" id="about">
      <div className="text-white">
        <div className="font-extrabold text-center text-3xl mb-10">
        <h1> Our Special Features Below</h1>
        </div>
        <div className="flex flex-col sm:flex-row justify-center gap-5 flex-wrap">
          <div className="flex flex-col items-center sm:w-1/3 w-fit border border-b-4 p-5 bg-slate-800 rounded-lg mx-5 hover:bg-slate-600 transition duration-300 shadow-lg">
            {/* <img src={addproduct} alt="" className="w-full h-auto" /> */}
            <div className="text-center mt-4">
              <h1 className="text-xl font-semibold text-yellow-300">Add Products</h1>
              <p className="text-gray-300">
              In this application, you can efficiently add, update, and remove various products. Seamlessly manage product details, such as descriptions, categories, pricing, and stock levels, to keep your inventory meticulously organized and up-to-date.
              </p>
            </div>
            <FaPlus className="text-4xl mt-4 text-yellow-300" />
          </div>
          <div className="flex flex-col items-center sm:w-1/3 w-fit border border-b-4 p-5 bg-slate-800 rounded-lg mx-5 hover:bg-slate-600 transition duration-300 shadow-lg">
            {/* <img src={addcustomer} alt="" className="w-full h-auto" /> */}
            <div className="text-center mt-4">
              <h1 className="text-xl font-semibold text-yellow-300">Customer</h1>
              <p className="text-gray-300">
              Discover the capability to add an extensive list of customers effortlessly. Effectively oversee customer information, including contact details, preferences, and purchase history, ensuring streamlined customer relationship management and personalized interactions.
              </p>
            </div>
            <FaUsers className="text-4xl mt-4 text-yellow-300" />
          </div>
          <div className="flex flex-col items-center sm:w-1/3 w-fit border border-b-4 p-5 bg-slate-800 rounded-lg mx-5 hover:bg-slate-600 transition duration-300 shadow-lg">
            {/* <img src={createinvoice} alt="" className="w-full h-auto" /> */}
            <div className="text-center mt-4">
              <h1 className="text-xl font-semibold text-yellow-300">Create Invoices</h1>
              <p className="text-gray-300">
                Harness the power to create unlimited professional invoices. Effectively manage due dates, track payments, and streamline your billing process effortlessly.
              </p>
            </div>
            <FaFileAlt className="text-4xl mt-4 text-yellow-300" />
          </div>
          <div className="flex flex-col items-center sm:w-1/3 w-fit border border-b-4 p-5 bg-slate-800 rounded-lg mx-5 hover:bg-slate-600 transition duration-300 shadow-lg">
            {/* <img src={invoicedetails} alt="" className="w-full h-auto" /> */}
            <div className="text-center mt-4">
              <h1 className="text-xl font-semibold text-yellow-300"> Invoice Details</h1>
              <p className="text-gray-300">
                Delve into detailed insights of countless invoices. View transaction history, payment status, and more to enhance your business transparency.
              </p>
            </div>
            <FaInfoCircle className="text-4xl mt-4 text-yellow-300" />
          </div>
        </div>
      </div>
    </main>
  );
};
