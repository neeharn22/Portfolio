import React from 'react'
import Jesse from '../assets/jesse.png'
import Mercedes from '../assets/mercedes.jpg'
import Cardinal from '../assets/cardinal.jpg'

const Work = () => {
    return (
        <div name='work' className='w-full md:h-screen text-gray-300 bg-[#055C9D]'>
            <div className='max-w-[1400px] mx-auto p-8 md:p-4 lg:p-4 xl:p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Work Experience</p>
                    <p className='py-6'>Hover over each column for more details about each role.</p>
                </div>

                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                    {/* Grid Item */}
                    <div style={{ backgroundImage: `url(${Jesse})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Test Column
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Grid Item */}
                    <div style={{ backgroundImage: `url(${Cardinal})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div overflow-auto'>

                        <div className='opacity-0 group-hover:opacity-100 text-center'>
                            <span className='text-md font-bold text-white tracking-wider'>
                                Patent Engineer/Analyst - Cardinal I.P.
                            </span>
                            <div className='pt-4 text-left text-sm h-full'>
                                <li className='cursor-auto hover:cursor-auto'>Scrutinized different inventions for patentability and industrial applicability from an engineering perspective to aid in patent litigation.</li>
                                <li className='cursor-auto hover:cursor-auto'>Drafted 200+ US and international patent application search reports for the United States Patent and Trademark Office</li>
                                <li className='cursor-auto hover:cursor-auto'> Executed prior art analysis in the technical fields of mechanical systems, robotics, manufacturing processes, renewable energy,
                                    aerospace, medical devices, food and beverage, agriculture, and household appliances.</li>
                            </div>
                        </div>
                    </div>
                    {/* Grid Item */}
                    <div style={{ backgroundImage: `url(${Jesse})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Test Column
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Grid Item */}
                    <div style={{ backgroundImage: `url(${Mercedes})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        <div className='opacity-0 group-hover:opacity-100 text-center'>
                            <span className='text-md font-bold text-white tracking-wider'>
                                Engineering Intern - Mercedes-Benz Vans, LLC
                            </span>
                            <div className='pt-4 text-left text-sm'>
                                <li className='cursor-auto hover:cursor-auto'>Improved production rate by tracking downtime in the body shop using excel macros and root cause analysis.</li>
                                <li className='cursor-auto hover:cursor-auto'>Created standardized weld spot documentation for ultrasonic and destructive testing of product variants by examining CAD drawings.</li>
                                <li className='cursor-auto hover:cursor-auto'>Led meetings to discuss and delegate tasks to appropriate parties to solve a running list of production line issues.</li>
                                <li className='cursor-auto hover:cursor-auto'>Relocated stud and weld spots to improve production robot accuracy through referencing CAD drawings.</li>
                            </div>
                        </div>
                    </div>
                    {/* Grid Item */}
                    <div style={{ backgroundImage: `url(${Jesse})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>

                        <div className='opacity-0 group-hover:opacity-100'>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                Test Column
                            </span>
                            <div className='pt-8 text-center'>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                                </a>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Work