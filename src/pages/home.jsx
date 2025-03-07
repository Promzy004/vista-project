import Hero from "../components/hero";
import SubHeading from "../components/subheading";
import TrustedTeams from "../components/teams";


const Home = () => {
    return (
        <div className="">
            <Hero />
            <TrustedTeams />
            <div>
                <SubHeading text='CRM Dashboard' sub_text="Your command center for seamless lead management" desc_text="With Vista's CRM Dashboard, you can manage all of your leads from one place" />
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