import React from 'react'
import Placeholder from '../assets/jesse.png'
import UW from '../assets/University-of-Wisconsin-Logo-2001.png'
import UConn from '../assets/uconn-logo-png-transparent.png'
import SQL from '../assets/sql.png'
import Python from '../assets/python.png'
import AWS from '../assets/aws.png'
import Matlab from '../assets/matlab.png'
import PySpark from '../assets/pyspark.png'
import Requirements from '../assets/requirements.png'
import R from '../assets/R.png'
import Solidworks from '../assets/solidworks.png'
import Tableau from '../assets/tableau.png'
import PowerBI from '../assets/powerbi.png'
import Excel from '../assets/excel.png'
import DataVisualization from '../assets/datavisualization.png'

const Skills = () => {
    return (
        <div name='skills' className='w-full sm:max-h-[1600px] md:h-[1000px] bg-[#003060] text-gray-300'>
            {/* Container */}
            <div className='max-w-[1400px] mx-auto p-4 flex flex-col justify-center w-full md:h-full sm:max-h-[1600px] overflow-auto'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Highlighted Skills & Qualifications</p>
                </div>
                <div className='w-full grid grid-cols-2 sm:grid-cols-6 gap-4 text-center py-8'>
                    <div className='pt-4 bg-gray-800 shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto h-[80px]' src={Requirements} alt='Requirements' />
                        <p className='my-4'>Requirements</p>
                    </div>
                    <div className='pt-4 bg-gray-800 shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto h-[80px]' src={DataVisualization} alt='Data Visualization' />
                        <p className='my-4'>Data Visualization</p>
                    </div>
                    <div className='pt-4 bg-gray-800 shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto h-[80px]' src={SQL} alt='SQL' />
                        <p className='my-4'>SQL</p>
                    </div>
                    <div className='pt-4 bg-gray-800 shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto h-[80px]' src={Python} alt='Python' />
                        <p className='my-4'>Python</p>
                    </div>
                    <div className='pt-4 bg-gray-800 shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto h-[80px]' src={R} alt='R' />
                        <p className='my-4'>R</p>
                    </div>
                    <div className='pt-4 bg-gray-800 shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto h-[80px]' src={Solidworks} alt='SolidWorks' />
                        <p className='my-4'>SolidWorks</p>
                    </div>
                    <div className='pt-4 bg-gray-800 shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto h-[80px]' src={AWS} alt='AWS' />
                        <p className='my-4'>AWS</p>
                    </div>
                    <div className='pt-4 bg-gray-800 shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto h-[80px]' src={Matlab} alt='MATLAB' />
                        <p className='my-4'>MATLAB</p>
                    </div>
                    <div className='pt-4 bg-gray-800 shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto' src={PowerBI} alt='PowerBI' />
                        <p className='my-4'>PowerBI</p>
                    </div>
                    <div className='pt-4 bg-gray-800 shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto h-[80px]' src={Excel} alt='Advanced Excel' />
                        <p className='my-4'>Advanced Excel</p>
                    </div>
                    <div className='pt-4 bg-gray-800 shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto h-[80px]' src={Tableau} alt='Tableau' />
                        <p className='my-4'>Tableau</p>
                    </div>
                    <div className='pt-4 bg-gray-800 shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img className='w-20 mx-auto h-[80px]' src={PySpark} alt='PySpark' />
                        <p className='my-4'>Pyspark</p>
                    </div>
                </div>

                <div>
                    <li className='mb-4'><strong>Bachelor of Science in Mechanical Engineering</strong> - University of Wisconsin-Madison (3.6/4.0 GPA)</li>
                    <li className='mb-4'><strong>Master of Science in Business Analytics and Project Management</strong> - University of Connecticut (4.0/4.0 GPA)</li>
                    <div class="flex justify-center p-4">
                        <img src={UW} class="w-1/2 mr-2 md:mr-12 lg:mr-16 xl:mr-24 max-w-[420px] max-h-[250px]" />
                        <img src={UConn} class="w-1/2 max-w-[250px] max-h-[250px]" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Skills