import logo from './logo.svg';
import './App.css';
import Video from './Components/Video';
import "bootstrap/dist/css/bootstrap.min.css"
import videosDB from "./data/Data"
import { useMemo, useReducer, useState} from 'react';
import AddVideo from './Components/AddVideo';
import VideoList from './Components/VideoList';
import VideoContext from './Context/VideoContext';
import VideoDispatchContext from './Context/VideoDispatchContext';
import Counter from './Components/Counter';





function videoReducer(videos, action) {

  switch (action.type) {
    case "ADD":
      return [...videos, { ...action.payload, id: videos.length + 1 }]

    case "DELETE":
      return videos.filter((ele) => ele.id !== action.payload)

    case "UPDATE":
      let Index = videos.findIndex((v) => v.id === action.payload.id)
      const newVideos = [...videos]
      newVideos.splice(Index, 1, action.payload)
      return newVideos
    default:
      return videos


  }

}






function App() {
  const [videos, Dispatch] = useReducer(videoReducer, videosDB)

  // const [videos, setVideos] = useState(videosDB)
  const [editable, setEditable] = useState(null)
  console.log("render app js file")

  const addVideos = (video) => {

    Dispatch({ type: 'ADD', payload: video })
    // setVideos([...videos, { ...video, id: videos.length + 1 }])
  }

  const deleteVideo = (id) => {
    // console.log(id)
    // Dispatch({ type: 'DELETE', payload:id })
    // setVideos(videos.filter((ele) => ele.id !== id))
    console.log(videos)

  }

  const editVideo = (id) => {
    console.log(id)

    setEditable(videos.find((ele) => ele.id === id))

  }



  const updateVideo = (video) => {
    console.log(video)

    // Dispatch({ type: 'UPDATE', payload:video })

    //  setVideos(newVideos) 


  }


//   function fib(n) {
//     if (n === 1 || n === 2) {
//       return 1;
//     }
//     return fib(n - 1) + fib(n - 2)
//   }

// const fibMemoised=useMemo(()=>fib(40),[40])


  return (
    <VideoContext.Provider value={videos}>
      <VideoDispatchContext.Provider value={Dispatch}>
        <div>
          {/* <h1>{fibMemoised}</h1> */}
          <div >

            <AddVideo editable={editable} />
            <VideoList editVideo={editVideo}></VideoList>

           
          </div>
          {/* <Counter/> */}
        </div>
      </VideoDispatchContext.Provider>
    </VideoContext.Provider>
  );
}

export default App;
