import React, { Component } from "react";
import Layout from "../../components/Layout";
import { events } from "../../assets/data/data";
import Album from "../../components/Album";
class Events extends Component {
  state = {};
  render() {
    return (
      <Layout
        title="Events"
        subtitle={
          <>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />{" "}
            Architecto atque aut blanditiis consectetur
          </>
        }
      >
        <div className="row has-items-overlay">
          {events.map(event => (
            <Event event={event} key={event.id} />
          ))}
          <div className="col-lg-3 col-md-4 col-sm-6 my-2"></div>
        </div>
      </Layout>
    );
  }
}

export default Events;
