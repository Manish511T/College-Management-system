import React from 'react'
import Header from '../Shared/header'
import Footer from '../Shared/footer'

const course = () => {

    return (
        <>
            <Header />
            <h1 className='text-center text-4xl m-5 font-mono font-semibold text-blue-950'>COURSES AT A GLANCE</h1>

            <div className='h-full w-screen bg-[#79a5fd] p-10 flex justify-evenly items-center gap-4 flex-wrap overflow-hidden'>
                {/* MBA */}

                <div className=' h-60 w-72 p-2 relative  shadow-md rounded-3xl overflow-hidden group cursor-pointer'>
                    {/* front */}
                    <div className='bg-white w-auto h-56 p-3 rounded-2xl flex justify-center items-center flex-col absolute inset-0 group-hover:opacity-0 transition-opacity duration-300'>
                        <div>
                            <div className='bg-[#18397C] rounded-full h-20 w-20 flex justify-center items-center'>
                                <h1 className='text-white text-2xl font-semibold'>MBA</h1>
                            </div>

                        </div>
                        <div className='mt-2 border-t-2 border-[#93a0cd] border-dotted w-full flex justify-between px-3'>
                            <div className='mt-2'>
                                <h1 className='text-[#172554]'>SEATS</h1>
                                <p>60</p>
                            </div>
                            <div className='mt-2'>
                                <h1 className='text-[#172554]'>DURATION</h1>
                                <p>2 Years</p>
                            </div>
                        </div>
                        <div className='mt-2 flex flex-col '>
                            <h1 className='text-center text-[#172554] font-semibold bg-slate-200 rounded-lg'>AFFILITION UNIVERSITY</h1>
                            <p className='text-center'>AKTU (Formerly UPTU), Lucknow (UP)</p>
                        </div>

                    </div>

                    {/* back */}
                    <div className='w-auto h-56 p-5 rounded-2xl flex flex-col   absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white'>
                        <h1 className='text-center text-2xl text-[#172554]font-semibold bg-slate-200 rounded-lg'>ELIGIBILITY</h1>
                        <p className='mt-2 text-sm'>Graduation with 50% for Gen. & OBC and 45% for SC/ST Candidates. Candidate must be appeared in UPCET entrance exam.</p>

                    </div>

                </div>
                {/* MCA */}
                <div className=' h-60 w-72 p-2 relative  shadow-md rounded-3xl overflow-hidden group cursor-pointer'>
                    {/* front */}
                    <div className='bg-white w-auto h-56 p-3 rounded-2xl flex justify-center items-center flex-col absolute inset-0 group-hover:opacity-0 transition-opacity duration-300'>
                        <div>
                            <div className='bg-[#18397C] rounded-full h-20 w-20 flex justify-center items-center'>
                                <h1 className='text-white text-2xl font-semibold'>MCA</h1>
                            </div>

                        </div>
                        <div className='mt-2 border-t-2 border-[#93a0cd] border-dotted w-full flex justify-between px-3'>
                            <div className='mt-2'>
                                <h1 className='text-[#172554]'>SEATS</h1>
                                <p>60</p>
                            </div>
                            <div className='mt-2'>
                                <h1 className='text-[#172554]'>DURATION</h1>
                                <p>2 Years</p>
                            </div>
                        </div>
                        <div className='mt-2 flex flex-col '>
                            <h1 className='text-center text-[#172554] font-semibold bg-slate-200 rounded-lg'>AFFILITION UNIVERSITY</h1>
                            <p className='text-center'>AKTU (Formerly UPTU), Lucknow (UP)</p>
                        </div>

                    </div>

                    {/* back */}
                    <div className='w-auto h-56 p-5 rounded-2xl flex flex-col   absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white'>
                        <h1 className='text-center text-2xl text-[#172554]font-semibold bg-slate-200 rounded-lg'>ELIGIBILITY</h1>
                        <p className='mt-2 text-sm'>Passed BCA/ Bachelor degree in Computer Science Engineering or equivalent Degree or passed B. Sc. /B. Com/ B. A. with Mathematics at 10+2 level or at graduation level with Minimum 50% marks (45% for SC/ST) in the aggregate. Candidate must be appeared in UPCET entrance exam.</p>

                    </div>

                </div>
                {/* MCA integrated */}
                <div className=' h-60 w-72 p-2 relative  shadow-md rounded-3xl overflow-hidden group cursor-pointer'>
                    {/* front */}
                    <div className='bg-white w-auto h-56 p-3 rounded-2xl flex justify-center items-center flex-col absolute inset-0 group-hover:opacity-0 transition-opacity duration-300'>
                        <div>
                            <div className='bg-[#18397C] rounded-full h-20 w-20 flex justify-center items-center'>
                                <h1 className='text-white text-2xl font-semibold'>MCA</h1>
                            </div>

                        </div>
                        <div className='mt-2 border-t-2 border-[#93a0cd] border-dotted w-full flex justify-between px-3'>
                            <div className='mt-2'>
                                <h1 className='text-[#172554]'>SEATS</h1>
                                <p>60</p>
                            </div>
                            <div className='mt-2'>
                                <h1 className='text-[#172554]'>DURATION</h1>
                                <p>5 Years</p>
                            </div>
                        </div>
                        <div className='mt-2 flex flex-col '>
                            <h1 className='text-center text-[#172554] font-semibold bg-slate-200 rounded-lg'>AFFILITION UNIVERSITY</h1>
                            <p className='text-center'>AKTU (Formerly UPTU), Lucknow (UP)</p>
                        </div>

                    </div>

                    {/* back */}
                    <div className='w-auto h-56 p-5 rounded-2xl flex flex-col   absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white'>
                        <h1 className='text-center text-2xl text-[#172554]font-semibold bg-slate-200 rounded-lg'>ELIGIBILITY</h1>
                        <p className='mt-2 text-sm'>Passed BCA/ Bachelor degree in Computer Science Engineering or equivalent Degree or passed B. Sc. /B. Com/ B. A. with Mathematics at 10+2 level or at graduation level with Minimum 50% marks (45% for SC/ST) in the aggregate. Candidate must be appeared in UPCET entrance exam.</p>

                    </div>

                </div>
                <div className=' h-60 w-72 p-2 relative  shadow-md rounded-3xl overflow-hidden group cursor-pointer'>
                    {/* front */}
                    <div className='bg-white w-auto h-56 p-3 rounded-2xl flex justify-center items-center flex-col absolute inset-0 group-hover:opacity-0 transition-opacity duration-300'>
                        <div>
                            <div className='bg-[#18397C] rounded-full h-20 w-20 flex justify-center items-center'>
                                <h1 className='text-white text-2xl font-semibold'>BBA</h1>
                            </div>

                        </div>
                        <div className='mt-2 border-t-2 border-[#93a0cd] border-dotted w-full flex justify-between px-3'>
                            <div className='mt-2'>
                                <h1 className='text-[#172554]'>SEATS</h1>
                                <p>180</p>
                            </div>
                            <div className='mt-2'>
                                <h1 className='text-[#172554]'>DURATION</h1>
                                <p>3 Years</p>
                            </div>
                        </div>
                        <div className='mt-2 flex flex-col '>
                            <h1 className='text-center text-[#172554] font-semibold bg-slate-200 rounded-lg'>AFFILITION UNIVERSITY</h1>
                            <p className='text-center'>CCS University Meerut</p>
                        </div>

                    </div>

                    {/* back */}
                    <div className='w-auto h-56 p-5 rounded-2xl flex flex-col   absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white'>
                        <h1 className='text-center text-2xl text-[#172554]font-semibold bg-slate-200 rounded-lg'>ELIGIBILITY</h1>
                        <p className='mt-2 text-sm'>10+2 with 45% for Gen. & OBC and 40% for SC/ST Candidates.</p>

                    </div>

                </div>
                <div className=' h-60 w-72 p-2 relative  shadow-md rounded-3xl overflow-hidden group cursor-pointer'>
                    {/* front */}
                    <div className='bg-white w-auto h-56 p-3 rounded-2xl flex justify-center items-center flex-col absolute inset-0 group-hover:opacity-0 transition-opacity duration-300'>
                        <div>
                            <div className='bg-[#18397C] rounded-full h-20 w-20 flex justify-center items-center'>
                                <h1 className='text-white text-2xl font-semibold'>BCA</h1>
                            </div>

                        </div>
                        <div className='mt-2 border-t-2 border-[#93a0cd] border-dotted w-full flex justify-between px-3'>
                            <div className='mt-2'>
                                <h1 className='text-[#172554]'>SEATS</h1>
                                <p>180</p>
                            </div>
                            <div className='mt-2'>
                                <h1 className='text-[#172554]'>DURATION</h1>
                                <p>3 Years</p>
                            </div>
                        </div>
                        <div className='mt-2 flex flex-col '>
                            <h1 className='text-center text-[#172554] font-semibold bg-slate-200 rounded-lg'>AFFILITION UNIVERSITY</h1>
                            <p className='text-center'>CCS University Meerut</p>
                        </div>

                    </div>

                    {/* back */}
                    <div className='w-auto h-56 p-5 rounded-2xl flex flex-col   absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white'>
                        <h1 className='text-center text-2xl text-[#172554]font-semibold bg-slate-200 rounded-lg'>ELIGIBILITY</h1>
                        <p className='mt-2 text-sm'>10+2 with 45% for Gen. & OBC and 40% percentage for SC/ST Candidates. The candidate must have studied mathematics at 10th level for BCA admission.</p>

                    </div>

                </div>
                <div className=' h-60 w-72 p-2 relative  shadow-md rounded-3xl overflow-hidden group cursor-pointer'>
                    {/* front */}
                    <div className='bg-white w-auto h-56 p-3 rounded-2xl flex justify-center items-center flex-col absolute inset-0 group-hover:opacity-0 transition-opacity duration-300'>
                        <div>
                            <div className='bg-[#18397C] rounded-full h-20 w-20 flex justify-center items-center'>
                                <h1 className='text-white text-2xl font-semibold'>B.Com.</h1>
                            </div>

                        </div>
                        <div className='mt-2 border-t-2 border-[#93a0cd] border-dotted w-full flex justify-between px-3'>
                            <div className='mt-2'>
                                <h1 className='text-[#172554]'>SEATS</h1>
                                <p>60</p>
                            </div>
                            <div className='mt-2'>
                                <h1 className='text-[#172554]'>DURATION</h1>
                                <p>3 Years</p>
                            </div>
                        </div>
                        <div className='mt-2 flex flex-col '>
                            <h1 className='text-center text-[#172554] font-semibold bg-slate-200 rounded-lg'>AFFILITION UNIVERSITY</h1>
                            <p className='text-center'>CCS University Meerut</p>
                        </div>

                    </div>

                    {/* back */}
                    <div className='w-auto h-56 p-5 rounded-2xl flex flex-col   absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white'>
                        <h1 className='text-center text-2xl text-[#172554]font-semibold bg-slate-200 rounded-lg'>ELIGIBILITY</h1>
                        <p className='mt-2 text-sm'>10+2 Pass for all category..</p>

                    </div>

                </div>
                <div className=' h-60 w-72 p-2 relative  shadow-md rounded-3xl overflow-hidden group cursor-pointer'>
                    {/* front */}
                    <div className='bg-white w-auto h-56 p-3 rounded-2xl flex justify-center items-center flex-col absolute inset-0 group-hover:opacity-0 transition-opacity duration-300'>
                        <div>
                            <div className='bg-[#18397C] rounded-full h-20 w-20 flex justify-center items-center'>
                                <h1 className='text-white text-2xl font-semibold'>BA</h1>
                            </div>

                        </div>
                        <div className='mt-2 border-t-2 border-[#93a0cd] border-dotted w-full flex justify-between px-3'>
                            <div className='mt-2'>
                                <h1 className='text-[#172554]'>SEATS</h1>
                                <p>140</p>
                            </div>
                            <div className='mt-2'>
                                <h1 className='text-[#172554]'>DURATION</h1>
                                <p>3 Years</p>
                            </div>
                        </div>
                        <div className='mt-2 flex flex-col '>
                            <h1 className='text-center text-[#172554] font-semibold bg-slate-200 rounded-lg'>AFFILITION UNIVERSITY</h1>
                            <p className='text-center'>CCS University Meerut</p>
                        </div>

                    </div>

                    {/* back */}
                    <div className='w-auto h-56 p-5 rounded-2xl flex flex-col   absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white'>
                        <h1 className='text-center text-2xl text-[#172554]font-semibold bg-slate-200 rounded-lg'>ELIGIBILITY</h1>
                        <p className='mt-2 text-sm'>10+2 Pass for all category..</p>

                    </div>

                </div>
                <div className=' h-60 w-72 p-2 relative  shadow-md rounded-3xl overflow-hidden group cursor-pointer'>
                    {/* front */}
                    <div className='bg-white w-auto h-56 p-3 rounded-2xl flex justify-center items-center flex-col absolute inset-0 group-hover:opacity-0 transition-opacity duration-300'>
                        <div>
                            <div className='bg-[#18397C] rounded-full h-20 w-20 flex justify-center items-center'>
                                <h1 className='text-white text-2xl font-semibold'>B.Ed.</h1>
                            </div>

                        </div>
                        <div className='mt-2 border-t-2 border-[#93a0cd] border-dotted w-full flex justify-between px-3'>
                            <div className='mt-2'>
                                <h1 className='text-[#172554]'>SEATS</h1>
                                <p>100</p>
                            </div>
                            <div className='mt-2'>
                                <h1 className='text-[#172554]'>DURATION</h1>
                                <p>2 Years</p>
                            </div>
                        </div>
                        <div className='mt-2 flex flex-col '>
                            <h1 className='text-center text-[#172554] font-semibold bg-slate-200 rounded-lg'>AFFILITION UNIVERSITY</h1>
                            <p className='text-center'>CCS University Meerut & Approved by NCTE</p>
                        </div>

                    </div>

                    {/* back */}
                    <div className='w-auto h-56 p-5 rounded-2xl flex flex-col   absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white'>
                        <h1 className='text-center text-2xl text-[#172554]font-semibold bg-slate-200 rounded-lg'>ELIGIBILITY</h1>
                        <p className='mt-2 text-sm'>Graduation with 50% for Gen. & OBC and 45% for SC/ST Candidates. Candidate must be appeared in UPBED entrance exam.</p>

                    </div>

                </div>

            </div>

            <Footer/>
        </>
    )
}

export default course