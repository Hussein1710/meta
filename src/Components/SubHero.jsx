import React from "react";
import backImg from "../assets/Vrgirl.webp";
import backImg2 from "../assets/girl.webp";
import { MdKeyboardArrowRight } from "react-icons/md";

const SubHero = () => {
  const divStyle = {
    backgroundImage: `url(${backImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  };

  const divStyle2 = {
    backgroundImage: `url(${backImg2})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100%",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  };
  return (
    <div className="block md:flex mt-10 m-3 gap-9">
      <div className="border rounded-lg" style={{...divStyle, marginBottom: "4rem"}}>
        <div className="m-4">
          <h1 className="text-3xl text-left w-[47%] font-bold">
            Dive into VR with Meta Quest 2
          </h1>
          <p className="mt-10 text-2xl text-left w-[35%]">
            Experience the thrill of immersive games, fitness apps and
            entertainment—now for $50 less.
          </p>
          <div className="flex flex-col gap-3 mt-8">
            <button className="bg-blue-600 text-white rounded-3xl px-3 py-2 w-32 hover:cursor-pointer hover:bg-blue-300">
              Add to bag
            </button>
            <div className="flex items-center gap-2">
              <MdKeyboardArrowRight
                className=" border bg-slate-100 rounded-full hover:cursor-pointer hover:bg-inherit"
                size={25}
              />
              <p className="text-blue-600 text-md hover:bg-inherit">
                Learn More
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="border rounded-lg" style={divStyle2}>
        <div className="m-4">
          <h1 className="text-3xl text-left w-[47%] font-bold">
            Do more in style with Ray-Ban | Meta
          </h1>
          <p className="mt-5 text-2xl text-left w-[35%]">
            Next-generation smart glasses that blend an iconic look with
            cutting-edge technology.
          </p>
          <div className="flex flex-col gap-3 mt-4">
            <button className="bg-blue-600 text-white rounded-3xl px-3 py-2 w-36 md:w-32 hover:cursor-pointer hover:bg-blue-300">
              Shop all styles
            </button>
            <div className="flex items-center gap-2">
              <MdKeyboardArrowRight
                className=" border bg-slate-100 rounded-full hover:cursor-pointer hover:bg-inherit"
                size={25}
              />
              <p className="text-blue-600 text-md hover:bg-inherit">
                Learn More
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubHero;
