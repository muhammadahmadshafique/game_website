import Card from "@/components/Card";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bigbg md:h-screen ">
      <div className="flex justify-between w-full">
        {/* left part */}
        <div className="bgimage md:h-screen disapper basis-[25%] font-sans">
          <div className="mt-12 mr-16">
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
                className="w-[190px] h-[190]"
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
            <div className="flex space-y-1 gap-x-6 mt-[126px]  justify-center items-center">
              <img src="./moon.svg" alt="" srcset="" />
              <img src="./discord.svg" alt="" srcset="" />
              <img src="./x.svg" alt="" srcset="" />
            </div>
          </div>
        </div>
        {/* middle part */}
        <div className="basis-[49%] widd ">
          <img  className="mt-12 flex justify-center items-center w-full" src="./logo.svg" alt="" srcset="" />
          <div className="flex gap-x-16 flex-wrap mt-12 gap-y-12 justify-center">
            <Card img={"./image1.svg"}/>
            <Card img={"./image2.svg"}/>
            <Card img={"./image3.svg"}/>
            <Card img={"./image4.svg"}/>
            <Card img={"./image5.svg"}/>
            <Card img={"./image6.svg"}/>
          </div>
        </div>
        <div className="basis-[26%] md:h-screen disapper flex flex-col  bgright">
          <div className="flex justify-end items-center mr-6 mt-6">
          <img className="w-[43px] h-[43px]" src="./ham.svg" alt="" srcset="" />
          </div>


        <div className="flex flex-col justify-end items-end mr-2 mt-24">
        <img className="w-[370-px] h-[420px] object-contain" src="./board.svg" alt="" srcset="" />
         
        </div>
        <div className="flex justify-end items-end mr-12 mt-24">
        <div className="flex gap-x-6 justify-end items-end">
            <img className="w-[43px] h-[43px]" src="./1.svg" alt="" srcset="" />
            <img className="w-[43px] h-[43px]" src="./2.svg" alt="" srcset="" />
            <img className="w-[43px] h-[43px]" src="./3.svg" alt="" srcset="" />
          </div>
        </div>

        </div>
      </div>
    </div>
  );
}
