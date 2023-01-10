import React from 'react';
import NotfoundImg from "../../assets/images/notfound.png";

function Notfound() {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className='shrink-0'>
        <img className='h-[300px]' src={NotfoundImg} alt="NotfoundImg" />
      </div>
    </div>
  );
}

export default Notfound