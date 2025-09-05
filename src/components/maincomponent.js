import axios from "axios";
import { useEffect, useState } from "react";
import { GET_Video_API } from "./config";
import Videocard from "./videocard";

const Maincomponent = () => {
    const buttons = ["Movie", "Music", "Gaming", "Fun", "Comedy", "Movie", "Music", "Gaming", "Fun", "Comedy"];
    const [videodata, setVideoData] = useState([]);
    useEffect(() => {
        const fetchDetails = async () => {
            try {
                const data = await axios.get(`${GET_Video_API}`);
                setVideoData(data?.data?.items)
            } catch (error) {
                console.log(error)
            }
        }
        fetchDetails();
    }, [])
    return (

        <div className="w-5/6">
            {buttons.map((item, index) => (
                <button className='rounded-full px-5 py-1 border-2 ms-2 mt-2' key={index}>{item}</button>
            ))}
          <div className="flex flex-wrap">
              {videodata.map((video) => (
                <Videocard key={video.id} video={video} />
            ))}
          </div>
        </div>

    )
}

export default Maincomponent