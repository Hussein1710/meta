import React from 'react'
import VR from '../assets/VR.webp'
import MetaV from '../assets/MetaV.webp'
import Rayban from '../assets/Rayban.webp'
import Metaquest from '../assets/Metaquest.webp'

const Products = () => {
  return (
    <div className='mt-12'>
        <div className="flex flex-col justify-center items-center gap-6">
            <h1 className='text-4xl font-bold text-center'>Shop Meta products</h1>
            <p className='text-lg text-center'>The future of virtual reality, mixed reality and smart glasses is here.</p>
        </div>

        <div className="m-2 block md:flex mt-3 md:mt-10">
            <div className="flex flex-col gap-8 justify-center items-center">
                <img src={VR} alt="virtual-reality" className='w-full' />
                <button className="bg-white text-blue-600 rounded-3xl px-4 py-2 border border-gray-300 w-36 hover:cursor-pointer">
              Shop now
            </button>
            </div>

            <div className="flex flex-col gap-8 justify-center items-center">
                <img src={MetaV} alt="virtual-reality" className='w-full' />
                <button className="bg-white text-blue-600 rounded-3xl px-4 py-2 border border-gray-300 w-36 hover:cursor-pointer">
              Shop now
            </button>
            </div>

            <div className="flex flex-col gap-8 justify-center items-center">
                <img src={Metaquest} alt="virtual-reality" className='w-full' />
                <button className="bg-white text-blue-600 rounded-3xl px-4 py-2 border border-gray-300 w-36 hover:cursor-pointer">
              Shop now
            </button>
            </div>

            <div className="flex flex-col gap-8 justify-center items-center">
                <img src={Rayban} alt="virtual-reality" className='w-full' />
                <button className="bg-white text-blue-600 rounded-3xl px-4 py-2 border border-gray-300 w-36 hover:cursor-pointer">
              Shop now
            </button>
            </div>
        </div>
    </div>
  )
}

export default Products