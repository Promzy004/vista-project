import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Header = () => {

    const[nav, setNav] = useState(false);
    const[navBorder, setNAvBorder] = useState(false)

    useEffect(() => {
        
    }, [])

    return (
        <header className="z-50 w-full bg-black text-white flex justify-between items-center lg:px-32 px-14 py-5 fixed top-0 left-0">
            <a href="" className="text-2xl">
                <img src="" alt="" />
                Vista
            </a>

            <nav className={nav ? 'nav-display' : 'nav-remove'}>
                <a href="" className="link">Pricing</a>
                <a href="">Blog</a>
                <a href="">About</a>
                <a href="">Contact</a>
                <a href="" className="ms-5">
                    <button 
                        className="bg-neutral-600 py-1 px-4 rounded-full hover:bg-custom-orange duration-500 ease-in-out "
                    >
                        Get started
                    </button>
                </a>
            </nav>
            <div className="w-7 h-4 flex flex-col justify-between md:hidden" onClick={() => {setNav(!nav)}}>
                <div className={nav ?  "w-full h-0.5 bg-white duration-500 -rotate-45 origin-custom" : "w-full h-0.5 bg-white duration-500"}></div>
                <div className={nav ?  "w-full h-0.5 bg-white duration-500 rotate-45 origin-custom" : "w-full h-0.5 bg-white duration-500"}></div>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-[0.5px] bg-boder-gradient"></div>
        </header>
    );
}
 
export default Header;