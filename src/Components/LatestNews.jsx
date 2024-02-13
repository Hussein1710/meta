import React from 'react'
import { MdKeyboardArrowDown } from "react-icons/md";
import MQ3 from '../assets/MQ3.webp'
import Intro from '../assets/Intro.webp'
import Connect from '../assets/Connect.webp'


const LatestNews = () => {
  return (
    <div className='mt-10'>
        <div className="flex items-center m-4 gap-4">
            <MdKeyboardArrowDown />
            <p>Latest News</p>
        </div>

        <div className="block md:flex gap-4 m-6">
            <div className="flex flex-col items-center">
                <img src={MQ3} alt="MQ" />
                <h1 className='text-left text-2xl'>Meta Quest 3: The first Mass Market reality Headset</h1>
            </div>

            <div className="flex flex-col items-center">
                <img src={Intro} alt="MQ" className='w-[80%]'/>
                <h1 className='text-center text-2xl'>Introducing the Next-Generation Ray Ban | Meta smart glasses collection</h1>
            </div>

            <div className="flex flex-col items-center">
                <img src={Connect} alt="MQ" />
                <h1 className='text-left text-2xl'>Meta Connect 2023 Keynote Recap</h1>
            </div>
        </div>
    </div>
  )
}

export default LatestNews