import React, { Component } from 'react';
class Sidebar extends Component {
    state = {  }
    render() { 
        return ( 
        <aside className="main-sidebar fixed offcanvas shadow" data-toggle='offcanvas'>
              <div className="sidebar">
              <ul className="sidebar-menu">
              <li><a className="ajaxifyPage active" href="index.html">
                <i className="icon icon-home-1 s-24"></i> <span>Home</span>
            </a>
            </li>
            <li><a className="ajaxifyPage" href="categories.html">
                <i className="icon icon-layers-1 s-24"></i> <span>Categories</span>
            </a>
        </li>
            <li><a className="ajaxifyPage" href="albums.html">
                <i className="icon icon-windows s-24"></i> <span>Albums</span>
            </a>
        </li>
            <li><a className="ajaxifyPage" href="videos.html">
                <i className="icon icon-video-player-2 s-24"></i> <span>Videos</span>
            </a>
            </li>
            <li><a className="ajaxifyPage" href="events.html">
                <i className="icon icon-calendar-6 s-24"></i> <span>Events</span>
            </a>
            </li>

            <li><a className="ajaxifyPage" href="gallery.html">
                <i className="icon icon-photo-camera-1 s-24"></i> <span>Gallery</span>
            </a>
            </li>
            <li><a className="ajaxifyPage" href="blog.html">
                <i className="icon icon-newspaper s-24"></i> <span>Blog</span>
            </a>
            </li>

            <li><a className="ajaxifyPage" href="artists.html">
                <i className="icon icon-users s-24"></i> <span>Artists</span>
            </a>
            </li>     
                    
            
                </ul>
            
            
             </div>

        </aside> 
        );
    }
}
 
export default Sidebar;