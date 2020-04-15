import React, { Component, useState, useContext } from "react";
import { PlayListContext } from "./PlaylistContext";
import {handleOpenPlayList} from "../helpers/Utils.js";

const Player = props => {
  console.log(useContext(PlayListContext));
  const {
    tracks,
    handlePlayPause,
    buttonClass,
    handleNextTrack,
    handlePreviousTrack,
    disableNext,
    disablePrevious,
    currentTrack,
    
  } = useContext(PlayListContext);

  

  return (
    <div
      id="mediaPlayer"
      className="player-bar col-lg-8 col-md-5"
      data-auto="true"
    >
      <div className="row align-items-center grid">
        <div className="col">
          <div className="d-flex align-items-center">
            <div className="active-track">
              <a href="https://xvelopers.com/wp/themes/rekord/track/easy-come-easy-go/">
                <div className="avatar-md mr-3">
                  <img
                    className="r-3"
                    src={currentTrack.thumbnail}
                    alt=""
                  />
                </div>
              </a>
            </div>

            <div className="d-flex align-items-center">
              <button
                disabled={disablePrevious}
                id="previousTrack"
                onClick={() => handlePreviousTrack()}
                className="btn btn-link d-none d-sm-block"
              >
                <i className="icon-back s-18"></i>
              </button>
              <button className=" btn btn-link" id="playPause">
                <span id="play" onClick={() => handlePlayPause()}>
                  <i className={buttonClass + ' s-36'}></i>
                </span>
              </button>
              <div className="text-white">{disableNext}</div>
              <button
                disabled={disableNext}
                id="nextTrack"
                onClick={() => handleNextTrack()}
                className="btn btn-link d-none d-sm-block"
              >
                <i className="icon-next s-18"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="col-7 d-none d-lg-block">
          <div id="wavesurfer"></div>
        </div>
        <div className="col d-none d-lg-block">
          <small className="track-time mr-2 text-primary align-middle"></small>
          <a data-toggle="control-sidebar" onClick={handleOpenPlayList}>
            <i className="icon icon-menu-3 s-24 align-middle"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Player;
