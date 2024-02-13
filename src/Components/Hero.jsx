import React from "react";
import backImg from "../assets/backposter.jpg";
import { MdKeyboardArrowRight } from "react-icons/md";

const Hero = () => {
  const divStyle = {
    backgroundImage: `url(${backImg})`,
    backgroundSize: "cover",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  };
  return (
    <div className="">
      <div style={divStyle}>
        <div className="flex flex-col justify-start gap-5 m-4">
          <p className="border rounded bg-slate-400 text-white px-2 w-32 mt-8">
            Special offer
          </p>
          <h1 className="text-white text-[80px] text-left text-wrap w-[50%]">
            Mix reality with Meta Quest 3
          </h1>

          <p className="text-white text-2xl text-left leading-10 w-[50%]">
            Get Asgard's Wrath 2 free ($59.99 USD value)—and receive a 6-month
            trial to Meta Quest+ ($47.94 USD value) when you upgrade to 512GB.**
          </p>

          <div className="flex items-center gap-3 mb-32">
            <button className="bg-blue-600 text-white rounded-3xl px-2 py-1 w-32 hover:cursor-pointer hover:bg-blue-300">
              Add to bag
            </button>
            <div className="flex items-center gap-2">
              <MdKeyboardArrowRight
                className=" border bg-slate-100 rounded-full hover:cursor-pointer hover:bg-blue-300"
                size={25}
              />
              <p className="text-white text-md">Learn More</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
