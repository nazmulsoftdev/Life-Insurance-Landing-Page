import React from 'react';
import BrandingImg from "../../assets/images/brandingImg.png";

function ContentSection() {
  return (
    <div className="mt-[130px] p-2 md:w-[80%] md:m-auto md:mt-[100px]">
      <div className="flex flex-col space-y-10 justify-center items-center md:flex md:flex-row md:justify-between md:items-center">
        <div>
          <img src={BrandingImg} alt="BrandingImg" />
        </div>
        <div className="space-y-10">
          <div className="space-y-3">
            <h3 className="text-2xl font-bold text-[#093624]">
              We Got You Covered. Don’t
              <br />
              Get Caught Off Guard Experienced Agents
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
      </div>
    </div>
  );
}

export default ContentSection