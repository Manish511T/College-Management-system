import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const header = () => {
    const CourseNavigate = useNavigate();
    const HomeNavigate = useNavigate();
    const PlacementNavigate = useNavigate();
    const EventsNavigate = useNavigate();
    const AboutNavigate = useNavigate();
    const loginNavigate = useNavigate();

    const goToCourse = () => {
        CourseNavigate("/course");
    };
    const goToHome = () => {
        HomeNavigate("/");
    };
    const goToPlacement = () => {
        PlacementNavigate("/placement");
    }
    const goToEvents = () => {
        EventsNavigate("/events");
    }
    const goToAbout = () => {
        AboutNavigate("/about");
    }
    const goToLogin = ()=>{
        loginNavigate("/login");
    }

    return (
        <div>
            {/* Upper header */}
            <div className='bg-slate-300 h-20 w-screen flex justify-between px-20 items-center overflow-hidden'>
                <div>
                    <img className='w-20 h-20 cursor-pointer' src="https://globalinst.in/wp-content/uploads/2022/01/Scholarship-Test-Scanner-835x1024.png" alt="" />
                </div>
                <div className=' w-1/2 overflow-hidden  flex justify-center items-center'>
                    <img className='h-20 p-1' src="https://globalinst.in/wp-content/uploads/2022/01/logo-150x150.png" alt="" />
                </div>

                <div><button onClick={goToLogin} className='bg-white py-1 px-3 border-2 border-[#4e89ff] text-[#18397C] rounded-xl font-semibold font-mono hover:bg-[#18397C] hover:text-white'>Login</button></div>
            </div>

            {/* lower header */}
            <div className='bg-[#18397C] w-screen h-8 text-[#dee2e6] flex justify-evenly items-center'>
                <div className='cursor-pointer hover:border-b-2'>
                    <i onClick={goToHome} class="ri-home-4-line"></i>
                </div>
                <div className='flex justify-evenly w-2/3 '>
                    <h1 onClick={goToCourse} className='hover:border-b-2 cursor-pointer hover:text-white'>Course</h1>
                    <h1 onClick={goToPlacement} className='cursor-pointer hover:border-b-2 hover:text-white'>Placement</h1>
                    <h1 onClick={goToEvents} className='cursor-pointer hover:border-b-2 hover:text-white'>Events</h1>
                    <h1 onClick={goToAbout} className='cursor-pointer hover:border-b-2 hover:text-white'>About us</h1>
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