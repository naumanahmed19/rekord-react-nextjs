import React, { useContext } from "react";
import { PlayListContext } from "../Providers/PlaylistContext";
import { OverlayTrigger, Tooltip } from "react-bootstrap";


const AddToPlaylistButton = ({ track }) => {
    const { handleAddToPlayList } = useContext(
        PlayListContext
      );
    
  return (
    <OverlayTrigger overlay={<Tooltip>Add to playlist</Tooltip>}>
    <span className="btn-plain ml-3" onClick={() => handleAddToPlayList(track)}>
      <i className="icon-add"></i>
    </span>
    </OverlayTrigger>
  );
};

export default AddToPlaylistButton;
