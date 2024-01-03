import React, { useEffect, useRef, useState } from "react";

import videoSrc from './video.mp4'

function App() {
  const [isPaused, setIsPaused] = useState<boolean>(true);
  const video = useRef<HTMLVideoElement>(null);

  function decidePlayOrPauseButton(){
    if(isPaused){
      return <button onClick={()=> video.current?.play()}>Play</button>
    }
    return <button onClick={()=> video.current?.pause()}>Pause</button>
  }

  function moreTwoSeconds(){
    if(video.current){
      video.current.currentTime+=2;
    }
  }

  function changeVideoSpeed(speed: number){
    if(video.current){
      video.current.playbackRate = speed;
    }
  }

  function playInPictureVideo(){
    if(video.current){
      video.current.requestPictureInPicture();
    }
  }

  function muteOrDesmuteVideo(){
    if(video.current){
      video.current.muted = !video.current.muted;
    }
  }

  return (
      <div>
        <div className="flex">
          {decidePlayOrPauseButton()}
          {video.current &&(
            <>
              <button onClick={moreTwoSeconds}>+ 2s</button>
              <button onClick={()=>changeVideoSpeed(1)}>1x</button>
              <button onClick={()=>changeVideoSpeed(2)}>2x</button>
              <button onClick={playInPictureVideo}>PiP</button>
              <button onClick={muteOrDesmuteVideo}>Mute</button>
            </>
          )}
      
        </div>
       <video 
       src={videoSrc} 
       ref={video}
       onPlay={()=> setIsPaused(false)}
       onPause={()=> setIsPaused(true)}
       ></video>
      </div>
  )
}

export default App
