import Hero from "../components/hero";
import SubHeading from "../components/subheading";
import TrustedTeams from "../components/teams";
import img1 from '../assets/images/email-insight.svg';
import img2 from '../assets/images/lead-management.svg';
import img3 from '../assets/images/image3.png';
import DashboardSection from "../components/dashboard_section";
import AnalyticSection from "../components/analytic_section";


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
            image: img3,
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
            image: img3,
            id: 3
        },
    ]



    return (
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
            <div>
                <SubHeading text="Notes" sub_text="Capture meeting notes & collaborate with ease" desc_text="Organize all of your notes and contact in one central place" />
            </div>
            {/* <div>
                <SubHeading text="More features" sub_text="And so much more" desc_text="Our CRM can do it all. Don't believe us? Try it yourself" />
            </div>
            <div></div> */}
        </div>
    );
}
 
export default Home;