import React, { Component } from "react";
import {handleSidebarMenu} from "../helpers/Utils.js";
import Player from "./Player";
class NabBar extends Component {
  state = {};
  render() {
    return (
       

<nav className="navbar-wrapper navbar-bottom-fixed shadow">
    <div className="navbar navbar-expand player-header justify-content-between  bd-navbar">
        <div className="d-flex align-items-center">
            <a href="#" onClick={handleSidebarMenu} className="paper-nav-toggle pp-nav-toggle ml-2 mr-2">
                <i></i>
            </a>
            <a className="navbar-brand d-none d-lg-block" href="index.html">
                <div className="d-flex align-items-center s-14 l-s-2">
                    <span>RECORD</span>
                </div>
            </a>
        </div>
        
        <Player />
      
<div className="navbar-custom-menu">
    <ul className="nav navbar-nav">

       
        <li className="searchOverlay-wrap">
            <a href="#" id="btn-searchOverlay" className="nav-link mr-3 btn--searchOverlay no-ajaxy">
                <i className="icon icon-search s-24"></i>
            </a>

        </li>
      
        <li className="dropup custom-dropdown user user-menu ">
            <a href="#" className="nav-link" data-toggle="dropdown">
                <figure className="avatar">
                    <img src="assets/img/demo/u7.png" alt="" />
                </figure>
                <i className="icon-more_vert "></i>
            </a>
            <div className="dropdown-menu p-4 dropdown-menu-right">
                <div className="row box justify-content-between my-4">
                    <div className="col text-center">
                        <a className="ajaxifyPage" href="saved.html">
                            <i className="icon icon-save s-24"></i> <span>Saved</span>
                        </a>
                    </div>
                    <div className="col text-center">
                        <a className="ajaxifyPage" href="saved.html">
                            <i className="icon icon-heart s-24"></i> <span>Favourites</span>
                        </a>
                    </div>
                    <div className="col text-center">
                        <a className="ajaxifyPage" href="profile.html">
                            <i className="icon-user-4  s-24"></i>
                            <div className="pt-1">Profile</div>
                        </a>
                    </div>
                </div>
            </div>
        </li>
    </ul>
</div>
    </div>

</nav>
    );
  }
}

export default NabBar;
