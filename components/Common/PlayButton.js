import React, { useContext } from "react";
import { PlayListContext } from "../PlaylistContext";
import { Button } from "react-bootstrap";

const PlayButton = ({ track, large, medium, primary }) => {
  const { isPlaying, handlePlayTrack } = useContext(PlayListContext);

  const buttonClasses = () => {
    let classes = ['clickable','text-primary'];
    classes.push( isPlaying(track) ? "icon-pause" : "icon-play");
    if(large) classes.push('s-48');
    else if(medium)classes.push('s-24') ;
    return classes.join(' ');
  };

  return (
     <i className={buttonClasses()} onClick={() => handlePlayTrack(track)}></i>
  );
};

export default PlayButton;
