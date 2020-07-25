import React, { useContext } from "react";
import { PlayListContext } from "../../context/PlaylistContext";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

const PlayButton = ({ track, large, medium, primary }) => {
  const { isPlaying, handlePlayTrack } = useContext(PlayListContext);

  const buttonClasses = () => {
    let classes = [];
    classes.push(isPlaying(track) ? "icon-pause" : "icon-play");
    if (large) classes.push("s-48");
    else if (medium) classes.push("s-24");
    return classes.join(" ");
  };

  return (
  
      <span className="btn-plain">
          <OverlayTrigger  overlay={<Tooltip>{track.title} </Tooltip>}>
        <i
          className={buttonClasses()}
          onClick={() => handlePlayTrack(track)}
        ></i>
            </OverlayTrigger>
      </span>

  );
};

export default PlayButton;
