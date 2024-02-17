import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#050A30] text-white'>
            <div>
                <ul className='hidden md:flex'>
                    <li className='hover:text-pink-600 duration-200 font-[kalam] text-2xl'>
                        <Link to="home" smooth={true} duration={500}>
                            Neehar Namjoshi
                        </Link>
                    </li>
                </ul>
            </div>

            {/* Menu */}
            <ul className='hidden md:flex'>
                <li className='hover:text-pink-600 duration-200'>
                    <Link to="home" smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li className='hover:text-pink-600 duration-200'>
                    <Link to="about" smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li className='hover:text-pink-600 duration-200'>
                    <Link to="skills" smooth={true} duration={500}>
                        Skills
                    </Link>
                </li>
                <li className='hover:text-pink-600 duration-200'>
                    <Link to="work" smooth={true} duration={500}>
                        Work
                    </Link>
                </li>
                <li className='hover:text-pink-600 duration-200'>
                    <Link to="projects" smooth={true} duration={500}>
                        Projects
                    </Link>
                </li>
                <li className='hover:text-pink-600 duration-200'>
                    <Link to="contact" smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>

            {/* Hamburger */}
            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            {/* Mobile Menus */}
            <div className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
                <ul>
                    <li className='py-6 text-4xl hover:text-pink-600 duration-200'>
                        <Link onClick={handleClick} to="home" smooth={true} offset={-80}>
                            Home
                        </Link>
                    </li>
                    <li className='py-6 text-4xl hover:text-pink-600 duration-200'>
                        <Link onClick={handleClick} to="about" smooth={true} duration={500} offset={-80}>
                            About
                        </Link>
                    </li>
                    <li className='py-6 text-4xl hover:text-pink-600 duration-200'>
                        <Link onClick={handleClick} to="skills" smooth={true} duration={500} offset={-80}>
                            Skills
                        </Link>
                    </li>
                    <li className='py-6 text-4xl hover:text-pink-600 duration-200'>
                        <Link onClick={handleClick} to="work" smooth={true} duration={500} offset={-80}>
                            Work
                        </Link>
                    </li>
                    <li className='py-6 text-4xl hover:text-pink-600 duration-200'>
                        <Link onClick={handleClick} to="projects" smooth={true} duration={500} offset={-80}>
                            Projects
                        </Link>
                    </li>
                    <li className='py-6 text-4xl hover:text-pink-600 duration-200'>
                        <Link onClick={handleClick} to="contact" smooth={true} duration={500} offset={-80}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>

            {/* Social Icons */}
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                        <a className='flex justify-between items-center w-full text-gray-300' href="https://www.linkedin.com/in/neeharnamjoshi/" target="_blank">
                            Linkedin <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                        <a className='flex justify-between items-center w-full text-gray-300' href="https://github.com/neeharn22" target="_blank">
                            Github <FaGithub size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                        <a className='flex justify-between items-center w-full text-gray-300' href="mailto:neehar.namjoshi@uconn.edu" target="_blank">
                            Email <HiOutlineMail size={30} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                        <a className='flex justify-between items-center w-full text-gray-300' href="https://neehar-namjoshi-portfolio.s3.amazonaws.com/misc_assets/neehar_namjoshi_resume.pdf">
                            Resume <BsFillPersonLinesFill size={30} />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar