export function Heading({text}){
    return(
        <p className="bg-neutral-600 py-1 px-4 text-sm rounded-full mb-4">{text}</p>
    )
}

const SubHeading = ({text, sub_text, desc_text}) => {
    return (
        <section className="w-full pb-16 text-white flex flex-col items-center text-center md:gap-4 gap-3 md:px-0 sm:px-10 px-5">
            <Heading text={text} />
            <h4 className="lg:text-4xl md:text-3xl sm:text-2xl text-xl lg:w-2/4 md:w-1/2 sm:w-5/6 w-full">{sub_text}</h4>
            <p className="lg:text-xl sm:text-sm text-xs lg:w-2/6 md:w-2/5 sm:w-5/6 w-full">{desc_text}</p>
        </section>
    );
}
 
export default SubHeading;