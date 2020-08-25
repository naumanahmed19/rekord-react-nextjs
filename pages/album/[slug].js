import React, { useContext } from "react";
import { albums } from "../../assets/data/data";
import { html } from "../../helpers/Utils";

import { Layout, TrackList, Like, LayoutContainer } from "../../components";
import { backgroundImage } from "../../helpers/Utils";
import { PlayListContext } from "../../context/PlaylistContext"


const Album = ({ album }) => {
  const { handlePlayAll } = useContext(PlayListContext);
  return (
    <React.Fragment>
      <section
        className="relative"
        data-bg-possition="center"
        style={album.cover && backgroundImage(album.cover)}
      >
        <div className="has-bottom-gradient">
          <LayoutContainer>
            <div className="py-5">
              <div className="row my-5 pt-5 pb-5">
                <div className="col-xl-2 col-md-3">
                  <img src={album.image} alt="/" />
                </div>
                <div className="col-md-10">
                  <div className="d-md-flex align-items-center justify-content-between">
                    <h1 className="my-3 text-white ">{album.title}</h1>
                    <div className="ml-auto">
                    <a href="">
                      <i className="icon-bookmark s-24"></i>
                    </a>
                      <Like className="ml-3" likes={album.liked} likes={album.likes || 0} size="s-24"/>
                    <a className="ml-3">
                      <i className="icon-share-1 s-24"></i>
                    </a>
                  </div>
                  </div>

                  <div
                    className="text-white my-2"
                    dangerouslySetInnerHTML={html(album.subtitle)}
                  />
                  <div className="pt-3">
                    <button className="btn btn-primary btn-lg mr-3" onClick={() => handlePlayAll(album.tracks)}>
                      <i className="icon-play mr-2"></i>
                      Play All
                    </button>
                    <a href={album.btnUrl} className="btn btn-primary btn-lg">
                      {album.btnLabel}
                    </a>


                  </div>
                </div>
              </div>
            </div>

          </LayoutContainer>
        </div>
        <div className="bottom-gradient "></div>
      </section>
      <Layout>
        <div className="mb-5">
          <div className="row">
            <div className="col-md-12">
              <TrackList tracks={album.tracks} />
            </div>
          </div>
        </div>
      </Layout>
    </React.Fragment>

  );
};

Album.getInitialProps = async (ctx) => {
  const { slug } = ctx.query;
  const album = albums.filter((album) => album.slug == slug)[0];
  return { album };
};

export default Album;
