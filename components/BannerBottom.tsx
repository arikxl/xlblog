import React from "react";

import { bannerData } from '../data/data';

const BannerBottom = () => {
  return (
    <div className="max-w-full mx-auto flex flex-col gap-10 
            lg:gap-0 lg:flex-row justify-center items-center h-auto lg:h-60
      bg-bgColor text-white py-10 px-8 -mt-10 z-50">
      <div className="w-full lg:w-[60%] flex flex-col gap-3">
        <h3 className=" text-s md:text-4xl">
          <span className="font-bold">Shalom and welcome to my xlBlog.</span>
          <br />
          <i>
            outstanding thoughts & experience
            <br />
            (more or less)
          </i>
        </h3>
        <p className="text-l text-white/50">Arik Alexandrov | web&kids developer</p>
      </div>
      <div className="w-full lg:w-[40%] flex items-center justify-center gap-2 lg:gap-8">
        {bannerData.map(d => (
          <div className="w-full flex flex-col items-center group" key={d.id}>
            <d.img className="text-4xl text-gray-300
             group-hover:text-white duration-300" />
            <p className="text-xs md:text-sm font-titleFont
             text-white/50 group-hover:text-white">
              {d.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BannerBottom;
