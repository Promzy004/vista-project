import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const NoteSection = ({data}) => {

    //list of dashboard items
        const analytics_data = data
        
        //initialize the currentIndex state to be 0
        let [currentIndex, setCurrentIndex] = useState(0);
    
        //get all images in the dashboard list by looping through it using the map funtion
        const images = analytics_data.map(item => item.image)
    
    
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
        <div className="grid grid-cols-2 ">
            <motion.div 
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                viewport={{once: true}}
                transition={{duration: 1, type: 'tween'}}
                className="relative before:content-['hello'] before:left-0 before:top-0 before:absolute before:w-[1px] before:h-full before:bg-border-3">
                {analytics_data.map((item, index) => (
                    <div key={item.id} onClick={() => handleTExtClick(index)} className={currentIndex == index ? "flex flex-col gap-5 text-white" : 'flex flex-col gap-5 text-neutral-400 hover:text-neutral-300'}>
                        <h3 className="text-xl"> {item.title} </h3>
                        <p className="text-sm">{item.desc}</p>
                    </div>
                ))}
            </motion.div>
            <motion.div 
                initial={{scale: 0.8, opacity: 0}}
                whileInView={{scale: 1, opacity: 1}}
                viewport={{once: true}}
                transition={{duration: 0.5, type: 'tween'}}
                className="dashboard-box"
            >
                <div className="border-light-top w-full h-full bg-neutral-800 rounded-xl flex items-center justify-center">
                    <img src={images[currentIndex]} alt="" />
                </div>
            </motion.div>
        </div>
    );
}
 
export default NoteSection;