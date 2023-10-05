import React, { useState } from 'react'
import "./PlayButton.css"

const PlayButton = ({message,children,onPlay,onPause}) => {
    const [Playbutton,setPlayButton]=useState(false)

   

const handleClick=()=>{
   
    if(Playbutton){
        onPause()
       
    }
    else{
        onPlay()
    }
    setPlayButton(!Playbutton)

}


  return (
    <>
    <div className=''><button className='btn btn-dark' onClick={handleClick}>{Playbutton?"Pause":"Play"}</button>
    
    </div>
    </>
    
  )
}

export default PlayButton