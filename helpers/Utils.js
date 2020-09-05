const someCommonValues = ['common', 'values'];
import Snackbar from "node-snackbar/dist/snackbar.js";
import { DARK_MODE } from '../config/Config';


export const handleOpenPlayList = () => {
  const ele = document.getElementById("playlist");
  ele.classList.toggle("control-sidebar-open");
  document.body.classList.toggle("hide-overflow");

};

export const handleSidebarMenu = () => {
  const ele = document.body;
  ele.classList.toggle("sidebar-collapse");
  ele.classList.toggle("sidebar-open");

};




export const html = (markup) => {
  return { __html: markup };
};


export const backgroundImage = imageUrl => {
  return imageUrl != null ? {
    //  backgroundImage: 'url(' + require("../assets/img/demo/v11.jpg") + ')',
    backgroundImage: `url(${imageUrl})`,

  } : '';

};


export const date = (date, type) => {

  const event_date = date.split(" ");

  if (type === 'm') return event_date[1];
  else if (type === 'y') return event_date[2];

  return event_date[0];

}

export const snackbar = (message, type) => {

  Snackbar.show({
    text: message,
    pos: "top-right",
    actionTextColor: "red",
    backgroundColor: "#0c101b",
  });

}


export const bodyClassess = () => {
  let classses = ['sidebar-mini', 'sidebar-collapse', 'sidebar-expanded-on-hover', 'has-preloader', 'has-sidenav'];
  if (DARK_MODE) {
    classses.push('theme-dark')
  }
  return classses.join(' ');
};