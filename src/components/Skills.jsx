import React from 'react'
import Placeholder from '../assets/jesse.png'

const Skills = () => {
    return (
        <div name='skills' className='w-full h-screen bg-[#003060] text-gray-300'>
            {/* Container */}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full overflow-hidden'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills & Qualifications</p>
                    <p className='py-4'>These are the technologies and tools I am familiar with.</p>
                </div>
                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Placeholder} alt='Jesse' />
                        <p className='my-4'>Jesse</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Placeholder} alt='Team Fight Tactics' />
                        <p className='my-4'>Team Fight Tactics</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Placeholder} alt='Leadership' />
                        <p className='my-4'>Leadership</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Placeholder} alt='Flaming' />
                        <p className='my-4'>Flaming</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Placeholder} alt='Blaming' />
                        <p className='my-4'>Blaming</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Placeholder} alt='CSGO' />
                        <p className='my-4'>CSGO</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Placeholder} alt='SQL' />
                        <p className='my-4'>SQL</p>
                    </div>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={Placeholder} alt='AWS' />
                        <p className='my-4'>AWS</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Skills