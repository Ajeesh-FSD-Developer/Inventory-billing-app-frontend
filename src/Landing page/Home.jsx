import React from 'react';
import dashboardreal from "../assets/images/dashboardreal.png";
import { FaHandPointRight } from "react-icons/fa";

export default function Home() {
  return (
    <header className=' text-white' id='home'>
      <div className="flex flex-col sm:flex-row justify-between p-5">
        <div className="flex flex-col w-full md:w-1/2 mt-5 flex-1">
          <h1 className="text-6xl font-extrabold mb-4 uppercase text-[#fff]">
            Welcome to <span className="text-[#32f065]">Inventory Billing </span>
          </h1>
          <div className="flex items-center mb-4">
            <FaHandPointRight className='text-9xl mr-2 text-[#FFFF00]' />
            <p className="text-lg text-[#fff]">
            Simplify and optimize your billing process with our intuitive application. Take control of your inventory, effortlessly generate professional invoices, and monitor your business transactions seamlessly. Elevate your business efficiency and maintain impeccable organization with our all-inclusive billing solution.
            </p>
          </div>
          <div className="flex items-center mb-4">
            <FaHandPointRight className='text-9xl mr-2 text-[#FFFF00]' />
            <p className="text-lg text-[#fff]">
            Empower your business with our user-friendly billing application. Seamlessly handle inventory management, effortlessly create invoices, and track every transaction with ease. Maximize your productivity and stay organized with our comprehensive billing solution, designed to streamline your operations and drive success.
            </p>
          </div>
          <div className="flex items-center">
            <FaHandPointRight className='text-9xl mr-2 text-[#FFFF00]' />
            <p className="text-lg text-[#fff]">
            Take charge of your business operations with our robust billing application. From inventory management to invoice generation and transaction tracking, our solution offers unparalleled efficiency and organization. Sign up now to harness the power of seamless billing management and unlock your business's full potential.
            </p>
          </div>
        </div>
        <div className="flex-1">
          
        </div>
      </div>
    </header>
  );
}
