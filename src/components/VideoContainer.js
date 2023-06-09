import React, { useEffect, useState} from 'react'
import { YT_V } from '../utils/config';
import VideoCards from './VideoCards';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
const  [videos, setVideos] = useState([]);

  useEffect(()=>{
    getVideos();
  },[])

  const getVideos = async()=>{
    const data = await fetch(YT_V);
    const json = await data.json();
    setVideos(json.items) 
  }
  return (
    <div className='flex flex-wrap pl-10'>
      {videos.map((video) =>(
      <Link to={"/watch?v=" + video.id}> <VideoCards key={video.id} info={video}/>

      </Link>
      ))}
 
    </div>
  )
}

export default VideoContainer