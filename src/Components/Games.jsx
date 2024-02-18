import React from "react";
import Roblox from "../assets/Roblox.webp";
import Asgard from "../assets/Asgard.webp";
import Peacock from "../assets/Peacock.webp";
import Supernatural from "../assets/Supernatural.webp";

const Games = () => {
  return (
    <div className="mt-16">
      <div className="flex flex-col justify-center items-center gap-8 mx-auto">
        <h1 className="text-center text-4xl font-bold w-[60%] md:w-[57%]">
          Explore games and experiences on Meta Quest
        </h1>
        <button className="bg-white text-blue-600 rounded-3xl px-4 py-2 border border-gray-300 w-[60%] md:w-[20%] hover:cursor-pointer">
          Browse apps & games
        </button>
      </div>

      <div className="block md:flex mt-10 gap-4 overflow-x-hidden mb-4">
        <div className="m-2">
          <img src={Roblox} alt="Roblox" />
          <h1 className="text-3xl text-left">Roblox</h1>
        </div>
        <div className="m-2">
          <img src={Asgard} alt="Asgard" />
          <h1 className="text-3xl text-left">Asgard's Wrath 2</h1>
        </div>
        <div className="m-2">
          <img src={Peacock} alt="Peacock" />
          <h1 className="text-3xl text-left">Peacock</h1>
        </div>
        <div className="m-2">
          <img src={Supernatural} alt="supernatural" />
          <h1 className="text-3xl text-left">Supernatural</h1>
        </div>
      </div>
    </div>
  );
};

export default Games;
