import React from 'react'

const footer = () => {
    return (
        <div>
            <div className='w-screen bg-[#000916] px-5 overflow-hidden text-white '>
                <div id="innerbox" className='w-full h-40 p-2 flex justify-evenly items-center border-b'>
                    <div className='w-80'>
                        <img src="https://globalinst.in/wp-content/uploads/2022/01/globalnew-1024x335.png" alt="" />
                    </div>
                    <div>
                        <h1 className='text-2xl  border-b border-dashed border-blue-900'>SOCIAL HANDLE</h1>
                        <div className='flex justify-start items-center gap-5 m-2 text-2xl'>
                            <a href="https://www.facebook.com/globalinst.connect"><i class="ri-facebook-circle-fill"></i></a>
                            <a href="https://www.instagram.com/globalinst.connect/"><i class="ri-instagram-line"></i></a>
                            <a href="https://www.linkedin.com/company/globalinst-connect"><i class="ri-linkedin-box-fill"></i></a>
                        </div>
                    </div>

                </div>
                <div className='flex justify-between gap-5'>
                    <div className='mt-5 flex justify-evenly text-sm'>

                        <div className='flex flex-col gap-3 p-2'>
                            <h1 className='font-semibold border-b border-dashed border-blue-900  '>ABOUT US</h1>
                            <div className='flex flex-col text-xs  gap-2'>
                                <a href="">GLOBAL INSTITUTE & OVERVIEW</a>
                                <a href="">MISSION VISION & QUALITY POLICY</a>
                                <a href="">ADVISORY BOARD</a>
                                <a href="">GOVERNING BODY</a>
                            </div>
                        </div>
                        <div className='flex flex-col gap-3 p-2'>
                            <h1 className='font-semibold border-b border-dashed border-blue-900  '>INFRASTRUCTURE
                            </h1>
                            <div className='flex flex-col text-xs gap-2'>
                                <a href="">LECTURE HALL</a>
                                <a href="">LIBRARY</a>
                                <a href="">LABORATORY</a>
                                <a href="">CAFETERIA</a>
                                <a href="">HOSTEL</a>
                            </div>
                        </div>
                        <div className='flex flex-col gap-1 p-2'>
                            <h1 className='font-semibold border-b border-dashed border-blue-900  '>EVENTS</h1>
                            <div className='flex flex-col text-xs gap-2'>
                                <a href="">SEMINARS</a>
                                <a href="">WORKSHOPS</a>
                                <a href="">INDUSTRIAL VISIT</a>
                                <a href="">CULTURAL FEST</a>
                                <a href="">SPORTS</a>
                            </div>
                        </div>
                        <div className='flex flex-col gap-3 p-2'>
                            <h1 className='font-semibold border-b border-dashed border-blue-900  '>IMPORTANT LINKS</h1>
                            <div className='flex flex-col text-xs gap-2'>
                                <a href="">COURSES</a>
                                <a href="">ADMISSIONS</a>
                                <a href="">RESEARCH & JOURANALS</a>
                                <a href="">PUBLICATIONS</a>
                                <a href="">CONTACT</a>
                            </div>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <div>
                            <h1>CONTACT US</h1>
                            <p className='text-wrap'>Global Educational Institutes 32-A Knowledge Park-1 Greater Noida Gautam Buddha Nagar UP-201308</p>

                        </div>
                        <br />
                        <div>
                            <h1>PHONE:</h1>
                            <p className='text-wrap'>Phone:
                                Toll Free No: 18003090801,            +91-9350592987,                            +91-9350592988,
                                +91-9350592989</p>
                            <h1>EMAIL :</h1>
                            <p>admissiongiit@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-[#001b42] text-white text-center'>
                <p className='opacity-50'>2023-24 Global Educational Institute. All Right Reserved</p>
            </div>
        </div>
    )
}

export default footer