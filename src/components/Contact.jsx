import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

const handleURLClick = (url) => {
    // Handle the click action, for example, navigate to a new page.
    window.open(url, '_blank');
};

const Contact = () => {
    return (
        <div name='contact' className='w-full h-screen flex justify-between items-center px-4 bg-[#4b1cba] text-white'>
            <div className='max-w-[1400px] mx-auto p-8 md:p-4 lg:p-4 xl:p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Contact</p>
                    <p className='py-6'>Get in touch with me through the channels below.</p>
                </div>

                <div className='grid sm:grid-cols-2 gap-6'>
                    <div onClick={() => handleURLClick('https://www.linkedin.com/in/neeharnamjoshi/')} class="grid grid-cols-3 bg-white flex items-center justify-center rounded-tl-xl rounded-tr-lg rounded-bl-xl rounded-br-lg h-[80px] text-black cursor-pointer">
                        <div class='col-span-1 flex items-center justify-center h-full rounded-tl-lg rounded-tr-none rounded-bl-lg rounded-br-none bg-blue-600'>
                            <FaLinkedin color='white' size={60} />
                        </div>
                        <div class='col-span-2 text-center font-bold'>
                            LinkedIn
                        </div>
                    </div>

                    <div onClick={() => handleURLClick('https://github.com/neeharn22')} class="grid grid-cols-3 bg-gray-300 flex items-center justify-center rounded-tl-xl rounded-tr-lg rounded-bl-xl rounded-br-lg h-[80px] text-black cursor-pointer">
                        <div class='col-span-1 flex items-center justify-center h-full rounded-tl-lg rounded-tr-none rounded-bl-lg rounded-br-none bg-black'>
                            <FaGithub color='white' size={60} />
                        </div>
                        <div class='col-span-2 text-center font-bold'>
                            GitHub
                        </div>
                    </div>

                    <div onClick={() => handleURLClick('mailto:neehar.namjoshi@uconn.edu')} class="grid grid-cols-3 bg-[#99b08b] flex items-center justify-center rounded-tl-xl rounded-tr-lg rounded-bl-xl rounded-br-lg h-[80px] text-black cursor-pointer">
                        <div class='col-span-1 flex items-center justify-center h-full rounded-tl-lg rounded-tr-none rounded-bl-lg rounded-br-none bg-[#6fc2b0]'>
                            <HiOutlineMail color='white' size={60} />
                        </div>
                        <div class='col-span-2 text-center font-bold'>
                            Email
                        </div>
                    </div>

                    <div class="grid grid-cols-3 bg-[#c2ba65] flex items-center justify-center rounded-tl-xl rounded-tr-lg rounded-bl-xl rounded-br-lg h-[80px] text-black cursor-pointer">
                        <div class='col-span-1 flex items-center justify-center h-full rounded-tl-lg rounded-tr-none rounded-bl-lg rounded-br-none bg-[#947b48]'>
                            <BsFillPersonLinesFill color='white' size={60} />
                        </div>
                        <div class='col-span-2 text-center font-bold'>
                            Resume
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact