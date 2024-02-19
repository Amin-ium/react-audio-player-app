import React, { useEffect, useRef, useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { BiSolidPlaylist } from "react-icons/bi";
import { FaRepeat } from "react-icons/fa6";
import { MdSkipPrevious } from "react-icons/md";
import { MdSkipNext } from "react-icons/md";
import { FaPlay, FaPause } from "react-icons/fa";
import { FaVolumeHigh, FaVolumeXmark } from "react-icons/fa6";
import { TbRepeatOff, TbRepeat  } from "react-icons/tb";
import { timer } from "../utilis/Timer";

const Card = ({ musicNumber, setMusicNumber, open, setOpen }) => {

  const [duration, setDuration] = useState(5);
  const [currentTime, setCurrentTime] = useState(0);
  const [play, setPlay] = useState(false);
  const [showVolume, setShowVolume] = useState(false);
  const [repeat, setRepeat] = useState('repeat');
  const [volume, setVolume] = useState(50);

  const audioRef = useRef()

  const music = [
    {
      id: 1,
      artist: "artist 1",
      src: "https://cdn.islamic.network/quran/audio/64/ar.alafasy/3.mp3",
      title: "title 1",
      thumb: "thumb1.jpg",
    },
    {
      id: 2,
      artist: "artist 2",
      src: "https://cdn.islamic.network/quran/audio/64/ar.alafasy/4.mp3",
      title: "title 2",
      thumb: "thumb2.jpg",
    },
    {
      id: 3,
      artist: "artist 3",
      src: "https://cdn.islamic.network/quran/audio/64/ar.alafasy/5.mp3",
      title: "title 3",
      thumb: "thumb3.jpg",
    },
    {
      id: 4,
      artist: "artist 4",
      src: "https://cdn.islamic.network/quran/audio/64/ar.alafasy/6.mp3",
      title: "title 4",
      thumb: "thumb4.jpg",
    },
    {
      id: 5,
      artist: "artist 5",
      src: "https://cdn.islamic.network/quran/audio/64/ar.alafasy/7.mp3",
      title: "title 5",
      thumb: "thumb5.jpg",
    },
    {
        id: 6,
        artist: "artist 6",
        src: "https://cdn.islamic.network/quran/audio/64/ar.alafasy/8.mp3",
        title: "title 6",
        thumb: "thumb1.jpg",
      },
      {
        id: 7,
        artist: "artist 7",
        src: "https://cdn.islamic.network/quran/audio/64/ar.alafasy/9.mp3",
        title: "title 7",
        thumb: "thumb2.jpg",
      },
      {
        id: 8,
        artist: "artist 8",
        src: "https://cdn.islamic.network/quran/audio/64/ar.alafasy/10.mp3",
        title: "title 8",
        thumb: "thumb3.jpg",
      },
      {
        id: 9,
        artist: "artist 9",
        src: "https://cdn.islamic.network/quran/audio/64/ar.alafasy/11.mp3",
        title: "title 9",
        thumb: "thumb4.jpg",
      },
      {
        id: 10,
        artist: "artist 10",
        src: "https://cdn.islamic.network/quran/audio/64/ar.alafasy/12.mp3",
        title: "title 10",
        thumb: "thumb5.jpg",
      },
  ];
  
  const handleLoadStart = (e) => {
    const src = e.nativeEvent.srcElement.src
    const audio = new Audio(src)
    audio.onloadedmetadata = function() {
      if(audio.readyState > 0){
          setDuration(audio.duration)
      }
  }
  if(play) {audioRef.current.play()}
  }

  const handlePlayingAudio = () => {
    if(play) {
      audioRef.current.pause()
      setPlay(false)
    }else{
      audioRef.current.play()
      setPlay(true)
    }
  }

  const handleTimeUpdate = () => {
    const currenTime = audioRef.current.currentTime;
    setCurrentTime(currenTime)
  }

  const changeCurrentTime = (e) => {
    const currentTime = Number(e.target.value)
    audioRef.current.currentTime = currentTime
    setCurrentTime(currentTime)
    
  }

  const handleNextPrevious = (n) => {
    setMusicNumber(value => {
      if(n > 0)
      return value + n > music.length - 1 ? 0 : value + n

      return value + n < 0 ? music.length - 1  : value + n
    })
    
  }

  useEffect(() => {
    audioRef.current.volume = volume / 100
  }, [volume]);

  


  return (
    <div className="card relative overflow-hidden bg-gray-800 text-white p-[25px] rounded-xl border-[1px] border-[rgba(255,255,255,0.1)]">
    <div className="nav w-[100%] flex justify-between">
        <FaAngleDown />
        <span>
          Now Playing {musicNumber + 1}/{music.length}
        </span>
        <BiSolidPlaylist onClick={() => setOpen(prev => !prev)} />
      </div>
      <div className="w-[100%] h-[270px] flex justify-center items-center relative ">
        <img className="w-[200px] h-[200px] object-cover rounded-full" src={require(`./imgs/${music[musicNumber].thumb}`)} alt="music" />
      </div>
      <div className="w-[100%] text-center">
        <p className="title text-[1.2rem]">{music[musicNumber].title}</p>
        <p className="artist text-[#bbb]">{music[musicNumber].artist}</p>
      </div>
      <div className="progress mt-[15px]">
        <input className="w-[100%] h-[4px]" type="range" min={0} max={duration} value={currentTime} onChange={e => changeCurrentTime(e)} />
      </div>
      <div className="timer w-[100%] flex justify-between text-[0.8rem] text-[#bbb]">
        <span>{timer(currentTime)}</span>
        <span>{timer(duration)}</span>
      </div>
      <div className="controlls w-[100%] flex justify-between items-center mt-[20px] mb-[40px] ">
        <TbRepeat size={24} />
        <MdSkipPrevious size={50} id="prev" onClick={() => handleNextPrevious(-1)} />
        <div onClick={handlePlayingAudio} className="play w-[3.2rem] h-[3.2rem] bg-[#cecaca] rounded-full flex justify-center items-center relative
        before:content-[''] before:absolute before:h-[2.5rem] before:w-[2.5rem] before:rounded-[inherit] before:bg-[#8dadff]  ">
          {play ? (
            <FaPause className="bg-white bg-clip-text text-fill-color absolute" />
          ) : (
            <FaPlay className="bg-white bg-clip-text text-fill-color absolute" />
          )}
          
          
        </div>
        <MdSkipNext size={50} id="next" onClick={() => handleNextPrevious(1)} />
        
        <FaVolumeHigh onClick={() => setShowVolume(prev => !prev)}  />
        
        
          <div className={`volume w-[100%] h-[50px] bg-[#333] rounded-[15px] absolute  left-0 border-[1px]-solid border-[#555] 
          flex justify-between gap-[5px] items-center p-[25px] z-5 transition duration-200 ease-out ${showVolume ? "bottom-0" : "bottom-[-10%]"} `}>
            <div onClick={() => setVolume(v => v > 0 ? 0 : 100)}>
            {volume === 0 ? (
          <FaVolumeXmark size={24} />
        ) : (
          <FaVolumeHigh size={24} />
        )}
        </div>
            <input className="w-[100%] h-[4px]" type="range" value={volume} min={0} max={100} onChange={e => setVolume(Number(e.target.value))} />
            <span>{volume}</span>
          </div>
        
        
        
      </div>
      <audio className="hidden" ref={audioRef} onLoadStart={handleLoadStart} onTimeUpdate={handleTimeUpdate} src={music[musicNumber].src}  controls></audio>
    </div>
  );
};

export default Card;
