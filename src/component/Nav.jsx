import  { useState } from 'react'

import { Link } from 'react-router-dom';
import Logo from "../assets/twilogo.svg";

const Nav = () => {

  const [open, setOpen] = useState(false);

  return (
    <div className="lg:px-20 px-8 py-8 font-font3  items-center flex justify-between w-full bg-[#CCCCCC]">
    <Link to="/"> <img src={Logo} alt=""  className="object-cover "/></Link>
     <div  onClick={() => setOpen(!open)}className=' text-[#B01D75] text-4xl  font-light ml-2 lg:hidden'>
           <ion-icon name={open ? "close" : "menu"} ></ion-icon>
        </div>
      <div className={`  flex gap-6 lg:flex-row md:flex-col flex-col bg-[#CCCCCC] items-center justify-center px-4 py-6 lg:z-50 z-50 lg:static  md:absolute absolute  right-0 lg:w-auto md:w-full w-full   text-[22px]
         md:pb-0 pb-12   md:opacity-100 transition-all ease-in duration-500 ${open ? 'top-20' : 'top-[-490px]'} `}>
        <button className="text-sm bg-[#B01D75] text-center text-white w-[295px] h-[56px]  border-yellow rounded-lg md:text-xl font-semibold font-font2 ">Download For Android</button>
       <button className= " text-sm bg-[#B01D75] text-center text-white w-[295px] h-[56px] border-yellow rounded-lg md:text-xl font-semibold font-font2">Download For Iphone</button>
      </div>
    </div>
  )
}

export default Nav