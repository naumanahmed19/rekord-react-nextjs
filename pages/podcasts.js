import React, { Component } from "react";
import Layout from "../components/Layout";
import { tracks as podcasts } from "../../assets/data/data";
import { Podcast, Banner, PlayButton, AvatarGroup } from "../components";
class Poadcasts extends Component {
  state = {};
  render() {

    let podcast = podcasts[0];
    return (
      <React.Fragment>
        <Banner image="http://xvelopers.com/wp/themes/rekord/wp-content/uploads/sites/48/2019/04/podcast.jpg">
          <Layout>
            <div className="row">
              <div className="col-md-6 mt-5">
                <div className="relative mb-5 text-white">
                  <h2> {podcast.category}</h2>
                  <h1 className="mb-2">{podcast.title}</h1>
                </div>

                <div className="d-flex justify-content-between align-items-center playlist">
                  <PlayButton track={podcast.url} large primary/>
                  <span className="badge badge-primary badge-pill">{podcast.time}</span>

                  <div className="ml-auto"></div>
                </div>

                <div className="avatar-group my-5">
                 <AvatarGroup data={podcast.artists} />
                </div>
              </div>
            </div>
          </Layout>
        </Banner>
        <Layout
          title="Explore Poadcasts"
          subtitle={
            <>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />{" "}
              Architecto atque aut blanditiis consectetur
            </>
          }
        >
          <div className="row">
            {podcasts.map((podcast) => (
              <Podcast
                className="col-md-4 col-xl-3"
                podcast={podcast}
                key={podcast.id}
              />
            ))}
          </div>
        </Layout>
      </React.Fragment>
    );
  }
}

export default Poadcasts;
