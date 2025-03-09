import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const AnalyticSection = ({data}) => {

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
        <div>
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
            <motion.div 
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                viewport={{once: true}}
                transition={{duration: 1, type: 'tween'}}
                className="w-[85%] md:w-5/6 lg:w-[70%] mx-auto mt-12 p-4  grid md:grid-cols-3 sm:grid-cols-2 sm:grid-rows-2 grid-cols-1 grid-rows-2 justify-between text-left text-white gap-10 cursor-pointer">
                {analytics_data.map((item, index) => (
                    <div key={item.id} onClick={() => handleTExtClick(index)} className={currentIndex == index ? "flex flex-col gap-5" : 'flex flex-col gap-5 text-neutral-400 hover:text-neutral-300'}>
                        <h3 className="text-xl"> {item.title} </h3>
                        <p className="text-sm">{item.desc}</p>
                    </div>
                ))}
            </motion.div>
        </div>
    );
}
 
export default AnalyticSection;