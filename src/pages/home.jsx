import Hero from "../components/hero";
import SubHeading from "../components/subheading";
import TrustedTeams from "../components/teams";
import img1 from '../assets/images/email-insight.svg';
import img2 from '../assets/images/lead-management.svg';
import img3 from '../assets/images/image3.png';
import { useEffect, useState } from "react";


const Home = () => {

    //list of dashboard items
    const dashboard_items = [
        {
            text: 'Email Insights',
            image: img1,
            id: 1
        },
        {
            text: 'Agenda highlights',
            image: img2,
            id: 2
        },
        {
            text: 'Lead management',
            image: img3,
            id: 3
        },
    ]

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
            
        }, 2000);
        
        //clean up timeout when index is been changed
        return () => clearTimeout(interval)
    }, [currentIndex])


    return (
        <div>
            <Hero />
            <TrustedTeams />
            <div className="flex flex-col items-center">
                <SubHeading text='CRM Dashboard' sub_text="Your command center for seamless lead management" desc_text="With Vista's CRM Dashboard, you can manage all of your leads from one place" />
                <div className="pb-5 cursor-pointer relative text-white w-[60%] px-12 text-xl mx-auto flex  justify-between after:content-[''] after:absolute after:w-full after:bottom-0 after:left-0 after:h-[1px] after:bg-border-gradient2">
                    {dashboard_items.map((item, index) => (
                        <h3 key={item.id} onClick={() => handleTExtClick(index)} className={currentIndex == index ? 'bg-red-400' : ''}> {item.text} </h3>
                    ))}
                </div>
                <div className="relative mt-10 lg:w-2/3 w-[95%] box-border lg:h-[550px] sm:h-96 h-80">
                    <div className="w-full h-full bg-neutral-800 rounded-xl after:content-[''] after:w-[100%] after:px-32 after:h-52 after:absolute after:bottom-0 after:left-0 after:bg-hero-gradient">
                        <img src={images[currentIndex]} alt="" />
                    </div>
                </div>
            </div>
            {/* <div>
                <SubHeading text="Task management" sub_text="Streamline your workflow with precision" desc_text="Stay on top of all your tasks with Vista CRM" />
            </div>
            <div>
                <SubHeading text="Analytics" sub_text="Gain actionable insights to drive your business forward" desc_text="Analyze all the data with beautiful dashboards" />
            </div>
            <div>
                <SubHeading text="Notes" sub_text="Capture meeting notes & collaborate with ease" desc_text="Organize all of your notes and contact in one central place" />
            </div>
            <div>
                <SubHeading text="More features" sub_text="And so much more" desc_text="Our CRM can do it all. Don't believe us? Try it yourself" />
            </div> */}
            <div></div>
        </div>
    );
}
 
export default Home;