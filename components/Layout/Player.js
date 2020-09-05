import React, { Component, useState, useContext } from "react";
import { PlayListContext } from "../../context/PlaylistContext";
import { handleOpenPlayList } from "../../helpers/Utils.js";
import _ from "lodash";
const Player = props => {

  const {
    tracks,
    handlePlayPause,
    buttonClass,
    handleNextTrack,
    handlePreviousTrack,
    disableNext,
    disablePrevious,
    currentTrack: track,
    isStream,

  } = useContext(PlayListContext);
  return (
    <div
      id="mediaPlayer"
      className="player-bar col-lg-9 col-md-5"
    >
      <div className="row align-items-center grid">
        <div className="col-2 active-track">
          <div className="d-flex">
            <div className="float-left">
              <a>
                <div className="avatar-md mr-3">
                  <img
                    className="r-3"
                    src={track.thumbnail}
                    alt=""
                  />
                </div>
              </a>
            </div>
            <div>
              <h6 className="text-truncate d-none d-xl-block">
                <a>{track.title}</a></h6>
              <small className="d-none d-xl-block">{track.artists[0].name}</small>
            </div>
          </div>
        </div>

      <div className="col">
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


        <div className="col-6 d-none d-lg-block">
          <div id="wavesurfer" className={track.isStream ? 'd-none' : ''}></div>
          {track.isStream ?
            <div className="music_pseudo_bars">
              {_.times(20, (i) => (
                <div className="music_pseudo_bar" key={i}></div>
              ))}
            </div> : ''
          }
        </div>
        <div className="col player-mini">
          <small className="track-time mr-2 text-primary align-middle"></small>
          <a className="btn-playlist" onClick={handleOpenPlayList}>
            <i className="icon icon-menu-3 s-24 align-middle"></i> <span className="counter">
              {tracks.length}
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Player;
