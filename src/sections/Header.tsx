
import Button from "../components/button"
import { navTitles } from "../constants"
import { IoIosArrowDown, IoIosGlobe } from "react-icons/io";
import Logo from "../components/Logo";
import clsx from "clsx";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useEffect, useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
    useEffect(() => {
      if (open) {
        document.body.style.overflow = "hidden"; 
      } else {
        document.body.style.overflow = "auto"; 
      }
  
     
      return () => {
        document.body.style.overflow = "auto";
      };
    }, [open])
    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 80) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };
  
      window.addEventListener("scroll", handleScroll);


      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, [])
    
  return (
   <header className={clsx('fixed top left-0 h-[90px] w-full  flex items-center z-50 border-b   transition-all duration-300 ', isScrolled ? 'backdrop-blur-sm bg-card  border-white/5':'border-transparent')}>
   <div className='container mx-auto flex justify-between items-center max-md:px-6 px-12 '>
 <Logo/>
   <nav className={clsx("max-lg:absolute max-md:w-full max-md:pt-10 max-md:px-6 max-md:space-y-10 max-md:h-screen  max-md:bg-backgorund   left-0 transition-all duration-300  ",open?'top-0':'-top-[1200px]')}>
    <div className="max-md:flex hidden  items-center justify-between ">
      <Logo/>
      <button onClick={()=>setOpen(false)}>
        <Icon icon='iconoir:cancel' className="text-light-title size-8" />
      </button>
    </div>
    <ul className="flex max-md:flex-col flex-row items-center gap-10  ">
     {
      navTitles.map((title,index)=>(
        <li key={index} className="h7 hover:font-semibold hover:text-primary transition-all duration-300">
          <a href="'/">{title}</a>
        </li>
      ))
     }
    </ul>
   </nav>
   <div className="flex flex-row gap-x-4 items-center">
   <button className="outline-none group hover:text-[#B6B6B6]/90 border-none flex items-center flex-row gap-x-2 text-[#B6B6B6] font-semibold uppercase">
   <IoIosGlobe className="size-5 text-gery" />
   <span className="flex flex-row items-center gap-x-2">
   en
   <IoIosArrowDown className="text-[#B6B6B6] size-4" />
   </span>
   </button>
   <div className="max-lg:hidden ">
   <Button>
    Login
   </Button>
   </div>
   <button className="outline-none border-none max-lg:block hidden" onClick={()=>setOpen(true)}>
    <Icon icon={'codicon:three-bars'} className="text-light-title size-6"  />
   </button>
   </div>
   </div>
   </header>
  )
}

export default Header
