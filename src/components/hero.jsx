import Button from "./button";


const Hero = () => {
    return (
        <section className="w-full md:py-44 py-36 flex flex-col gap-16 items-center justify-center text-white bg-black">
            <div className="md:w-2/3 sm:w-3/4 w-full px-4 flex flex-col justify-center items-center gap-3">
                <h1 className="xl:text-5xl lg:text-4xl md:text-4xl sm:text-3xl text-2xl xl:w-2/3 lg:w-2/4 md:w-3/4 w-full text-center font-semibold">Manage all your socials with one CRM</h1>
                <p className="md:text-lg text-sm xl:w-2/4 w-full text-center">Turn social media conversations into leads and customers with Social CRM</p>
                <Button href='facebook.com'/>
            </div>
            <div className="relative lg:w-4/5 w-[95%] box-border lg:h-[650px] sm:h-96 h-80">
                <div className="w-full h-full bg-custom-image bg-cover border-2 border-b-0 border-neutral-800 rounded-2xl after:content-[''] after:w-[100%] after:px-32 after:h-48 after:absolute after:bottom-0 after:left-0 after:bg-hero-gradient"></div>
            </div>
        </section>
    );
}
 
export default Hero;