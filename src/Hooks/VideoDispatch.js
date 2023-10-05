import { useContext } from "react";
import VideoDispatchContext from "../Context/VideoDispatchContext";

function useDispatch(){

return(useContext(VideoDispatchContext))

}

export default useDispatch
