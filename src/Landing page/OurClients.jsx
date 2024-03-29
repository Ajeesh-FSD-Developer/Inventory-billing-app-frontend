import React from 'react';
import tcs from "../assets/images/tcs.jpeg";
import jaguar from "../assets/images/jaguar.jpeg";
import westside from "../assets/images/westside.jpeg";
import tata from "../assets/images/tata.png";
import zudio from "../assets/images/zudio.png";
import trent from "../assets/images/trent.png";
import bens from "../assets/images/bens.jpeg";
import audi from "../assets/images/audi.png";




export const OurClients = () => {
  const clients = [
    { name: 'Jaguar', image: jaguar },
    { name: 'Zudio', image: zudio },
    { name: 'Westside', image: westside },
    { name: 'Tcs', image: tcs },
    { name: 'Tata', image: tata },
    { name:  'Trent', image: trent},
    { name:  'Bens', image: bens},
    { name:  'Audi', image: audi},
    
  ];

  return (
    <div id='our-clients'>
      <h1 className='text-center  text-4xl font-extrabold p-3 rounded-lg text-white m-5'>Our Clients $ Products</h1>
      <div className="bg-[#9ac0c7] flex p-5 justify-between gap-x-3 flex-wrap rounded-lg">
        {clients.map((client, index) => (
          <div key={index} className="card mt-5 mx-5">
            <img src={client.image} alt={client.name} className='h-64 w-64  object-cover rounded-lg shadow-lg hover:shadow-xl transition duration-300'/>
            <p className='text-center text-lg mt-2 font-semibold'>{client.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
