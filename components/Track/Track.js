import React, { Component, useState, useContext } from "react";
import { PlayListContext } from "../../context/PlaylistContext";
import { PlayButton, AddToPlaylistButton } from "..";
const Track = ({ track, style = "full", hasDelete }) => {
  const {
    handleDeleteTrack,
  } = useContext(PlayListContext);


  const title = <h6 className="text-truncate track-title">{track.title}</h6>;
  
  const time = <small className="ml-auto"> {track.time}</small>;

  const thumbnail = (
    <figure className="avatar-md float-left mr-3 mt-1">
      <img className="r-5" src={track.thumbnail} alt="" />
    </figure>
  );

  const artist = (
    <div className="track-artists">
      <small>
        <a href="#">
          {track.artists[0].name}
        </a>
      </small>
    </div>
  );

  const mini = (
    <li className="list-group-item my-1">
      <div className="d-flex align-items-center">
        <PlayButton track={track} primary />
        <div className="col-10">
          {thumbnail}
          {title}
          {artist}
        </div>
        <div className="d-flex">{time}</div>
      </div>
      {hasDelete && <i className="icon-close ml-auto track-delete text-primary" onClick={() => handleDeleteTrack(track)} />}
    </li>
  );

  const full = (
    <div className="m-1 my-4">
      <div className="d-flex align-items-center">

        <div className="col-md-6 d-flex align-items-center">
          <div className="mr-3">
            <PlayButton track={track} primary />
            <AddToPlaylistButton track={track} />
          </div>

          {thumbnail}
          <div>
            {title}
            {artist}
          </div>

        </div>
        <div className="col-md-6 d-none d-lg-block">
          <div className="d-flex">
            {time}
            <a href="#" className="ml-auto">
              <i className="icon-share-1"></i>
            </a>
            <div className="ml-auto">
              <a href="#" className="btn btn-outline-primary btn-sm">
                Buy at iTunes
              </a>
            </div>
          </div>
        </div>
        <div className="col-1 ml-auto d-lg-none">
          <a
            href="#"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i className="icon-more-1"></i>
          </a>
          <div className="dropdown-menu dropdown-menu-right">
            <a className="dropdown-item" href="#">
              <i className="icon-share-1 mr-3"></i> Share
            </a>
            <a className="dropdown-item" href="#">
              <i className="icon-shopping-bag mr-3"></i>Buy at iTunes
            </a>
          </div>
        </div>
      </div>
    </div>
  );

  const renderTrack = () => {

    switch (style) {
      case "mini":
        return mini;
        break;
      default:
        return full;
        break;
    }
  };

  return renderTrack();
};

export default Track;
