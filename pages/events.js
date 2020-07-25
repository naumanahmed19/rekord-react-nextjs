import React, { Component } from "react";
import {Layout, Event} from "../components";
import { events } from "../assets/data/data";
import { Row } from "react-bootstrap";

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
        <Row className="has-items-overlay">
          {events.map(event => (
            <Event className="col-md-4" event={event} key={event.id} />
          ))}
        </Row>
      </Layout>
    );
  }
}

export default Events;
