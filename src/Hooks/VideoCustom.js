import { useContext } from "react";
import VideoContext from "../Context/VideoContext";

function useVideosCustomHook(){
    return useContext(VideoContext)
}

export default useVideosCustomHook