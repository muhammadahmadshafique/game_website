"use client";

import React, { useState } from "react";

const Post = () => {
  const [input, setinput] = useState("");
  const [popup, setpopup] = useState(true);
  const [popup11, setpopup11] = useState(false);

  
  return (
    <div className="bigbg1">
      <div className="flex flex-col justify-center items-center w-full">
        <div className="flex justify-center items-start w-full pt-12">
          <img className=" " src="./sect.png" alt="" srcset="" />
          <div className="ml-44">
            <img src="./top.png" alt="" />
          </div>
        </div>

        <div className="boxx p-[48px] rounded-[30px] mt-16 mb-4">
          <div className="input-bg">
            <input
              className="placeholder:text-white border-b-2 text-white text-2xl bg-transparent"
              type="text"
              placeholder="Say Something..."
              value={input}
              onChange={(e) => setinput(e.target.value)}
            />
          </div>
          <div className="my-3 cursor-pointer" onClick={() => setpopup(true)}>
            <img className="w-[323px] h-[303px]" src="./secimage.svg" alt="" />
          </div>
        </div>

        <div>
          <img src="./post.svg" alt="" />
        </div>

        <div className="flex w-full justify-end items-end mr-12 pt-16 pb-4">
          <div className="flex w-full gap-x-6 justify-end items-end">
            <img onClick={() => setpopup11(!popup11)} className="w-[43px] h-[43px]" src="./1.svg" alt="" srcset="" />
            <img className="w-[43px] h-[43px]" src="./2.svg" alt="" srcset="" />
            <img className="w-[43px] h-[43px]" src="./3.svg" alt="" srcset="" />
          </div>
        </div>
      </div>

     {popup11===true&& <div className="fixed inset-0 flex flex-col items-center z-50 justify-center">
        <div className="boxx h-fit px-8 py-8 flex flex-col justify-center items-center gap-y-4 w-[334px] z-50">
          <p className="text-white text-2xl">MARKETPLACE</p>
        <div className="bg-white rounded-3xl flex justify-center items-center">
        <img  className="w-32" src="./marketplace.png" alt="" srcset="" />
        </div>
         <div className="w-full">
         <label
            for="countries"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Items
          </label>
          <select
            id="countries"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>WL</option>
            <option value="US">OG</option>
           
          </select>
          <input type="text" id="first_name" class="bg-gray-50 mt-3 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Discord id" required/>

         </div>
         <div>
      
         </div>
        </div>
        <img   className="w-[334px]"  src="./buy.png" alt="" srcset="" />
      </div>}
    </div>
  );
};

export default Post;
