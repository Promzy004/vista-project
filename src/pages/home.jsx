import Hero from "../components/hero";
import SubHeading from "../components/subheading";
import TrustedTeams from "../components/teams";
import img1 from '../assets/images/email-insight.svg';
import img2 from '../assets/images/lead-management.svg';
import img3 from '../assets/images/image3.png';
import DashboardSection from "../components/dashboard_section";
import AnalyticSection from "../components/analytic_section";
import NoteSection from "../components/notes_section";
import { useState } from "react";


const Home = () => {

    //list of dashboard section datas
    const dashboard_data = [
        {
            title: 'Email Insights',
            image: img1,
            id: 1
        },
        {
            title: 'Agenda highlights',
            image: img2,
            id: 2
        },
        {
            title: 'Lead management',
            image: img2,
            id: 3
        },
    ]

    //list of analytic section datas
    const analytics_data = [
        {
            title: 'Track Progress',
            desc: "Monitor your team's productivity by viewing completed tasks and active projects.",
            image: img1,
            id: 1
        },
        {
            title: 'Agenda highlights',
            desc: "Monitor your team's productivity by viewing completed tasks and active projects.",
            image: img2,
            id: 2
        },
        {
            title: 'Lead management',
            desc: "Monitor your team's productivity by viewing completed tasks and active projects.",
            image: img2,
            id: 3
        },
    ]


    //list of notes section datas
    const notes_data = [
        {
            title: 'Categorize contacts',
            desc: "Monitor your team's productivity by viewing completed tasks and active projects.",
            image: img1,
            icon: 1,
            id: 1
        },
        {
            title: 'Organize meeting notes',
            desc: "Use detailed task views, checklists, and due dates to stay on top of your projects.",
            image: img2,
            icon: 2,
            id: 2
        },
        {
            title: 'Collaborate in real time',
            desc: "Assign tasks, share notes, and engage in real-time discussions with your team.",
            image: img2,
            icon: 3,
            id: 3
        },
    ]

    const[loader, setloader] = useState(true)
    
    
        setTimeout(() =>{
            setloader(false)
        },3000)



    return (
        <div>
            {!loader ? 
                <div>
                    <Hero />
                    <TrustedTeams />
                    <section className="w-full mb-36">
                        <SubHeading text='CRM Dashboard' sub_text="Your command center for seamless lead management" desc_text="With Vista's CRM Dashboard, you can manage all of your leads from one place" />
                        <DashboardSection data={dashboard_data} />
                    </section>
                    <section className="w-full mb-36">
                        <SubHeading text="Task management" sub_text="Streamline your workflow with precision" desc_text="Stay on top of all your tasks with Vista CRM" />
                    </section>
                    <section className="w-full mb-36">
                        <SubHeading text="Analytics" sub_text="Gain actionable insights to drive your business forward" desc_text="Analyze all the data with beautiful dashboards" />
                        <AnalyticSection data={analytics_data} />
                    </section>
                    <section className="w-full mb-36">
                        <SubHeading text="Notes" sub_text="Capture meeting notes & collaborate with ease" desc_text="Organize all of your notes and contact in one central place" />
                        <NoteSection  data={notes_data}/>
                    </section>
                    <div>
                        <SubHeading text="More features" sub_text="And so much more" desc_text="Our CRM can do it all. Don't believe us? Try it yourself" />
                    </div>
                    <div></div>

                </div> 
                :
                <div className="my-56 mx-auto w-full h-full bg-white text-center text-black">Loading ...</div>
            }
        </div>
    );
}
 
export default Home;