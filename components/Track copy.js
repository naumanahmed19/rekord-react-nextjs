import React, { Component, useState, useContext } from "react";
import { PlayListContext } from "./PlaylistContext.js";

const Track = ({ track }) => {

  const { isPlaying,handlePlayTrack, handleAddToPlayList, handleDeleteTrack, } = useContext(
    PlayListContext
  );

  const buttonClasses = () => {
    let classes = isPlaying(track) ? "icon-pause" : "icon-play";
    return (classes += " s-28 text-primary");
  };

  return (
    <li class="list-group-item my-1">
      <div class="d-flex align-items-center">
        <div>
          <i className={buttonClasses()} onClick={()=>handlePlayTrack(track)}></i>
          <span onClick={()=>handleAddToPlayList(track)}>+</span>
        </div>
        <div class="col-10">
          <figure class="avatar-md float-left mr-3 mt-1">
            <img className="r-5" src={track.thumbnail} alt="" />
          </figure>
          <h6 class="text-truncate track-title">{track.title}</h6>
          <div class="track-artists">
            <small>
              <a href="http://8560c281.ngrok.io/?post_type=artist&amp;p=255">
                {track.artist}
              </a>
            </small>
            <a
              href="#"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <small>
                <i
                  class="icon-add ml-2"
                  data-toggle="tooltip"
                  data-placement="bottom"
                ></i>{" "}
                1 More{" "}
              </small>
            </a>
            <div class="dropdown">
              <div class="dropdown-menu">
                <a
                  class="dropdown-item"
                  href="http://8560c281.ngrok.io/?post_type=artist&amp;p=222"
                >
                  Zehr Doe
                </a>
                <a
                  class="dropdown-item"
                  href="http://8560c281.ngrok.io/?post_type=artist&amp;p=630"
                >
                  Jehr Doe
                </a>
              </div>
            </div>
          </div>
        </div>
        <small class="ml-auto"> {track.time}</small>
      </div>
         {/* <i className="icon-close ml-auto" onClick={()=>handleDeleteTrack(track)}/> */}
    </li>


   

  );
};

export default Track;
