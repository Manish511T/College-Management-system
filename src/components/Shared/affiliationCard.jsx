import React from 'react'

const affiliationCard = () => {
  return (
    <div className='h-60 flex items-center justify-center flex-col gap-5 '>
        <div>
            <h1 className='text-[#18397C] text-2xl mt-2'>AFFILIATED / APPROVED BY</h1>
        </div>

        <div className='flex gap-3'>
            <div id="box1" className='flex justify-evenly items-center flex-col py-5 px-1 border-2 border-gray-600 rounded-xl gap-2 cursor-pointer  hover:bg-blue-500 hover:scale-105 transform transition duration-300'>
                <img className='h-24' src="https://globalinst.in/wp-content/uploads/2022/01/Untitled_design-removebg-preview.png" alt="" />
                <h1 className='text-sm font-semibold text-center'>Government of Uttar Pradesh</h1>
            </div>
            <div id="box2" className='flex justify-center items-center flex-col py-5 px-1 border-2 border-gray-600 rounded-xl gap-2 cursor-pointer  hover:bg-blue-500 hover:scale-105 transform transition duration-300 '>
                <img className='h-24' src="https://globalinst.in/wp-content/uploads/2022/01/Untitled_design__1_-removebg-preview.png" alt="" />
                <h1 className='text-sm font-semibold text-center'>All India Council For Technical Education</h1>
            </div>
            <div id="box3" className='flex justify-center items-center flex-col py-5 px-1 border-2 border-gray-600 rounded-xl gap-2  cursor-pointer hover:bg-blue-500 hover:scale-105 transform transition duration-300 '>
                <img className='h-24' src="https://globalinst.in/wp-content/uploads/2022/01/Untitled_design__3_-removebg-preview.png" alt="" />
                <h1 className='text-sm font-semibold text-center'>Chaudhrary Charan Singh University</h1>
            </div>
            <div id="box4" className='flex justify-center items-center flex-col py-5 px-1 border-2 border-gray-600 rounded-xl gap-2 cursor-pointer  hover:bg-blue-500 hover:scale-105 transform transition duration-300 '>
                <img className='h-24' src="https://globalinst.in/wp-content/uploads/2022/01/Untitled_design__2_-removebg-preview.png" alt="" />
                <h1 className='text-sm font-semibold text-center'>National Council For Teacher Education</h1>
            </div>
            <div id="box5" className='flex justify-center items-center flex-col py-5 px-1 border-2 border-gray-600 rounded-xl gap-2 cursor-pointer hover:bg-blue-500 hover:scale-105 transform transition duration-300 '>
                <img className='h-24' src="https://globalinst.in/wp-content/uploads/2022/01/Untitled_design__4_-removebg-preview.png" alt="" />
                <h1 className='text-sm font-semibold text-center'>Dr. A.P.J Abdul Kalam Technical University</h1>
            </div>
        </div>
    </div>
  )
}

export default affiliationCard
