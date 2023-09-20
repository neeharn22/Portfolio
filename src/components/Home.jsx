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
                    <h2 className='ml-4'>{<Typewriter options={{ strings: ['Data Analyst.', 'Mech. Engineer.', 'Patent Engineer.', 'QA Engineer.', 'SQL Analyst.', 'Apex Legend.', 'Dog Leader.', 'Degenerate.'], autoStart: true, loop: true }} />}</h2>
                </div>
                <p className='text-[#8892b0] py-4 max-w-[700px] '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae obcaecati id, eos magni veniam natus beatae, necessitatibus exercitationem dolores dicta rerum mollitia tempore deserunt consequuntur hic nesciunt ab eveniet nam!</p>
                <div>
                    <Link to="work" smooth={true} duration={500}>
                        <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#050A30] hover:border-[#050A30]'>
                            View Work
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