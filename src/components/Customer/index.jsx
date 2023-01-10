import React from 'react';
import "./CustomerSection.css";


function CustomerSection() {
  return (
    <div className="Customer-Wrapper mt-[100px]">
      <div className="mt-[130px] p-2 space-y-10 md:w-[80%] md:m-auto md:mt-[150px] ">
        <div className="text-center space-y-2">
          <h4 className="text-2xl text-[#093624] font-bold">Our Customers</h4>
          <div className="p-[1px] bg-gray-400 w-[60px] m-auto"></div>
        </div>
        <div className="flex flex-col space-y-10 justify-center items-center md:grid md:grid-cols-3 md:gap-5 md:space-y-0">
          <Customer />
          <Customer />
          <Customer />
        </div>
      </div>
    </div>
  );
}

export default CustomerSection




const Customer = ()=>{
    return (
      <div className="space-y-2 text-gray-400 md:space-y-4">
        <p> “Curabitur aliquet quam id dui posuere blandit.</p>
        <p>Nulla quis lorem ut libero malesuada feugiat.</p>
        <p>Vestibulum ante ipsum primis in faucibus orci</p>
        <p>luctus et ultrices posuere cubilia Curae Donec</p>
        <p>
          velit neque auctor sit amet aliquam vel, ullamcorper sit amet ligula.
        </p>{" "}
        <p> Curabitur aliquet quam id dui posuere.”</p>
      </div>
    );
}