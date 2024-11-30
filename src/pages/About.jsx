import React from 'react'
import Header from '../components/Shared/header'
import Footer from '../components/Shared/footer'

const About = () => {

    return (
        <>
            <Header />
            <div className=' relative  w-full h-96 cursor-pointer '>
                <img className='w-full h-full  rounded-lg ' src="https://globalinst.in/wp-content/uploads/2022/02/aboutbanner.jpg" alt="img" />
                <h1 className='absolute inset-0 flex items-center justify-center text-white text-7xl font-bold bg-black bg-opacity-50'>ABOUT US</h1>
            </div>
            <div className='p-20'>
                <div className='flex flex-col gap-5 justify-center items-center'>
                    <h1 className='text-lg text-center'>Due to globalization India is undergoing an economic revolution. It has created an urgent need for a large number of professionally trained experts in various fields. Information technology holds the key to unleash and realize the full potential of young creative Indian minds to make its identity in the world.
                    </h1>
                    <br />
                    <h1 className='text-lg text-center '> Education at Global Educational Institutes is focused on equipping students with technical and interpersonal skills which are vital to compete and succeed in today’s connected world. It provides aspirants a strong base to build their careers in leading organizations and exercise their choice of taking advantage of exciting opportunities that exist for aspiring entrepreneurs. It is a perfect launching pad to soar high and fulfill ones dreams.</h1>

                    <img className='inline-block ' src="https://globalinst.in/wp-content/uploads/2022/02/gyan.jpg" alt="" />
                </div>
            </div>
            <Footer/>

        </>
    )
}

export default About