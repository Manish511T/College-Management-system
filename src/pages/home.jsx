import React from 'react'
import Header from '../components/Shared/header'
import AffiliationCard from '../components/Shared/affiliationCard'
import CourseLabel from '../components/Shared/courseLabel'
import Carosusel from '../components/Shared/carosusel'
import BrandLabel from '../components/Shared/brandLabel'
import Footer from '../components/Shared/footer'


const home = () => {
  
  return (
    <>
      <Header />

      <div className='bg-slate-500 h-80  w-screen overflow-hidden relative '>
        <img className='h-80 w-screen opacity-50 ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFtsBg_SpNF_VwzVZCNzlGUsT-8PJxOZD7kg&s" alt="" />
        <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  text-white'>
          <div className='flex flex-col items-center mt-5'>
            <h1 className='text-5xl font-bold'>WELCOME  TO</h1>
            <h1 className='text-2xl text-center  font-semibold text-[#ffffff]'>GLOBAL INSTITUTES OF INFORMATION AND TECHNOLOGY </h1>
            <p className='font-serif mt-2'>Build Skills From Expert Teacher</p>
            <div className='flex justify-around w-screen mt-16 mb-0'>
              <button className='bg-green-700 p-2 rounded-lg transform hover:scale-110 transition-transform duration-300  hover:shadow-lg'>Admissions open 2024</button>
              <button className='bg-[#18397C] p-2 rounded-lg transform hover:scale-110 transition-transform duration-300'>Enquiry Form</button>
            </div>
          </div>
        </div>
      </div>

      <AffiliationCard />
      <CourseLabel />

      <div className='h-100 w-screen  p-5'>
        <div className='h-full border-[#444] border-t-2 border-dashed flex gap-10 p-5'>
          <div id="box1" className='border-r-2 border-black flex justify-center items-center'>
            <h1 className='text-3xl font-bold text-black mr-10'>why choose global educational institutes ?</h1>
          </div>

          <div id="box2">
            <p className='text font-serif text-black '>Global Educational Institutes are dynamic growth oriented institutes,established by Global Education Trust,Delhi in 2002 to conduct educational programs to equip aspiring students for a career in knowledge industries. The programs also position them to compete in today’s demanding economy of an inter-connected world. Global has maintained its commitment to provide overall growth of students by introducing innovative teaching methods and training them in soft skills.

              Global Educational Institutes offer MBA, MCA, MCA(Lateral Entry), BBA, BCA, B.Ed, BA and B.Com. programme.It has been approved by AICTE, Ministry of HRD, Goverment of India and affiliated to Dr. A.P.J. Abdul Kalam Technical University, Lucknow and C.C.S. University Meerut.

              Global Educational Institutes are located in the most strategic location of Delhi/NCR-one of the most promising and secure city, Greater Noida. It has close proximity to the world of business and industries. The institute is located in Knowledge Park-I, an area earmarked by Greater Noida Industrial Development Authority for Educational Institutes. The fresh graduates have good opportunities for their career due to the growing rate of SEZs and industries in the area.</p>
          </div>
        </div>
      </div>
      <Carosusel/>
      <BrandLabel/>
      <Footer/>
    </>
  )
}

export default home