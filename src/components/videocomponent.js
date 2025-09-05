import { useSearchParams } from "react-router-dom";
import {useDispatch} from "react-redux";
import {closeMEnu} from "../utils/appSlice"
import { useEffect } from "react";

const Videocomponent = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get('v');
  const dispatch=useDispatch();

  useEffect(()=>{
    dispatch(closeMEnu())
  },[dispatch])

  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${id}`}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default Videocomponent;
