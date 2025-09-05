import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice"
const Header = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggleMenu())
  }

  return (
    <div className="flex justify-between py-3 shadow-md">
      <div className="flex space-x-2">
        <img className="h-10 mx-2" src="https://www.svgrepo.com/show/524617/hamburger-menu.svg" onClick={handleClick} alt="hamburger_icon" />
        <Link to="/">
          <img className="h-10" src="https://t4.ftcdn.net/jpg/07/32/01/31/360_F_732013128_4w36WRSEpuF1oT9nK0Bd31GT353WqFYi.jpg" alt=" youtube_image" />
        </Link>
      </div>
      <div>
        <input className="border-2 rounded-l-full w-96 p-2 focus:outline-none" type="text"></input>
        <button className="border-e-2 border-y-2 p-2 bg-slate-200 rounded-e-full focus:outline-none">Search</button>
      </div>
      <div>
        <img className="h-10 mx-2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ00EzhwcuFrfotd9xlGpwWtxH796hOhQS4gUMiH_zgIG6w6q2TmFcNaRVlax2Bg7Imlxc&usqp=CAU" alt="user_icon" />
      </div>
    </div>
  )
}

export default Header