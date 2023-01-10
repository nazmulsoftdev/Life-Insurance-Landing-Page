import React from 'react';
import emailIcon from "../../assets/icons/emailIcon.png";
import phoneIcon from "../../assets/icons/phoneIcon.png";
import locationIcon from "../../assets/icons/locationIcon.png";

function ContactSection() {
  return (
    <div className="bg-[#0D4A31]">
      <div className="mt-[130px] p-5 space-y-10  md:w-[80%] md:m-auto md:mt-[10px] md:p-[50px] ">
        <div className="flex flex-col justify-center space-y-10 md:grid md:grid-cols-2 md:gap-5 ">
          <LeftSection />
          <RightContact />
        </div>
      </div>
    </div>
  );
}

export default ContactSection;



const LeftSection = ()=>{
    return (
      <div className='space-y-5'>
        <div className="space-y-2">
          <h3 className="text-2xl font-bold text-white">Contact Us</h3>
          <div className="p-[1px] bg-gray-400 w-[60px]"></div>
        </div>
        <div>
          <p className='leading-loose text-white'>
            Proin eget tortor risus. Praesent sapien massa, convallis a<br />
            pellentesque nec, egestas non nisi. Donec rutrum congue leo
            <br /> eget malesuada. Nulla porttitor accumsan tincidunt. Donec<br />
            rutrum congue leo eget malesuada.
          </p>
        </div>
        <LeftContact />
      </div>
    );
}



const LeftContact  = ()=>{

    return (
      <div className='space-y-7 bg-white shadow-2xl p-5 max-w-md'>
        <div className="flex items-center space-x-3">
          <div className="p-1 bg-[#0D4A31] w-[40px] h-[40px] rounded-full flex justify-center items-center">
            <div className="shrink-0">
              <img src={emailIcon} alt="emailIcon" />
            </div>
          </div>
          <div>
            <p className="text-[#0D4A31] text-lg font-semibold">Email</p>
            <p className="text-gray-300">inte_ger@yahoo.com</p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <div className="p-1 bg-[#0D4A31] w-[40px] h-[40px] rounded-full flex justify-center items-center">
            <div className="shrink-0">
              <img src={phoneIcon} alt="phoneIcon" />
            </div>
          </div>
          <div>
            <p className="text-[#0D4A31] text-lg font-semibold">Phone</p>
            <p className="text-gray-300">+62 1404 5123 12312</p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <div className="p-1 bg-[#0D4A31] w-[40px] h-[40px] rounded-full flex justify-center items-center">
            <div className="shrink-0">
              <img src={locationIcon} alt="locationIcon" />
            </div>
          </div>
          <div>
            <p className="text-[#0D4A31] text-lg font-semibold">Address</p>
            <p className="text-gray-300">
              Jl. Jend. Sudirman No.Kav 48A, RT.5/RW.4, Karet Semanggi,
            </p>
          </div>
        </div>
      </div>
    );

}


const RightContact = ()=>{
    return (
      <div className="bg-white shadow-2xl">
        <form>
          <div className="flex flex-col p-10 space-y-8">
            <input
              type="text"
              className="bg-white border border-gray-200 rounded-md focus:outline-0"
              placeholder="Name"
              required
            />
            <input
              type="email"
              className="bg-white border border-gray-200 rounded-md focus:outline-0"
              placeholder="Email Address"
              required
            />
            <input
              type="number"
              className="bg-white border border-gray-200 rounded-md focus:outline-0"
              placeholder="Phone Number"
              required
            />
            <textarea
              placeholder="Message"
              className="h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md"
            />
            <button className="p-2 bg-[#6C74F4] max-w-[40%] text-white rounded-md">Submit</button>
          </div>
        </form>
      </div>
    );
}