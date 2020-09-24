import React,{useState} from "react";
import "./App.css";

import VideoListItem from './components/VideoListItem';

export default function App() {

  const [videoUrl,setVideoUrl] = useState('https://www.youtube.com/embed/x1rQ61otgtU')

  return (

    <div className='video-content'>

        <div className='video-wrapper'>
          <iframe src={videoUrl} 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen /> 
        </div>

        <div className='video-list'>
         <VideoListItem setVideoUrl={setVideoUrl}/> 
        </div>

    </div>
  );
}
