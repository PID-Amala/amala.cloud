import { Outlet } from "react-router-dom";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import SidebarDatas from "../components/datas/SidebarDatas";
import logo from "../assets/icons/full-logo.svg";
import logoIcon from '../assets/icons/amala-icon.svg'
import closebar from '../assets/icons/isClose.svg'
import openbar from '../assets/icons/open.svg'
import { Link } from "react-router-dom";
import './active.css'



const IndividualDashboardLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <img src={isOpen ? closebar : openbar} className={isOpen ? "absolute left-[225px] md:left-[270px] top-[100px] z-50" : "absolute left-[40px] top-[100px] z-50"} onClick={()=> setIsOpen(!isOpen)} alt="Open and close arrow" />
      <div className="absolute">
        {/*open navbar */}
        {isOpen && (
        <div className="w-[245px] md:w-[287px] text-white sticky top-0 left-0 h-screen bg-[#010153] ">
          <header className="pl-4 h-[150px] flex items-center">
            <Link to="/individual/dashboard"><img src={logo} alt="amala logo" /></Link>
          </header>
          <nav>
            <ul className="flex flex-col gap-2">
              {SidebarDatas.map((item, index) => (
                <li key={index} className="hover:bg-white hover:text-black">
                  <NavLink
                    to={item.path}
                    className="flex items-center gap-4 pl-4 py-2"
                  >
                    {item.icon}
                    <span>{item.title}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        )}
        {!isOpen && (
        <div className="w-[63px] text-white sticky top-0 left-0 h-screen bg-[#010153] ">
          <header className="pl-4 h-[150px] flex  items-center">
          <Link to="/individual/dashboard"><img src={logoIcon} alt="amala logo" /></Link>
          </header>
          <nav>
            <ul className="flex flex-col gap-2">
              {SidebarDatas.map((item, index) => (
                <li key={index} className="hover:bg-white hover:text-black">
                  <NavLink
                    to={item.path}
                    className="flex items-center gap-4 pl-4 py-2"
                  >
                    {item.icon}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        )}
      </div>
      <main className="w-full pl-6 pr-[5%] pt-4 md:pt-[70px] pb-10">
        <Outlet />
      </main>
      
    </div>
  );
};

export default IndividualDashboardLayout;
