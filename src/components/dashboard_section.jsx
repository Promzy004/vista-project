import { useState, useEffect } from "react";
import { easeInOut, motion } from "framer-motion";

const DashboardSection = ({data}) => {

    //list of dashboard items
    const dashboard_items = data
    
    //initialize the currentIndex state to be 0
    let [currentIndex, setCurrentIndex] = useState(0);

    //get all images in the dashboard list by looping through it using the map funtion
    const images = dashboard_items.map(item => item.image)


    //change the state of the currentIndex to be the index of the text when been clicked
    const handleTExtClick = (index) => {
        setCurrentIndex(index)
    }

    //creating an auto slide that reset on index change meanwhile useEffect runs when index is changed
    useEffect(() => {
        const interval = setTimeout(() => {
            setCurrentIndex(currentIndex == (images.length) - 1 ? currentIndex = 0 : currentIndex + 1)
            
        }, 5000);
        
        //clean up timeout when index is been changed
        return () => clearTimeout(interval)
    }, [currentIndex])

    return (
        <div className="w-full">
            <motion.div 
                initial={{y: 30, opacity: 0}}
                whileInView={{y: 0, opacity: 1}}
                viewport={{once: true}}
                transition={{duration: 0.5}}
                className="agenda-container">
                {dashboard_items.map((item, index) => (
                    <h3 key={item.id} onClick={() => handleTExtClick(index)} className={currentIndex == index ? "agenda-heading relative border-light-bottom" : 'agenda-heading text-neutral-400 hover:text-neutral-300'}> {item.title} </h3>
                ))}
            </motion.div>
            <motion.div 
                initial={{scale: 0.8, opacity: 0}}
                whileInView={{scale: 1, opacity: 1}}
                viewport={{once: true}}
                transition={{duration: 0.5, type: 'tween'}}
                className="dashboard-box"
            >
                <div className="w-full h-full bg-neutral-800 rounded-xl">
                    <motion.img
                        initial={{opacity: 0, x: 100}}
                        animate={{opacity: 1,x: 0}}
                        exit={{opacity: 0,x: -10}}
                        transition={{duration: 1}}
                        key={currentIndex} 
                        src={images[currentIndex]} 
                        alt="" 
                    />
                </div>
            </motion.div>
        </div>
    );
}
 
export default DashboardSection;