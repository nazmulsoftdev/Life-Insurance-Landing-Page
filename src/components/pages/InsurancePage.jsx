import React from 'react';
import InsuranceImg from "../../assets/images/underdev.png";

function InsurancePage() {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className='shrink-0'>
        <img className='h-[300px]' src={InsuranceImg} alt="InsuranceImg"  />
      </div>
    </div>
  );
}

export default InsurancePage