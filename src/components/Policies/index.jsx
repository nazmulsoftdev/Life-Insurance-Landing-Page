import React from 'react';
import {Card} from 'flowbite-react'
import ploices1 from "../../assets/images/ploices1.png";
import ploices2 from "../../assets/images/ploices2.png";
import ploices3 from "../../assets/images/ploices3.png";

function PolicieSection() {
  return (
    <div className="mt-[50px] p-2 md:w-[80%] md:m-auto md:mt-[100px] ">
      <div className="space-y-1">
        <h3 className="text-2xl font-bold text-[#093624]">
          Individual & Umbrella Policies
        </h3>
        <div className="p-[1px] bg-gray-400 w-[60px]"></div>
      </div>
      <div className="mt-[20px] md:mt-[50px]">
        <PolicieCard />
      </div>
      <div className="text-center mt-10">
        <button className="p-3 bg-[#F8C140] font-medium rounded-md cursor-pointer">Browse All Policies</button>
      </div>
    </div>
  );
}

export default PolicieSection;



const PolicieCard = ()=>{

    return (
      <div className='flex flex-col justify-center flex-wrap items-center space-y-10 md:flex md:flex-row md:justify-between md:items-center md:space-y-0'>
        <div className="max-w-xs">
          <Card imgSrc={ploices1}>
            <h5 className="text-2xl font-bold tracking-tight text-[#093624] dark:text-white">
              Life Insurance
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Donec rutrum congue leo eget malesuada. Curabitur non nulla sit
              amet nisl tempus convallis
            </p>
          </Card>
        </div>
        <div className="max-w-xs">
          <Card imgSrc={ploices2}>
            <h5 className="text-2xl font-bold tracking-tight text-[#093624] dark:text-white">
              Home Isurance
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Donec rutrum congue leo eget malesuada. Curabitur non nulla sit
              amet nisl tempus convallis
            </p>
          </Card>
        </div>
        <div className="max-w-xs">
          <Card imgSrc={ploices3}>
            <h5 className="text-2xl font-bold tracking-tight text-[#093624] dark:text-white">
              Auto Insurance
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              Donec rutrum congue leo eget malesuada. Curabitur non nulla sit
              amet nisl tempus convallis
            </p>
          </Card>
        </div>
      </div>
    );

}