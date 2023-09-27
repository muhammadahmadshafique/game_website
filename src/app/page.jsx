'use client'
import Card from "@/components/Card";
import Image from "next/image";
import { useState } from "react";
import Link from 'next/link'

export default function Home() {

  const [left, setleft] = useState(false);
  const [right, setright] = useState(false);

  return (
    <div className="bigbg h-full">
      <div className="flex justify-between w-full">
        {/* left part */}
        <div className="bgimage md:h-screen disapper basis-[23%] font-sans">
          <div className="mt-12 mr-12">
            <div className="flex gap-x-4 justify-center items-center">
              <img src="./76.svg" alt="" srcset="" />
              <p className="text-[30px]">76DX....7JKA</p>
            </div>
            <div className="flex gap-x-4 mt-4 mr-[70px] justify-center items-center">
              <img src="./x.svg" alt="" srcset="" />
              <p className="text-[30px]">@NLAB</p>
            </div>
            <div className="flex gap-x-4 mt-[90px] justify-center items-center">
              <img
                className="w-[160px] h-[160]"
                src="./circle.svg"
                alt=""
                srcset=""
              />
            </div>
            <div className="flex flex-col space-y-1 gap-x-4 mt-12  justify-center items-center">
              <p className="text-[28px]">LVL 2 Unlock in</p>
              <p className="text-[22px]">19H 48M 23S</p>
              <img src="./line.svg" alt="" srcset="" />
            </div>
            <div className="flex space-y-1 gap-x-6 mt-[106px]  justify-center items-center">
              <img src="./moon.svg" alt="" srcset="" />
              <img src="./discord.svg" alt="" srcset="" />
              <img src="./x.svg" alt="" srcset="" />
            </div>
          </div>
        </div>
        {/* middle part */}
        <div className="basis-[49%] widd ">
          <div className="hidden show mx-12 justify-between items-center mt-12">
            <img
            onClick={()=>{setleft(!left)
            
            
            }}
              className="w-[43px] h-[43px] z-50 cursor-pointer"
              src="./ham.svg"
              alt=""
              srcset=""
            />

            <img
               onClick={()=>{
                setright(!right)
              
              }}
              className="w-[43px] h-[43px] z-50 cursor-pointer"
              src="./ham.svg"
              alt=""
              srcset=""
            />
          </div>
          <img
            className="mt-12 flex justify-center items-center w-full"
            src="./logo.svg"
            alt=""
            srcset=""
          />
          <div className="flex gap-x-16 flex-wrap mt-12 gap-y-12 justify-center">
            
          <Link href="/sec">
            
            <Card  img={"./image1.svg"} /></Link>
            <Card img={"./image2.svg"} />
            <Card img={"./image3.svg"} />
            <Card img={"./image4.svg"} />
            <Card img={"./image5.svg"} />
            <Card img={"./image6.svg"} />
          </div>
        </div>
        <div className="basis-[22%] md:h-screen disapper flex flex-col  bgright">
          <div className="flex justify-end items-center mr-6 mt-6">
            <img
              className="w-[43px] h-[43px]"
              src="./ham.svg"
              alt=""
              srcset=""
            />
          </div>

          <div className="flex flex-col justify-end items-end mr-2 mt-24">
            <img
              className="w-[230px] h-[380px] object-contain"
              src="./board.svg"
              alt=""
              srcset=""
            />
          </div>
          <div className="flex justify-end items-end mr-12 mt-24">
            <div className="flex gap-x-6 justify-end items-end">
              <img
                className="w-[43px] h-[43px]"
                src="./1.svg"
                alt=""
                srcset=""
              />
              <img
                className="w-[43px] h-[43px]"
                src="./2.svg"
                alt=""
                srcset=""
              />
              <img
                className="w-[43px] h-[43px]"
                src="./3.svg"
                alt=""
                srcset=""
              />
            </div>
          </div>
        </div>
      </div>




{left===true&&(
  <div className="absolute w-[90%] top-0">
     <div className="bgimage basis-[23%] font-sans">
          <div className="pt-32 mr-16">
            <div className="flex gap-x-4 justify-center items-center">
              <img src="./76.svg" alt="" srcset="" />
              <p className="text-[30px]">76DX....7JKA</p>
            </div>
            <div className="flex gap-x-4 mt-4 mr-[70px] justify-center items-center">
              <img src="./x.svg" alt="" srcset="" />
              <p className="text-[30px]">@NLAB</p>
            </div>
            <div className="flex gap-x-4 mt-[90px] justify-center items-center">
              <img
                className="w-[160px] h-[160]"
                src="./circle.svg"
                alt=""
                srcset=""
              />
            </div>
            <div className="flex flex-col space-y-1 gap-x-4 mt-12  justify-center items-center">
              <p className="text-[28px]">LVL 2 Unlock in</p>
              <p className="text-[22px]">19H 48M 23S</p>
              <img src="./line.svg" alt="" srcset="" />
            </div>
            <div className="flex space-y-1 pb-12 gap-x-6 mt-[126px]  justify-center items-center">
              <img src="./moon.svg" alt="" srcset="" />
              <img src="./discord.svg" alt="" srcset="" />
              <img src="./x.svg" alt="" srcset="" />
            </div>
          </div>
        </div>
  </div>
)}

{right===true&&(
  <div className="absolute w-[90%] h-screen right-0 top-0">
     <div className="basis-[22%] h-screen  flex flex-col  bgright">
       

          <div className="flex flex-col  justify-end items-end mr-2 mt-32">
            <img
              className="w-[230px] h-[380px] object-contain"
              src="./board.svg"
              alt=""
              srcset=""
            />
          </div>
          <div className="flex justify-end items-end mr-12 mt-24">
            <div className="flex gap-x-6 pb-12 justify-end items-end">
              <img
                className="w-[43px] h-[43px]"
                src="./1.svg"
                alt=""
                srcset=""
              />
              <img
                className="w-[43px] h-[43px]"
                src="./2.svg"
                alt=""
                srcset=""
              />
              <img
                className="w-[43px] h-[43px]"
                src="./3.svg"
                alt=""
                srcset=""
              />
            </div>
          </div>
        </div>
  </div>
)}

    </div>
  );
}
