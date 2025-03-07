import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Header = () => {

    const[nav, setNav] = useState(false);
    const[navBorder, setNAvBorder] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 50) {
                setNAvBorder(true);
            } else {
                setNAvBorder(false);
            }
        })

        return () => {
            window.removeEventListener("scroll", () => {
                if(window.scrollY > 50) {
                    setNAvBorder(true);
                } else {
                    setNAvBorder(false);
                }
            });
          };
    }, [])

    return (
        <header className="z-50 w-full bg-black text-white flex justify-between items-center lg:px-32 px-10 py-5 fixed top-0 left-0">
            <a href="" className="text-2xl">
                <img src="" alt="" />
                Vista
            </a>

            <motion.nav className={nav ? 'nav-display' : 'nav-remove'}
                style={{transformOrigin: 'top'}}
            >
                <a href="" className="link">Pricing</a>
                <a href="" className="link">Blog</a>
                <a href="" className="link">About</a>
                <a href="" className="link">Contact</a>
                <a href="" className="md:ms-5 md:mt-0 mt-7">
                    <button 
                        className="bg-neutral-600 py-1 px-4 rounded-full hover:bg-custom-orange duration-500 ease-in-out "
                    >
                        Get started
                    </button>
                </a>
            </motion.nav>
            <div className="w-7 h-4 flex flex-col justify-between md:hidden" onClick={() => {setNav(!nav)}}>
                <div className={nav ?  "w-full h-0.5 bg-white duration-500 -rotate-45 origin-custom" : "w-full h-0.5 bg-white duration-500"}></div>
                <div className={nav ?  "w-full h-0.5 bg-white duration-500 rotate-45 origin-custom" : "w-full h-0.5 bg-white duration-500"}></div>
            </div>
            <motion.div 
                className={navBorder ? "absolute bottom-0 left-0 w-full h-[0.5px] bg-border-gradient block" : "hidden"}
                initial={{scale: navBorder ? 0 : 1}}
                animate={{scale: navBorder ? 1 : 0}}
                transition={{duration: 0.1, type: 'tween'}}
            ></motion.div>
        </header>
    );
}
 
export default Header;