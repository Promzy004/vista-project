import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {

    const[nav, setNav] = useState(false);
    const[navBorder, setNavBorder] = useState(false)

    //useEffect that runs once to make the window active
    useEffect(() => {

        // if(sessionStorage.getItem("showScrollBtn") === "true") {
        //     setNavBorder(true);
        // }

        //funtion that occur when the event takes place
        const handleScroll = () => {

            if(window.scrollY > 50) {

                setNavBorder(true);
                // sessionStorage.setItem("showScrollBtn", "true")
            } else {

                setNavBorder(false);
                // sessionStorage.removeItem("showScrollBtn")
            }
        }

        //adding the scroll event to window, this event becomes active even though the useEffect run once
        window.addEventListener('scroll', handleScroll)

        //this is a cleanup, it removes the event when it is unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
          };
    }, [])


    return (
        <header className="z-50 w-full bg-black text-white flex justify-between items-center lg:px-32 px-10 py-5 fixed top-0 left-0">
            <Link to='/' className="md:text-2xl text-lg">
                <img src="" alt="" />
                Vista
            </Link>

            <motion.nav 
                transition={{duration: 0.5}}
                className={nav ? 'nav-display md:animate-none animate-nav-scale origin-top' : 'nav-remove'}
            >
                <Link to='/pricing' className="link">Pricing</Link>
                <Link to='/blogs' className="link">Blog</Link>
                <Link to='/about' className="link">About</Link>
                <Link to='/contact' className="link">Contact</Link>
                <Link to='' className="md:ms-5 md:mt-0 mt-7 w-full">
                    <button className="bg-neutral-600 py-1 px-4 rounded-full hover:bg-custom-orange duration-500 ease-in-out w-full">
                        Get started
                    </button>
                </Link>
            </motion.nav>

            <div className="md:w-7 md:h-4 w-5 h-3 flex flex-col justify-between md:hidden cursor-pointer" onClick={() => {setNav(!nav)}}>
                <div className={nav ?  "w-full h-0.5 bg-white duration-500 -rotate-45 origin-custom" : "w-full h-0.5 bg-white duration-500"}></div>
                <div className={nav ?  "w-full h-0.5 bg-white duration-500 rotate-45 origin-custom" : "w-full h-0.5 bg-white duration-500"}></div>
            </div>
            
            <motion.div 
                className={navBorder ? "absolute bottom-0 left-0 w-full z-50 h-[0.5px] bg-border-gradient block" : "hidden"}
                initial={{scale: navBorder ? 0 : 1}}
                animate={{scale: navBorder ? 1 : 0}}
                transition={{duration: 0.1, type: 'tween'}}
            ></motion.div>
        </header>
    );
}
 
export default Header;