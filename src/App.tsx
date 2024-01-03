import React, { useEffect, useRef, useState } from "react";

import videoSrc from './video.mp4'
import useLocalStorage from "./useLocalStorage";

function App() {
  const video = useRef<HTMLVideoElement>(null);

  const [volume, setVolume] = useLocalStorage('volume', '0');


  useEffect(()=>{
    if(!video.current) return;
    video.current.volume = Number(volume);
  }, [volume]);

  return (
      <div>
        {volume}
        <div className="flex">
          <button onClick={()=> setVolume('0')}>0</button>
          <button onClick={()=> setVolume('0.5')}>50</button>
          <button onClick={()=> setVolume('1')}>100</button>
        </div>
       <video src={videoSrc} ref={video}></video>
      </div>
  )
}

export default App
