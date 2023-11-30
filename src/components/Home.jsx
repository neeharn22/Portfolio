import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll';
import Typewriter from 'typewriter-effect'

const Home = () => {
    return (
        <div name="home" className='w-full h-screen bg-[#000C66]'>

            {/*Container */}
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-[#a5a5a5]'>Hi, my name is</p>
                <h1 className='text-4xl sm:text-7xl font-bold text-[#ffffff]'>Neehar Namjoshi</h1>
                <div className='text-4xl sm:text-7xl font-bold text-[#8892b0] flex'>
                    <h2>I am a </h2>
                    <h2 className='ml-4 border-b-4 border-pink-600'>{<Typewriter options={{ strings: ['Mech. Engineer.', 'Business Analyst.', 'Patent Engineer.', 'QA Engineer.', 'Project Manager.', 'Web Developer.'], autoStart: true, loop: true }} />}</h2>
                </div>
                <p className='text-[#8892b0] py-4 max-w-[700px] '></p>
                <div>
                    <Link to="about" smooth={true} duration={500}>
                        <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#050A30] hover:border-pink-600'>
                            About me
                            <span className='group-hover:rotate-90 duration-300'>
                                <HiArrowNarrowRight className='ml-3' />
                            </span>
                        </button>
                    </Link>
                </div>
            </div>

        </div >
    )
}

export default Home