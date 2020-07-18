import React, { Component, useState, useContext } from "react";
import Track from "./Track";

const TrackList = ({ tracks, style}) => {
  return (
    <ul className="p-0">
      {tracks.map((track,index) => (
        <Track style={style} track={track} key={index}  />
      ))}
    </ul>
  );
};
export default TrackList;