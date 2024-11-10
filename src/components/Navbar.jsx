import React from 'react'
import logo from '../assets/aps.png'
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

export const Navbar = () => {
  return (
    <nav className=' mb-20 flex items-center justify-between py-6'>
        <div className='flex items-center'>
            <img className='mx-2 w-10' src={logo}  alt="logo" style={{width: '38%', height: '38%'}}/>
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl text-white' >
        <a href="https://www.linkedin.com/in/aditya-pratap-singh-4a83822ba/" target="_blank" rel="noopener noreferrer" className='hover:text-blue-600 transition-colors duration-300'>
        <FaLinkedin />
      </a>
      <a href="https://github.com/Decoder-Aditya" target="_blank" rel="noopener noreferrer" className='hover:text-neutral-500 transition-colors duration-300'>
        <FaGithub />
      </a>
      <a href="https://www.instagram.com/thakuradityaap8/profilecard/?igsh=dXA4aTgxaGF4ajNu" target="_blank" rel="noopener noreferrer" className='hover:text-pink-500 transition-colors duration-300'>
        <FaInstagram />
      </a>
 
        </div> 
    </nav>
  );
};

export default Navbar;
