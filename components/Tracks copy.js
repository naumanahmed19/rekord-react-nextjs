import React, { Component,useState,useContext } from "react";
import Layout from "./Layout";

import img from "../assets/img/demo/a1.jpg";
import { PlayListContext } from "./PlaylistContext.js";


const Tracks = props  =>{

 const [tracks, setTracks] = useContext(PlayListContext);


  return(
    <ul>
        {
    tracks.map(track=>
      <li class="list-group-item my-1">
      <a class="no-ajaxy media-url" href="assets/media/track2.mp3" data-wave="assets/media/track2.json">
          <div class="d-flex justify-content-between align-items-center">
              <i class="icon-play s-28"></i>
              <figure class="avatar-md float-left mr-3 mt-1">
                  <img class="r-5" src="assets/img/demo/a2.jpg" alt="imghere" />
              </figure>
              <div>
                  <h6>{track.title}</h6>Atif Aslam
              </div>
              <span class="badge badge-primary badge-pill"> 5:03</span>
          </div>
      </a>
  </li>
    )
  }
    </ul>
  );
}

export default Tracks;
