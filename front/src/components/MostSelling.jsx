import React from 'react'

export default function MostSelling({ name, image }) {
  return (
    <div className=" w-full h-[40vh] md:w-[40%] lg:w-[30%] xl:w-[20%] flex flex-col justify-center overflow-hidden items-center md:rounded-xl mb-20 ">
      <div
        className="group flex w-full h-full  md:rounded-md items-center lg:items-end  justify-center lg:pb-20 scale-125 grayscale-50  lg:grayscale-100 hover:grayscale-25 bg-cover bg-center hover:scale-105 transition-all duration-600 ease-in-out "
        style={{ backgroundImage: `url(${image})`}}
        >
        <h2 className="bg-[#eeece9]  lg:bg-[#eeece9]/50 lg:group-hover:bg-[#eeece9]/70 text-[#3c3a36] p-2 rounded-md font-bold text-lg lg:text-[1.5vw] xl:text-lg  text-center group-hover:scale-[130%] transition-all duration-600 ease-in-out">
          {name}
        </h2>
      </div>
    </div>
  )
}
