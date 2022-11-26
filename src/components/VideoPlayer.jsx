import React from "react";
import ReactPlayer from "react-player";

const VideoPlayer = ({keys}) => {
    return ( <ReactPlayer
    width="52vw"
    controls
    url={`https://www.youtube.com/watch?v=${keys[1]}`}
    // onError={(e)=> {console.log(e)}}
  />)
}

export default VideoPlayer 