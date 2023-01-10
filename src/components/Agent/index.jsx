import React from 'react';
import "./Agent.css"

function AgentSection() {
  return (
    <div className="mt-[50px] p-2 md:w-[80%] md:m-auto md:mt-[100px]">
      <div className='flex flex-col space-y-10 justify-center items-center md:flex md:flex-row md:justify-between md:items-center'>
        <LeftSection />
        <RightSection />
      </div>
    </div>
  );
}

export default AgentSection;


const LeftSection = ()=>{

    return (
      <div className="space-y-10">
        <div className="space-y-3">
          <h3 className="text-2xl font-bold text-[#093624]">
            Experienced Agents
            <br />
            You Can Trust
          </h3>
          <div className="p-[1px] bg-gray-400 w-[60px]"></div>
        </div>

        <div>
          <p className="font-normal leading-relaxed text-gray-700 text-justify dark:text-gray-400 md:leading-loose">
            Proin eget tortor risus. Praesent sapien massa, convallis a<br />
            pellentesque nec, egestas non nisi. Donec rutrum congue leo
            <br /> eget malesuada. Nulla porttitor accumsan tincidunt. Donec
            <br /> rutrum congue leo eget malesuada.
          </p>
        </div>
      </div>
    );

}


const RightSection = ()=>{
    return (
      <div className="grid grid-cols-2 md:grid md:grid-cols-2 md:gap-0 AgentCard-Container">
        <div className=" max-w-[200px] h-[150px] flex justify-center items-center bg-[#1F8058] text-center text-white md:p-5 md:shadow-lg  md:rounded-sm  md md:border-r-2 md:border-[#ADB2FF]">
          <p>18</p>
          <p>Policies</p>
        </div>
        <div className=" max-w-[200px] h-[150px] flex justify-center items-center rounded-sm bg-[#1F8058] text-center shadow-lg text-white md:p-9 ">
          <p>19</p>
          <p>AGENTS</p>
        </div>
        <div className="max-w-[200px] h-[150px] flex flex-col justify-center items-center shadow-lg text-center rounded-sm bg-[#1F8058] text-white border-t-2 border-[#ADB2FF] md:p-9  ">
          <p>10</p>
          <p>YEARS IN BUSINESS</p>
        </div>
        <ConsultCard />
      </div>
    );
}


const ConsultCard = ()=>{
    return (
      <div className="p-4 box-border shadow-2xl text-center bg-white  rounded-md ConsultCard">
        <div className="space-y-5">
          <p className="text-lg text-[#093624] font-bold">Free Consultation</p>
          <p className="text-center text-gray-400">
            Proin eget tortor risus. Praesent
            <br />
            sapien massa, convallis.
          </p>
          <button className="p-2 bg-[#F8C140] rounded-sm">Chat now</button>
        </div>
      </div>
    );
}