import React from 'react';
import HeroBrand from "../../assets/images/Group320.png";
import StartIcon from "../../assets/icons/startIcon.png";
import LockIcon from "../../assets/icons/lockIcon.png";
import WebIcon from "../../assets/icons/webIcon.png";
import HeroImg from "../../assets/images/heroMain.png";
import TitleImage1 from "../../assets/images/Group326.png";
import TitleImage2 from "../../assets/images/Group323.png";
import "./Hero.css";


function HeroSection() {
  return (
    <div className="bg-[#0D4A31]">
      <div className="flex flex-col p-2 space-y-20  md:w-[95%] md:m-auto md:p-[50px] md:flex md:flex-row md:justify-between md:items-center ">
        <div>
          <LeftHeroSection />
        </div>
        <div>
          <RightHeroSection />
        </div>
      </div>
    
    </div>
  );
}

export default HeroSection;



const LeftHeroSection = ()=>{

    return (
      <div className="space-y-12">
        <div className="space-y-2">
          <h2 className="font-semibold text-4xl text-white">
            Are You Covered?
          </h2>
          <h2 className="font-semibold text-4xl text-white">Home, Life, &</h2>
          <h2 className="font-semibold text-4xl text-white">Auto Insurance.</h2>
        </div>
        <div>
          <p className="font-light text-base text-white">
            Proin eget tortor risus. Praesent sapien massa, convallis a<br />
            pellentesque nec, egestas non nisi. Donec rutrum congue leo eget
            <br />
            malesuada.{" "}
          </p>
        </div>
        <div className="space-x-4">
          <button className="px-5 py-3 bg-[#F8C140] rounded-sm font-semibold">
            Get Started
          </button>
          <button className="px-5 py-3 bg-[#0D4A31] rounded-sm text-white">
            Watch the video
          </button>
        </div>
        <div>
          <img src={HeroBrand} alt="HeroBrand" />
        </div>
      </div>
    );

}



const RightHeroSection = ()=>{

    return (
      <div>
        <div className="relative mr-0 md:mr-10 ">
          <img className="h-[400px] HeroImg" src={HeroImg} alt="HeroImg" />
          <img src={StartIcon} alt="StartIcon" className="StartIcon" />
          <img src={LockIcon} alt="LockIcon" className="LockIcon" />
          <img src={WebIcon} alt="WebIcon" className="WebIcon" />
          <img src={TitleImage1} alt="TitleImage1" className="TitleImage1" />
          <img src={TitleImage2} alt="TitleImage2" className="TitleImage2" />
        </div>
      </div>
    );

}