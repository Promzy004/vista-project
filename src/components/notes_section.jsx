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
    

    return (
        <div className="w-3/4 grid grid-cols-2 mx-auto gap-5">
            <motion.div 
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                viewport={{once: true}}
                transition={{duration: 1, type: 'tween'}}
                className="relative cursor-pointer flex flex-col justify-center gap-8 before:content-[''] before:left-0 before:top-0 before:absolute before:w-[2px] before:h-full before:bg-neutral-600">
                {analytics_data.map((item, index) => (
                    <div key={item.id} onClick={() => handleTExtClick(index)} className={currentIndex == index ? "relative flex flex-col gap-3 text-white border-light-left ps-10 pe-24" : 'flex flex-col gap-3 text-neutral-400 hover:text-neutral-300 ps-10 pe-24'}>
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
                className="notes-box"
            >
                <div className="box-content p-10 w-full h-full bg-neutral-800 rounded-xl">
                    <motion.img
                        key={currentIndex}
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        src={images[currentIndex]} alt="" className="border-2 rounded-md h-full" 
                    />
                </div>
            </motion.div>
        </div>
    );
}
 
export default NoteSection;