import React from "react";

function Card({ img }) {
  return (
    <>
      <div className="bgcard relative">
        <img
          className="absolute right-[-38px] top-10"
          src="./5.svg"
          alt=""
          srcset=""
        />
        <img
          className="ml-1 pt-1 w-[172px]"
          src={img}
          alt=""
          srcset=""
        />
        <div className="flex justify-center items-center">
          <img
            className="flex cursor-pointer justify-center items-center mt-6"
            src='./earn.svg'
            alt=""
            srcset=""
          />
        </div>
      </div>
    </>
  );
}

export default Card;
