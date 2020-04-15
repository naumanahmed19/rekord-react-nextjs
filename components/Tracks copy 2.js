import React, { Component,useState,useContext } from "react";
import Layout from "./Layout";

import img from "../assets/img/demo/a1.jpg";
import { PlayListContext } from "./PlaylistContext.js";
import Track from './Track';







const Tracks = props  =>{

 //const [tracks, setTracks] = useContext(PlayListContext);


 const [tracks, setTracks] = useState([
  {
    id:1,
    title: "onexxx",
    url: "https://xvelopers.com/demos/html/record/assets/media/track1.mp3",
    thumbnail: "https://xvelopers.com/wp/themes/rekord/wp-content/uploads/sites/48/2019/03/a6.jpg",
    artist:'Atif Aslam',
    time: '5:03',
  },
  {
    id:2,
    title: "oneddd",
    url: "https://xvelopers.com/demos/html/record/assets/media/track2.mp3",
    thumbnail: "https://xvelopers.com/wp/themes/rekord/wp-content/uploads/sites/48/2019/03/a7.jpg",
    artist:'Atif Aslam',
    time: '4:03',
  },
  {
    id:3,
    title: "onefff",
    url: "https://xvelopers.com/demos/html/record/assets/media/track3.mp3",
    thumbnail: "https://xvelopers.com/wp/themes/rekord/wp-content/uploads/sites/48/2019/03/a5.jpg",
    artist:'Atif Aslam',
    time: '7:03',
  }
]);

  return(
    <ul>
        {
    tracks.map(track=>
        <Track track={track} />
    )
  }
    </ul>
  );
}

export default Tracks;
