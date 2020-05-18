import React, { Component } from "react";
import {Layout, Album} from "../components";
import { albums } from "../assets/data/data";

class Albums extends Component {
  state = {};
  render() {
    return (
      <Layout
        title="Albums"
        subtitle={
          <>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />{" "}
            Architecto atque aut blanditiis consectetur
          </>
        }
      >
        <div className="row has-items-overlay">
          {albums.map(album => (
            <Album album={album} key={album.id} />
          ))}
        <div className="col-lg-3 col-md-4 col-sm-6 my-2"></div>
        </div>
      </Layout>
    );
  }
}

export default Albums;
