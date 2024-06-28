import React from 'react';
import mount from '../../assets/mount.jpg';

const Hero = () => {
  return (
    <>
    <div className="w-[100%] h-[100vh]  flex flex-col justify-center items-center">
    <h2 className='text-6xl font-semibold text-green-700'>SDS TECHNOLOGIES</h2>
      <img src={mount} className=' h-[100%] w-[100%] object-cover'/>
    </div>
    </>
  );
}

export default Hero;












   {/* <div
        className="absolute inset-0 bg-cover bg-center opacity-50 "
        style= {{ backgroundImage: `url(${HeroBg})` }}
      ></div>
      <div className="relative z-10 text-center p-5 text-white ">
        <h1 className="text-5xl font-bold mb-4">Welcome to Our Website</h1>
        <p className="text-2xl mb-8">We're glad you're here. Discover amazing content and join our community!</p>
        <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded transition duration-300">
          Get Started
        </button>
      </div> */}