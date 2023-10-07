import React, { useState } from 'react'
import "./PlayButton.css"
import { useContext } from 'react'
import ThemeContext from '../Context/ThemeContext'

const PlayButton = ({message,children,onPlay,onPause}) => {
    const [Playbutton,setPlayButton]=useState(false)

   const {mode}=useContext(ThemeContext)

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
    <div className=''><button type='button' className={mode?'btn  btn-dark':'btn btn-light'} onClick={handleClick}>{Playbutton?"Pause":"Play"}</button>
    
    </div>
    </>
    
  )
}

export default PlayButton