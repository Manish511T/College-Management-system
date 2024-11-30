import React from 'react'
import Header from '../Shared/header'
import BrandLabel from '../Shared/brandLabel'
import Footer from '../Shared/footer'

const placement = () => {

    return (
        <>
            <Header />
            <div className=' relative  w-full h-96 cursor-pointer '>
                <img className='w-full h-full  rounded-lg ' src="https://globalinst.in/wp-content/uploads/2022/02/placementteambanner.jpg" alt="img" />
                <h1 className='absolute inset-0 flex items-center justify-center text-white text-7xl font-bold bg-black bg-opacity-50'>PLACEMENT TEAM</h1>
            </div>
            <div className='h-full w-screen  p-10 flex justify-evenly flex-wrap gap-5'>
                <div className=' h-60 w-72 p-2 bg-[#79a5fd] shadow-md rounded-3xl'>
                    <div className='bg-[rgb(203,220,255)] w-auto h- p-3 rounded-2xl flex justify-center items-center flex-col shadow-sky-950 shadow-lg '>
                        <div className='rounded-full'>
                            <img className='h-32 w-32 rounded-full  shadow-sky-950 shadow-lg' src="https://globalinst.in/wp-content/uploads/2022/02/nikhileshsharma-1.jpg" alt="" />
                        </div>
                    </div>
                    <div className='mt-2 p-2 bg-white rounded-xl shadow-sky-950 shadow-lg overflow-hidden group cursor-pointer'>
                        <div>
                            <h1 className='text-center text-[#1563ff] font-bold'>Dr.Nikhilesh Chandra Sharma</h1>
                            <h2 className='text-center text-sm'>(Head Training & Placement)</h2>
                        </div>
                    </div>
                </div>
                <div className=' h-60 w-72 p-2 bg-[#79a5fd] shadow-md rounded-3xl'>
                    <div className='bg-[rgb(203,220,255)] w-auto h- p-3 rounded-2xl flex justify-center items-center flex-col shadow-sky-950 shadow-lg '>
                        <div className='rounded-full'>
                            <img className='h-32 w-32 rounded-full  shadow-sky-950 shadow-lg object-cover object-top' src="https://globalinst.in/wp-content/uploads/2023/12/kamini-178x300.jpeg" alt="" />
                        </div>
                    </div>
                    <div className='mt-2 p-2 bg-white rounded-xl shadow-sky-950 shadow-lg overflow-hidden group cursor-pointer'>
                        <div>
                            <h1 className='text-center text-[#1563ff] font-bold'>Ms. Kamini Singh</h1>
                            <h2 className='text-center text-sm'>(Member Training & Placement)</h2>
                        </div>
                    </div>
                </div>
                <div className=' h-60 w-72 p-2 bg-[#79a5fd] shadow-md rounded-3xl'>
                    <div className='bg-[rgb(203,220,255)] w-auto h- p-3 rounded-2xl flex justify-center items-center flex-col shadow-sky-950 shadow-lg '>
                        <div className='rounded-full'>
                            <img className='h-32 w-32 rounded-full  shadow-sky-950 shadow-lg' src="https://globalinst.in/wp-content/uploads/2022/04/Mr.-Philip.jpeg" alt="" />
                        </div>
                    </div>
                    <div className='mt-2 p-2 bg-white rounded-xl shadow-sky-950 shadow-lg overflow-hidden group cursor-pointer'>
                        <div>
                            <h1 className='text-center text-[#1563ff] font-bold'>Mr. Philip Joseph</h1>
                            <h2 className='text-center text-sm'>(Coordinator Training & Placement)</h2>
                        </div>
                    </div>
                </div>

            </div>

            <div className='m-2 p-5 border-t-2 border-dashed border-black'>
                <p className='text-2xl'>The Training and Placement Cell of Global handles campus placement of the all the students of all steams. The Cell provides complete support to the visiting companies at every stage of placement process. Arrangements for Pre-placement talks, written tests, interviews and group discussions are made as per the requirement of the visiting companies. The Training and Placement cell is headed by Dr. N.C. Sharma and ably supported by Ms. Seema Singh and Mr. Philip Joseph.  We are proud to share that our eligible students have achieved more than thousands of offers as on date. Of the 151 companies which have visited us, 20 companies have offered CTC in excess of Rs 5 lacs per annum.</p>
            </div>
            <BrandLabel/>
            <Footer/>
        </>
    )
}

export default placement