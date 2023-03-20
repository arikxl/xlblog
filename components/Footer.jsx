import Link from "next/link";

import AppLogo from "./AppLogo";
import { footerData } from "../data/data";

const Footer = () => {
  return (
    <div className="w-full py-10 bg-bgColor text-white/80 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-4
       justify-center items-center md:justify-between">
        <div className="flex items-center gap-3">
          <AppLogo color="sec" />
          <p className="flex items-center text-sm font-titleFont gap-1">
            <span className="text-lg">©️</span>
            Arik Alexandrov || arikxl
          </p>
        </div>

        <div className="flex gap-6">

          {
            footerData.map(d => (
              <Link key={d.id} href={d.link} target="_blank" rel="noopener">
                <d.img className="w-6 h-6 text-white/50 rounded-full
               hover:text-white duration-300 cursor-pointer" />
              </Link>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Footer;
