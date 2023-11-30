import React from 'react'
import Placeholder from '../assets/jesse.png'
import UWM from '../assets/University-of-Wisconsin-Logo.png'
import UConn from '../assets/University-of-Connecticut-Logo.png'
import { motion } from 'framer-motion'

const Skills = () => {
    return (
        <div name='skills' className='w-full h-screen bg-[#003060] text-gray-300'>
            {/* Container */}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.25 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 }
                    }}
                >

                    <div>
                        <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills & Qualifications</p>
                        <p className='py-4'>The skills and qualifications I am equipped with - ready to be applied to suit each requirement.</p>
                    </div>

                </motion.div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: { opacity: 1, x: 0 }
                        }}
                    >
                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                            <img className='w-20 mx-auto' src={Placeholder} alt='Jesse' />
                            <p className='my-4'>Jesse</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 1 }}
                        variants={{
                            hidden: { opacity: 0, x: -100 },
                            visible: { opacity: 1, x: 0 }
                        }}
                    >
                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                            <img className='w-20 mx-auto' src={Placeholder} alt='Jesse' />
                            <p className='my-4'>Jesse</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 1.25 }}
                        variants={{
                            hidden: { opacity: 0, x: -150 },
                            visible: { opacity: 1, x: 0 }
                        }}
                    >
                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                            <img className='w-20 mx-auto' src={Placeholder} alt='Jesse' />
                            <p className='my-4'>Jesse</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 1.5 }}
                        variants={{
                            hidden: { opacity: 0, x: -200 },
                            visible: { opacity: 1, x: 0 }
                        }}
                    >
                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                            <img className='w-20 mx-auto' src={Placeholder} alt='Jesse' />
                            <p className='my-4'>Jesse</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 1 }}
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: { opacity: 1, x: 0 }
                        }}
                    >
                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                            <img className='w-20 mx-auto' src={Placeholder} alt='Jesse' />
                            <p className='my-4'>Jesse</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 1.25 }}
                        variants={{
                            hidden: { opacity: 0, x: -100 },
                            visible: { opacity: 1, x: 0 }
                        }}
                    >
                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                            <img className='w-20 mx-auto' src={Placeholder} alt='Jesse' />
                            <p className='my-4'>Jesse</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 1.5 }}
                        variants={{
                            hidden: { opacity: 0, x: -150 },
                            visible: { opacity: 1, x: 0 }
                        }}
                    >
                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                            <img className='w-20 mx-auto' src={Placeholder} alt='Jesse' />
                            <p className='my-4'>Jesse</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 1.75 }}
                        variants={{
                            hidden: { opacity: 0, x: -200 },
                            visible: { opacity: 1, x: 0 }
                        }}
                    >
                        <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                            <img className='w-20 mx-auto' src={Placeholder} alt='Jesse' />
                            <p className='my-4'>Jesse</p>
                        </div>
                    </motion.div>

                </div>

                <div className=''>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 1 }}
                        variants={{
                            hidden: { opacity: 0, x: -200 },
                            visible: { opacity: 1, x: 0 }
                        }}
                    >
                        <ul className='mb-5 mt-5'>
                            <b>Master of Science in Business Analytics and Project Management</b> - University of Connecticut (4.0/4.0 GPA)
                        </ul>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 1.25 }}
                        variants={{
                            hidden: { opacity: 0, x: -200 },
                            visible: { opacity: 1, x: 0 }
                        }}
                    >
                        <ul className='mb-5 mt-5'>
                            <b>Bachelor of Science in Mechanical Engineering</b> - University of Wisconsin-Madison (3.6/4.0 GPA)
                        </ul>
                    </motion.div>
                </div>

                <div className='w-full grid grid-cols-2 sm:grid-cols-2 gap-4 py-8 mt-6'>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 1.75 }}
                        variants={{
                            hidden: { opacity: 0, x: -200 },
                            visible: { opacity: 1, x: 0 }
                        }}
                    >
                        <img className='mx-auto max-w-[400px] max-h-[400px]' src={UWM} alt='UWM' />
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 2 }}
                        variants={{
                            hidden: { opacity: 0, x: -200 },
                            visible: { opacity: 1, x: 0 }
                        }}
                    >
                        <img className='mx-auto max-w-[400px] max-h-[250px]' src={UConn} alt='UConn' />
                    </motion.div>
                </div>

            </div>

        </div>
    )
}

export default Skills