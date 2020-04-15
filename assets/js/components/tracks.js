import React, { Component,useState,useContext } from "react";
import Layout from "../components/Layout";

import img from "../assets/img/demo/a1.jpg";
import { PlayListContext } from "../components/PlaylistContext.js";


const Tracks = props  =>{
  let tracks = [];

  console.log( useContext(PlayListContext));
  const {tracks}= useContext(PlayListContext);

  return(
    <div>
   
        {
    tracks.map(track=>
    <li>
    {track.title}
    </li>
    )
  }
    </div>
  );
}


// class Albums extends Component {

//   static contextType = PlayListContext;
  
//   state = {};

//   componentDidMount(){
      
//     // const [tracks,setTracks] = this.context;
//   }
//   render() {
  


//     return (
//       <Layout
//         title="Albums"
//       subtitle={<>Lorem ipsum dolor sit amet, consectetur adipisicing elit.  <br /> Architecto atque aut blanditiis consectetur</>}
//       >
       
//         <div className="row has-items-overlay">
//           <div className="col-lg-3 col-md-4 col-sm-6 my-2">
//             <figure>
//               <div className="img-wrapper">
//                 <img src={img} alt="/" />
//                 <div className="img-overlay text-white text-center">
//                   <a href="album-single.html">
//                     <div className="figcaption mt-3">
//                       <i className="icon-link s-48"></i>
//                       <h5 className="mt-5">To Phir Ao</h5>
//                       <span>Atif Aslam</span>
//                     </div>
//                   </a>
//                 </div>
//                 <div className="figure-title text-center p-2">
//                   <h5>To Phir Ao</h5>
//                   <span>Atif Aslam</span>
//                 </div>
//               </div>
//             </figure>
//           </div>
//         </div>



//       </Layout>
//     );
//   }
// }

export default Albums;
