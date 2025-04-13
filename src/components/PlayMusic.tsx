"use client";
import { IoPauseCircleOutline, IoPlayCircleOutline } from "react-icons/io5";

import { useRef, useState } from "react";

export default function PlayMusic() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="flex items-center gap-2 absolute top-[1rem] right-[3rem] md:right-[5rem] z-50">
      <button onClick={togglePlay} className="cursor-pointer">
        {isPlaying ? (
          <IoPauseCircleOutline size={30} />
        ) : (
          <IoPlayCircleOutline size={30} />
        )}
      </button>

      <div className="music-play">
        <div className={`${!isPlaying && "paused"} bar bar1`}></div>
        <div className={`${!isPlaying && "paused"} bar bar2`}></div>
        <div className={`${!isPlaying && "paused"} bar bar3`}></div>
        <div className={`${!isPlaying && "paused"} bar bar4`}></div>
        <div className={`${!isPlaying && "paused"} bar bar5`}></div>
        <div className={`${!isPlaying && "paused"} bar bar6`}></div>
        <div className={`${!isPlaying && "paused"} bar bar7`}></div>
      </div>

      <audio
        ref={audioRef}
        autoPlay
        src="/sauconmua.mp3"
        onEnded={() => {
          setIsPlaying(false);
        }}
      />
    </div>
  );
}
