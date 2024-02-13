import React from 'react'
import { BsTruck } from "react-icons/bs";
import { FaCommentsDollar } from "react-icons/fa";
import { FaShieldAlt } from "react-icons/fa";
const Header = () => {
  return (
    <div className='bg-blue-950 w-full'>
        <div className="hidden justify-center items-center gap-6 lg:flex">
            <div className="flex justify-center items-center gap-1 text-white">
                <BsTruck />
                <p>Free delievry</p>
            </div>
            <div className="flex justify-center items-center gap-1 text-white">
                <FaCommentsDollar />
                <p>Worry-free trial</p>
            </div>
            <div className="flex justify-center items-center gap-1 text-white">
                <FaShieldAlt />
                <p>Warranty</p>
            </div>
        </div>
    </div>
  )
}

export default Header