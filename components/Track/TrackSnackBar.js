import React from 'react';
import Snackbar from "node-snackbar/dist/snackbar.js";



const TrackSnackBar = ({title,time,thumbnail}) => {
    let template = 
      `<div class="d-flex">
        <div class="float-left">
          <div class="avatar-md mr-3">
            <img class="r-3" src=${thumbnail} alt="" />
          </div>
        </div>
        <div>
          <h6>
            <a href="">${title}</a>
          </h6>
          <small>${time}</small>
        </div>
      </div>`;
  
    return Snackbar.show({
      text: template,
      pos: "top-right",
      actionTextColor: "red",
      backgroundColor: "#0c101b",

      actionText: '<i class="icon-close"></i>',
    });
  };
 
export default SnackBar;