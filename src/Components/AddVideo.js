import React, { useEffect, useState } from 'react'
import "./AddVideo.css"

import useDispatch from '../Hooks/VideoDispatch'

let initiale = {
    time: "3 yrs",
    channel: "Coder Dost",
    verified: true,
    title: "",
    views: ''

}

const AddVideo = ({ editable, updateVideo }) => {
    const [video, setVideo] = useState(initiale)
    const Dispatch = useDispatch()
console.log("render Addvideo js file")

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editable) {
            Dispatch({ type: 'UPDATE', payload: video })
        }
        else {
            Dispatch({ type: 'ADD', payload: video })
        }

        console.log(video)
        setVideo(initiale)

    }

    const handleChange = (e) => {
        setVideo({ ...video, [e.target.name]: e.target.value })
    }

    useEffect(() => {
        if (editable) {
            setVideo(editable)
        }

    }, [editable])



    return (

        <form className='p-4 d-block w-25'>
            <input type="text" className='margin-set' placeholder='title' name="title" onChange={handleChange} value={video.title}></input>
            <input type="text" className='margin-set' placeholder='views' name="views" onChange={handleChange} value={video.views}></input>
            <button className='btn btn-dark margin-set'

                onClick={handleSubmit}


            >{editable ? "edit" : "Add"} Video</button>
        </form>

    )
}


// setVideos([...videos,{
//     id:videos.length+1,
//     title:"Python",
//      time:"4 yrs",
//       views:"1M",
//        channel:"Coder Dost",
//       verified:true
//   }])
export default AddVideo