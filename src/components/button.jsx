import { Link } from "react-router-dom";

export default function Button({href, text='Get Started'}) {

    return(
        <Link to={href} target="_blank">
            <button className="bg-custom-orange py-2 px-6 rounded-full hover:bg-custom-orange-light duration-500 ease-in-out mt-5 ">{text}</button>
        </Link> 
    )
}