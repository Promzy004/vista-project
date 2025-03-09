import Button from "./button";
import { motion } from "framer-motion";


const Hero = () => {
    return (
        <section className="w-full md:py-44 py-36 flex flex-col gap-16 items-center justify-center text-white bg-black">
            <div className="md:w-2/3 sm:w-3/4 w-full px-4 flex flex-col justify-center items-center gap-3">
                <motion.h1
                    initial={{x: -30, opacity: 0}}
                    animate={{x: 0, opacity: 1}}
                    transition={{duration: 1, type: 'tween', ease: 'easeInOut'}}
                    className="xl:text-5xl lg:text-4xl md:text-4xl sm:text-3xl text-2xl xl:w-2/3 lg:w-2/4 md:w-3/4 w-full text-center font-semibold"
                >
                    Manage all your socials with one CRM
                </motion.h1>
                <motion.p
                    initial={{x: 30, opacity: 0}}
                    animate={{x: 0, opacity: 1}}
                    transition={{duration: 1, type: 'tween', ease: 'easeInOut'}}
                    className="md:text-lg text-sm xl:w-2/4 w-full text-center"
                >
                    Turn social media conversations into leads and customers with Social CRM
                </motion.p>
                <Button href='facebook.com'/>
            </div>
            <motion.div
                initial={{y: 30, opacity: 0}}
                animate={{y: 0, opacity: 1}}
                transition={{duration: 1, type: 'tween', ease: 'easeInOut'}}
                className="relative lg:w-4/5 w-[95%] box-border lg:h-[650px] sm:h-96 h-80"
            >
                <div className="hero-box"></div>
            </motion.div>
        </section>
    );
}
 
export default Hero;