import { Link } from "react-router-dom";

const Videocard = ({ video }) => {
    if (!video) return null;
    const { snippet, statistics } = video;
    const { thumbnails } = snippet;

    return (
        <Link to={`/watch?v=${video.id}`}>
            <div className="w-72 p-3">
                <img className="rounded-2xl w-64" src={thumbnails.high.url} alt="video_img"></img>
                <ul>
                    <li className="font-bold truncate my-2">{snippet.title}</li>
                    <li>{statistics.viewCount} views</li>
                </ul>
            </div>
        </Link>
    )
}
export default Videocard