import React from 'react'
import { useNavigate } from 'react-router-dom'

const header = () => {
    const CourseNavigate = useNavigate();
    const HomeNavigate = useNavigate(); 
    const goToCourse = ()=>{
        CourseNavigate("/course");
    };
    const goToHome = ()=>{
        HomeNavigate("/");
    };


  return (
    <div>
        {/* Upper header */}
        <div className='bg-slate-300 h-20 w-screen flex justify-center items-center'>
            <div className=' w-1/2 overflow-hidden  flex justify-center items-center'>
                <img className='h-20 p-1' src="https://globalinst.in/wp-content/uploads/2022/01/logo-150x150.png" alt="" />
            </div>
        </div>

        {/* lower header */}
        <div className='bg-[#18397C] w-screen h-8 text-[#dee2e6] flex justify-evenly items-center'>
            <div className='cursor-pointer'>
            <i onClick={goToHome} class="ri-home-4-line"></i>
            </div>
            <div className='flex justify-evenly w-2/3 '>
                <h1 onClick={goToCourse} className='hover:border-b-2 cursor-pointer'>Course</h1>
                <h1 className='cursor-pointer'>Batch</h1>
                <h1 className='cursor-pointer'>Faculties</h1>
                <h1 className='cursor-pointer'>About us</h1>
            </div>
            <div className='cursor-pointer'>
            <i class="ri-map-pin-2-line"></i>
            <i class="ri-phone-line"></i>
            </div>
        </div>
    </div>
  )
}

export default header