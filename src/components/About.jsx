import React, { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'
import neehar from '../assets/neehar.jpg'

const About = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible")
        }
    }, [isInView])

    return (
        <div name='about' className='w-full sm:max-h-[1600px] md:h-screen bg-[#0a192f] text-gray-300'>
            <div className='flex flex-col justify-center items-center w-full md:h-full sm:max-h-[1600px] overflow-hidden'>
                <motion.div
                    variants={{
                        hidden: { opacity: 0, y: 75 },
                        visible: { opacity: 1, y: 0 }
                    }}
                    initial="hidden"
                    animate={mainControls}
                    transition={{ duration: 0.5, delay: 0.125 }}
                >
                    <div ref={ref} class="max-h-[650px] max-w-[500px] w-full md:mb-8 lg:mb-16 xl:mb-16 p-10">
                        <img className="rounded-full border-4 border-gray-100 shadow-md"
                            src={neehar} />
                    </div>
                </motion.div>

                <motion.div
                    variants={{
                        hidden: { opacity: 0, y: 75 },
                        visible: { opacity: 1, y: 0 }
                    }}
                    initial="hidden"
                    animate={mainControls}
                    transition={{ duration: 0.5, delay: 0.25 }}
                >
                    <div ref={ref} className='max-w-[1000px] w-full px-4 justify-center'>
                        <div className='pb-8'>
                            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    variants={{
                        hidden: { opacity: 0, y: 75 },
                        visible: { opacity: 1, y: 0 }
                    }}
                    initial="hidden"
                    animate={mainControls}
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                    <div ref={ref} className='max-w-[1000px] w-full px-4 grid sm:grid-cols-2 gap-8 pb-4'>
                        <div className='sm:text-right text-4xl font-bold'>
                            <p>Driven, Passionate, and Meticulous.</p>
                        </div>
                        <div>
                            <p>
Results-driven aspiring business analyst with a background in mechanical engineering. I blend strong analytical skills with practical problem-solving, leveraging my engineering expertise for data-driven insights. Proficient in tools like SQL, R, Excel, PowerBI, and Python - I am eager to contribute my quantitative foundation to optimize processes and enhance organizational efficiency.</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div >
    )
}

export default About