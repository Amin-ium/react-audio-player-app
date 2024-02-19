import React, { useEffect, useState } from 'react'
import { BiSolidPlaylist } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import '../../src/App.css'
import { timer } from '../utilis/Timer';

const List = ({musicNumber, setMusicNumber, open, setOpen}) => {
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
  return (
    <div className={`list absolute w-[100%]  left-0 bg-white transition duration-200 ease-in-out 
     z-10 rounded-xl  hover:rounded-b-xl ${open ? 'block top-[50%] ' : 'hidden '} `}>
        <div className="header w-[100%] py-[15px] px-[20px] flex justify-between items-center shadow-lg">
            <div className='flex items-center gap-[5px]'>
            <BiSolidPlaylist  />
            <span>Music List</span>
            </div>
            <IoClose onClick={() => setOpen(false)} />
        </div>
        <ul className='listTracks w-[100%] h-[250px] overflow-y-scroll  '>
            {
                music.map((msc,index)=> (
                    <li key={msc.id} onClick={() => setMusicNumber(index)} className={`w-[100%] px-[30px] py-[10px] flex justify-between cursor-pointer border-b-[1px] 
                    border-[#eee] hover:bg-gray-400 hover:hover:rounded-xl ${musicNumber === index ? 'playing' : ''} `}>
                        <div className="row text-[0.85rem]">
                            <span>{msc.title}</span>
                            <p>{msc.artist}</p>
                        </div>
                        <Duration msc={msc}/>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default List

const Duration = ({msc}) => {
  
    const [duration, setDuration] = useState(0);

    useEffect(() => {
        const audio = new Audio(msc.src)
        console.log(audio);
        audio.onloadedmetadata = function() {
            if(audio.readyState > 0){
                setDuration(audio.duration)
                console.log(audio);
            }
        }
        
    }, [msc]);

    console.log(duration);

    return (
        <span className='duration'>{timer(duration)}</span>
    )
}