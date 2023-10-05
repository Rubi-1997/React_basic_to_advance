import React from 'react'
import Video from './Video'

import useVideosCustomHook from '../Hooks/VideoCustom'


const VideoList = ({editVideo}) => {
const videos=useVideosCustomHook()

console.log("render videoList js file")
   
  return (
    <div className=" d-flex flex-row p-4">
    
    {
          videos.map((video)=>
          
   <Video key={video.id} title={video.title} time={video.time} views={video.views} verified={video.verified} id={video.id} videos={videos} editVideo={editVideo}></Video> 
   
          )
        }
  
  
        
          </div>
       
  )
}

export default VideoList