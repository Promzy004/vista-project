import { useEffect, useState } from "react"


const About = () => {

    const[loader, setloader] = useState(true)


    setTimeout(() =>{
        setloader(false)
    },5000)



    return (
        <div className="w-60 h-60 mx-auto my-52 text-black">
            {!loader ? (
                <div>About page</div>
            ): <div className="bg-white text-center text-black">Loading ...</div>}
        </div>
    );
}
 
export default About;