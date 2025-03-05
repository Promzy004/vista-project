import { Link } from "react-router-dom";
import hero from '../assets/images/hero.png';

export function Button({href, text='Get Started'}) {

    return(
        <Link to = {href}>
            <button className="bg-custom-orange py-2 px-6 rounded-full hover:bg-custom-orange-light duration-500 ease-in-out mt-5 ">{text}</button>
        </Link>   
    )
}


const Hero = () => {
    return (
        <section className="w-full py-40 flex flex-col gap-16 items-center justify-center text-white bg-black">
            <div className="w-2/3 flex flex-col justify-center items-center gap-3">
                <h1 className="text-5xl w-2/3 text-center font-semibold">Manage all your socials with one CRM</h1>
                <p className="text-lg w-2/4 text-center">Turn social media conversations into leads and customers with Social CRM</p>
                <Button/>
            </div>
            <div className="relative w-4/5 h-[650px] bg-custom-image bg-cover border-2 border-b-0 border-neutral-800 rounded-2xl after:content-[''] after:w-[104%] after:px-32 after:h-48 after:absolute after:bottom-0 after:-left-5 after:bg-hero-gradient">
                {/* <img src={hero} alt="" className="w-full" /> */}
            </div>
        </section>
    );
}
 
export default Hero;