import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from "../../assets/icons/amala.svg"
import hamburger from "../../assets/icons/hamburger_icon.svg"
import closeIcon from '../../assets/icons/close.svg'
import SidebarDatas from '../datas/SidebarDatas';

const  Header = () =>{
  const [sidebar, setSidebar] = useState(false);
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
            {SidebarDatas.map((item, index) => (
              <li key={index} onClick={showSidebar}>
                <NavLink
                  to={item.path}
                  className="flex items-center gap-4 h-10 pl-4 mb-4 hover:bg-white hover:text-black"
                >
                  <span>{item.title}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      
      {/* Desktop Menu */}
      <nav className='hidden md:flex'>
        <ul className="flex gap-6 items-center text-primary font-medium ">
          {SidebarDatas.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.path}
                className="flex items-center gap-4 h-10 pl-4 hover:bg-white hover:text-secondary"
              >
                <span>{item.title}</span>
              </NavLink>
            </li>
          ))}
          
        </ul>
      </nav>
    </div>
  )
}

export default Header