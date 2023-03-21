import { GoComment } from "react-icons/go";
import { IoMdHeartEmpty } from "react-icons/io";
import { MdOutlineMonitor } from "react-icons/md";
import {
  BsFacebook,
  BsTelegram,
  BsLinkedin,
  BsGithub,
} from "react-icons/bs";

import bannerImgOne from "../public/images/kids.jpg";
import bannerImgTwo from "../public/images/football.jpg";
import bannerImgThree from "../public/images/prog.jpg";
import bannerImgFour from "../public/images/gaming.jpg";


export const sliderData = [
    {
        id: 401,
        img: bannerImgOne,
        alt:'arik alexandrov'
    },
    {
        id: 402,
        img: bannerImgTwo,
        text: 'this is terner'
    },
    {
        id: 403,
        img: bannerImgThree,
        text: 'arik alexandrov'
    },
    {
        id: 404,
        img: bannerImgFour,
        text: 'gaming arikxl'
    }
];
export const bannerData = [
    {
        id: 101,
        img: MdOutlineMonitor,
        text: 'enjoy reading'
    },
    {
        id: 102,
        img: IoMdHeartEmpty,
        text: 'like my content'
    },
    {
        id: 103,
        img: GoComment,
        text: 'place comments'
    }
];

export const footerData = [
  {
    id: 201,
    img: BsTelegram,
    link: 'https://t.me/Arik_A'
  },
  {
    id: 202,
    img: BsFacebook,
    link: 'https://www.facebook.com/arik.alexandrov'
  },
  {
    id: 203,
    img: BsGithub,
    link: 'https://github.com/arikxl'
  },
  {
    id: 204,
    img: BsLinkedin,
    link: 'https://www.linkedin.com/in/arik-alexandrov/'
  },

]