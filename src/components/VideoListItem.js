import React from 'react';
import {data} from './videosData';

 const VideoListItem = ({setVideoUrl}) => {

  const filterList = item => {

     //console.log(item);
     const video = data.filter(video => video.title === item);
     const newSrc = video[0].url;
    // console.log(video[0].url);
     setVideoUrl(newSrc);
  }
  

  //console.log(data);

  return (
    <div>
      <h2>Choose your option:</h2>

      {
        data.map( (item,index) => 
        <p key={index} onClick={() => filterList(item.title)} className="video-list-item">
          {item.title}
        </p>
        )
      }
      
    </div>
  );

}

export default VideoListItem;