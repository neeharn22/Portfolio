import React from 'react'
import Mercedes from '../assets/mercedes.jpg'
import Cardinal from '../assets/cardinal.jpg'
import CITI from '../assets/CITI.png'
import Flex from '../assets/azumo.png'

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
                    <div style={{ backgroundImage: `url(${CITI})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div overflow-auto h-[200px]'>

                        <div className='opacity-0 group-hover:opacity-100 text-center h-[200px] -mt-6'>
                            <span className='text-md font-bold text-white tracking-wider'>
                                Business Specialist/Analyst - Connecticut Information Technology Institute
                            </span>
                            <div className='pt-2 text-left text-sm h-full'>
                                <li className='cursor-auto hover:cursor-auto'>Conducted extensive data cleaning and wrangling for a database containing 5000+ records of registrar of voters (ROV), meticulously
                                    addressing missing values and ensuring data integrity, resulting in improved accuracy and reliability of voter information.</li>
                                <li className='cursor-auto hover:cursor-auto'>Queried a comprehensive data consolidation effort by extracting, cleansing, and wrangling information from more than 10 disparate
                                    sources, seamlessly integrating data to provide a consolidated view of active and inactive registrar of voters along with their completed
                                    sections and respective completion dates, all presented in a user-friendly format for client requests.</li>
                                <li className='cursor-auto hover:cursor-auto'>Identified and rectified discrepancies in payments for ROV courses, successfully recovering over $10,000 in missing payments,
                                    showcasing strong analytical skills and a commitment to financial accuracy and accountability.</li>
                            </div>
                        </div>
                    </div>
                    {/* Grid Item */}
                    <div style={{ backgroundImage: `url(${Cardinal})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div overflow-auto h-[200px]'>

                        <div className='opacity-0 group-hover:opacity-100 text-center h-[200px] -mt-6'>
                            <span className='text-md font-bold text-white tracking-wider'>
                                Patent Engineer/Analyst - Cardinal I.P.
                            </span>
                            <div className='pt-2 text-left text-sm h-full'>
                                <li className='cursor-auto hover:cursor-auto'>Scrutinized different inventions for patentability and industrial applicability from an engineering perspective to aid in patent litigation.</li>
                                <li className='cursor-auto hover:cursor-auto'>Drafted 200+ US and international patent application search reports for the United States Patent and Trademark Office</li>
                                <li className='cursor-auto hover:cursor-auto'> Executed prior art analysis in the technical fields of mechanical systems, robotics, manufacturing processes, renewable energy,
                                    aerospace, medical devices, food and beverage, agriculture, and household appliances.</li>
                            </div>
                        </div>
                    </div>
                    {/* Grid Item */}
                    <div style={{ backgroundImage: `url(${Flex})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div overflow-auto h-[200px]'>

                        <div className='opacity-0 group-hover:opacity-100 text-center h-[200px] -mt-6'>
                            <span className='text-md font-bold text-white tracking-wider'>
                                Mechanical Engineering Intern - FLEx Lighting LLC
                            </span>
                            <div className='pt-2 text-left text-sm h-full'>
                                <li className='cursor-auto hover:cursor-auto'>Designed and 3D printed a fixture to install an in-house vision system and CMM and a jig to shorten product assembly rolling process.</li>
                                <li className='cursor-auto hover:cursor-auto'>Carried out root cause analysis of defects for the front light panel variance using vision system.</li>
                                <li className='cursor-auto hover:cursor-auto'>Wired pneumatic hoses and installed pneumatic clamps to assemble the lamination machine.</li>
                                <li className='cursor-auto hover:cursor-auto'>Implemented wireless 3D printing capabilities on 3D Printer using Raspberry Pi and Linux software.</li>
                            </div>
                        </div>
                    </div>
                    {/* Grid Item */}
                    <div style={{ backgroundImage: `url(${Mercedes})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div overflow-auto h-[200px]'>

                        <div className='opacity-0 group-hover:opacity-100 text-center h-[200px] -mt-6'>
                            <span className='text-md font-bold text-white tracking-wider'>
                                Engineering Intern - Mercedes-Benz Vans, LLC
                            </span>
                            <div className='pt-2 text-left text-sm h-full'>
                                <li className='cursor-auto hover:cursor-auto'>Improved production rate by tracking downtime in the body shop using excel macros and root cause analysis.</li>
                                <li className='cursor-auto hover:cursor-auto'>Created standardized weld spot documentation for ultrasonic and destructive testing of product variants by examining CAD drawings.</li>
                                <li className='cursor-auto hover:cursor-auto'>Led meetings to discuss and delegate tasks to appropriate parties to solve a running list of production line issues.</li>
                                <li className='cursor-auto hover:cursor-auto'>Relocated stud and weld spots to improve production robot accuracy through referencing CAD drawings.</li>
                            </div>
                        </div>
                    </div>
                    {/* Grid Item */}
                    <div style={{ backgroundImage: `url(${Flex})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div overflow-auto h-[200px]'>

                        <div className='opacity-0 group-hover:opacity-100 text-center h-[200px] -mt-6'>
                            <span className='text-md font-bold text-white tracking-wider'>
                                Quality Engineering Intern - FLEx Lighting LLC
                            </span>
                            <div className='pt-2 text-left text-sm h-full'>
                                <li className='cursor-auto hover:cursor-auto'>Optimized cell layout and manufacturing processes of the 1.26” Front Light Panels (FLP) through detailed time study.</li>
                                <li className='cursor-auto hover:cursor-auto'>Conducted Quality Control and compiled a report of over 2000 units of rejected FLP.</li>
                                <li className='cursor-auto hover:cursor-auto'>Designed and fabricated brackets for mounting LED screens to investigate the brightness from various viewing angles.</li>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Work