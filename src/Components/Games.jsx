import React from 'react'
import Roblox from '../assets/Roblox.webp'
import Asgard from '../assets/Asgard.webp'
import Peacock from '../assets/Peacock.webp'
import Supernatural from '../assets/Supernatural.webp'


const Games = () => {
  return (
    <div className='mt-16'>
        <div className="flex flex-col justify-center items-center gap-8">
            <h1 className='text-center text-5xl font-bold w-[57%]'>Explore games and experiences on Meta Quest</h1>
            <button className="bg-white text-blue-600 rounded-3xl px-4 py-2 border border-gray-300 w-[20%] hover:cursor-pointer">
              Browse apps & games
            </button>
        </div>

        <div className="block md:flex mt-10 gap-4 overflow-x-hidden mb-4">
            <img src={Roblox} alt="Roblox" />
            <img src={Asgard} alt="Asgard" />
            <img src={Peacock} alt="Peacock" />
            <img src={Supernatural} alt="supernatural" />

        </div>
    </div>
  )
}

export default Games