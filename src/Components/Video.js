import React from 'react'
import "./Video.css"
import PlayButton from './PlayButton'
// import VideoDispatchContext from '../Context/VideoDispatchContext'
import { useContext } from 'react'
import useDispatch from '../Hooks/VideoDispatch'

const Video = ({title,time,views,channel="Coder Dost" ,verified,id,editVideo}) => {

  const Dispatch=useDispatch()






  return (
    <div className=' '>
        <div className='p-4'>
            <div className='position-relative'><button className='btn btn-dark position-absolute end-0' onClick={()=>Dispatch({ type: 'DELETE', payload:id })}>X</button><button className='btn btn-dark position-absolute start-50' onClick={()=>editVideo(id)}>edit</button></div>
        <img src={`https://picsum.photos/id/${id}/190/150`}></img>
        <div className='title'>{title}</div>
        <div className='channel'>{channel}{verified &&'☑️'}</div>
        <div className='time'>{time}</div>

        <div className='views'>{views}</div>
        <div><PlayButton  onPlay={()=>console.log("play") } onPause={()=>console.log("pause") }>Play</PlayButton></div>
        
        </div>
        
    </div>
  )
}

export default Video