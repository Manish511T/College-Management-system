import React from 'react'

const courseLabel = () => {
    return (
        <div className='h-20 w-screen  mt-5  flex justify-evenly'>
            <div className='flex flex-col justify-evenly items-center hover:scale-105 transform transition duration-300 cursor-pointer'>
                <div id="circle1" className='h-14 w-14 bg-[#18397C] rounded-full flex justify-center items-center text-4xl text-white'>
                    <i class="ri-book-open-line "></i>
                </div>
                <h1>Public Course</h1>
            </div>
            <div className='flex flex-col justify-evenly items-center hover:scale-105 transform transition duration-300 cursor-pointer'>
                <div id="circle1" className='h-14 w-14 bg-[#18397C] rounded-full flex justify-center items-center text-4xl text-white'>
                    <i class="ri-graduation-cap-line"></i>
                </div>
                <h1>Undergaduate Course</h1>
            </div>
            <div className='flex flex-col justify-evenly items-center hover:scale-105 transform transition duration-300 cursor-pointer'>
                <div id="circle1" className='h-14 w-14 bg-[#18397C] rounded-full flex justify-center items-center text-4xl text-white'>
                <i class="ri-award-line"></i>
                </div>
                <h1>Master's Course</h1>
            </div>
            <div className='flex flex-col justify-evenly items-center hover:scale-105 transform transition duration-300 cursor-pointer'>
                <div id="circle1" className='h-14 w-14 bg-[#18397C] rounded-full flex justify-center items-center text-4xl text-white'>
                <i class="ri-school-line"></i>
                </div>
                <h1>PostGraduation Course</h1>
            </div>
            <div className='flex flex-col justify-evenly items-center hover:scale-105 transform transition duration-300 cursor-pointer'>
                <div id="circle1" className='h-14 w-14 bg-[#18397C] rounded-full flex justify-center items-center text-4xl text-white'>
                <i class="ri-briefcase-line"></i>
                </div>
                <h1>Become Lecturer</h1>
            </div>
        </div>
    )
}

export default courseLabel