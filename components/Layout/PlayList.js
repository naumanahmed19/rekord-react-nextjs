import React, { Component, useState, useContext } from "react";
import Layout from "./Layout";


import { PlayListContext } from "../../context/PlaylistContext";
import Track from "../Track/Track";
import {handleOpenPlayList} from "../../helpers/Utils.js";
// import {tracks} from "../../assets/data/data";

const PlayList = props => {
const { tracks } = useContext(PlayListContext);

 

  return (
    <React.Fragment>
      <aside id="playlist" className="control-sidebar fixed scrollable">
        <div className="slimScroll">
          <div className="sidebar-header">
            <h4>PlayList</h4>
            <p>Awesome Collection for you</p>
            <a
             onClick={handleOpenPlayList}
              data-toggle="control-sidebar"
              className="paper-nav-toggle  active"
            >
              <i></i>
            </a>
          </div>
          <div className="p-3">
            <ul id="playlist" className="playlist list-group">
              {tracks.map((track,index) => (
                <Track style="mini" track={track} hasDelete key={index} className="list-group-item my-1" />
              ))}
            </ul>
          </div>
        </div>
      </aside>
      <div className="control-sidebar-bg shadow  fixed"></div>
    </React.Fragment>
  );
};

export default PlayList;
