import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Sidebar = () => {
    const isMenuopen=useSelector((state)=>state.app.isMenuopen);
    if(!isMenuopen) return null;
    return (
        <div className="h-screen w-1/6 text-lg shadow-md">
            <Link to="/">
                <div className="font-bold py-2 px-4">Home</div>
            </Link>
            <div className="font-bold py-2 px-4">Subscriptions</div>
            <div>
                <div className="font-bold py-2 px-4">Explore</div>
                <ul>
                    <li className="px-4">Movie</li>
                    <li className="px-4">Music</li>
                    <li className="px-4">Gaming</li>
                </ul>
            </div>
            <div>
                <div className="font-bold py-2 px-4">Channels</div>
                <ul>
                    <li className="px-4">Mr. Beast</li>
                    <li className="px-4">Akshay Saini</li>
                </ul>
            </div>

        </div>
    )
}

export default Sidebar