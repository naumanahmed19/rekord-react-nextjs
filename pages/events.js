import React from "react";
import {Layout, Event} from "../components";
import { events } from "../assets/data/data";
import { Row, Col } from "react-bootstrap";


const Events = () => {
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
          <Col md={4} key={event.id}>
               <Event  event={event} key={event.id} />
          </Col>
        ))}
      </Row>
    </Layout>
  );
}
export default Events;
