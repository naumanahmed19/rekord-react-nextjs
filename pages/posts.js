import React, { Component } from "react";
import { Layout, Post } from "../components";
import { posts } from "../assets/data/data";
import { Row, Col } from "react-bootstrap";

class Posts extends Component {
  state = {};
  render() {
    return (
      <Layout
        title="Blog"
        subtitle={
          <>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />
            Architecto atque aut blanditiis consectetur
          </>
        }
      >
        <Row>
          <Col md={8}>
            {posts.map((post) => (
              <Post post={post} key={post.id} />
            ))}
          </Col>
        </Row>
      </Layout>
    );
  }
}

export default Posts;
