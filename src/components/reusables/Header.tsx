import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { twMerge } from "tailwind-merge";
import logo from "../../assets/icons/amala.svg"
import hamburger from "../../assets/icons/hamburger_icon.svg"
import closeIcon from '../../assets/icons/close.svg'
import caret from '../../assets/icons/dropdown.svg'
import './dropdown.css'


const  Header = () =>{
  const [sidebar, setSidebar] = useState(false);
  const [ display, setDisplay ] = useState(false)

  // Dropdown click event 
  const handleDropdown = () => {
    setDisplay(!display);
    console.log(display)
  }
  // mobile menu sidebar
  const showSidebar = () => {
    setSidebar(!sidebar);
  };
  
  return (
    <div className="flex justify-between items-center paddingX text-base bg-white h-[80px]">
      <div>
        <Link to='/'><img src={logo} alt="logo" className='w-[134px]' /></Link>
      </div>
      {/* mobile navbar */}   
      <div>
        <div className='md:hidden'>
          <NavLink to="#">
            <img
              src={hamburger}
              alt="menue"
              onClick={showSidebar}
              className="w-7 h-7"
            />
          </NavLink>
        </div>
        <nav
          className={
            sidebar
              ? "navMenu right-0 duration-300 overflow-y-scroll"
              : "navMenu -right-full duration-700"
          }
        >
          <ul>
            <li>
              <NavLink to="#">
                <img
                  src={closeIcon}
                  alt="close"
                  className="w-12 py-4 mb-3 mx-auto"
                  onClick={showSidebar}
                />
              </NavLink>
            </li>
            <div className="flex flex-col gap-6 px-6">
              <li><NavLink to="#" className='focus:text-secondary'>Postcode Checker</NavLink></li>
              <li><NavLink to="#" className='focus:text-secondary'>Products</NavLink></li>
              <li><NavLink to="#" className='focus:text-secondary'>Pricing</NavLink></li>
              <li>
                <button onClick={handleDropdown} className='focus:text-secondary'>Company <img src={caret} alt="dropdown" className='ml-2 my-auto inline-block' /></button>
                <div className={display? " flex flex-col gap-3 mt-4 pl-4" : "hidden absolute top-[70px] left-0 w-full z-10"}>
                  <div>
                    <NavLink to="#" className='text-base font-medium focus:text-secondary'>About Us</NavLink>
                  </div>
                  <div>
                    <NavLink to="#" className='text-base font-medium focus:text-secondary'>Careers</NavLink>
                  </div>
                  <div>
                    <NavLink to="#" className='text-base font-medium focus:text-secondary'>Terms of Service</NavLink>
                  </div>
                  <div>
                    <NavLink to="#" className='text-base font-medium focus:text-secondary'>Privacy Policy</NavLink>
                  </div>
                  <div>
                    <NavLink to="#" className='text-base font-medium focus:text-secondary'>Brand Kit</NavLink>
                  </div>
                </div>
              </li>
              <li><NavLink to="#" className='focus:text-secondary'>Get Started</NavLink></li>
            </div>
          </ul>
        </nav>
      </div>
      
      {/* Desktop Menu */}
      <nav className='hidden md:flex'>
        <ul className="flex gap-6 items-center text-primary text-[14px] font-bold">
          <li><NavLink to="#" className='hover:text-secondary focus:text-secondary'>Postcode Checker</NavLink></li>
          <li><NavLink to="#" className='hover:text-secondary focus:text-secondary'>Products</NavLink></li>
          <li><NavLink to="#" className='hover:text-secondary focus:text-secondary'>Pricing</NavLink></li>
          <li className='dropdown'>
            <button className="flex hover:text-secondary focus:text-secondary py-6">Company <img src={caret} alt="dropdown" className='ml-2 my-auto' /></button>
            <div className='absolute hidden top-[70px] right-[100px] w-[300px] z-10 bg-white rounded-[20px]'>
              <div className='flex flex-col justify-evenly py-[20px] px-[20px]'>
                <NavLink to="#" className=' focus:text-secondary hover:bg-[#f8f5fd] px-[20px] py-[20px] rounded-[10px]'>
                  About Us
                </NavLink>
                <NavLink to="#" className='focus:text-secondary hover:bg-[#f8f5fd] px-[20px] py-[20px] rounded-[10px]'>
                  Careers
                </NavLink>
                <NavLink to="#" className=' focus:text-secondary hover:bg-[#f8f5fd] px-[20px] py-[20px] rounded-[10px]'>
                  Terms of Service
                </NavLink>
                <NavLink to="#" className=' focus:text-secondary hover:bg-[#f8f5fd] px-[20px] py-[20px] rounded-[10px]'>
                  Privacy Policy
                </NavLink>
                <NavLink to="#" className=' focus:text-secondary hover:bg-[#f8f5fd] px-[20px] py-[20px] rounded-[10px]'>
                  Brand Kit
                </NavLink>
              </div>
            </div>
          </li>
          <li><Link to="#" className='hover:text-secondary focus:text-secondary'>Get Started</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Header