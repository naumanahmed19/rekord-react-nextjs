import React, { Component } from "react";
import {Layout, Video} from "../components";
import { videos } from "../../assets/data/data";

class Videos extends Component {
  state = {};
  render() {
    return (
      <Layout
        title="Videos"
        subtitle={
          <>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />
            Architecto atque aut blanditiis consectetur
          </>
        }
      >
        <div className="row has-items-overlay">
          {videos.map(video => (
            <Video className="col-xl-3 col-md-4 mb-5" video={video} key={video.id} />
          ))}
        </div>
      </Layout>
    );
  }
}

export default Videos;
