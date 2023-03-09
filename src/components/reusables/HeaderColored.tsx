import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from "../../assets/icons/amala.svg"
import hamburger from "../../assets/icons/hamburger_icon.svg"
import closeIcon from '../../assets/icons/close.svg'

const  HeaderColored = () =>{
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => {
    setSidebar(!sidebar);
  };
  
  return (
    <div className="flex justify-between items-center paddingX text-base bg-secondary h-[80px]">
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
              ? "navMenu right-0 duration-300"
              : "navMenu -right-full duration-700"
          }
        >
          <ul>
            <li>
              <NavLink to="#">
                <img
                  src={closeIcon}
                  alt="close"
                  className="w-12 py-4 mb-2 mx-auto"
                  onClick={showSidebar}
                />
              </NavLink>
            </li>
            
          </ul>
        </nav>
      </div>
      
      {/* Desktop Menu */}
      <nav className='hidden md:block'>
        <ul className="flex gap-6 text-primary  font-medium">
          
          
        </ul>
      </nav>
    </div>
  )
}

export default HeaderColored