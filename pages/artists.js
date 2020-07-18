import React, { Component } from "react";
import { Layout, Artist, ArtistLettersFilter } from "../components";
import { artists, artistsByCategory } from "../../assets/data/data";
import { Row, Col } from "react-bootstrap";
import { Animated } from "react-animated-css";

class Artists extends Component {
  state = {
    category: "all",
    collection: artistsByCategory,
  };

  handleLetterClick = (letter) => {
    let collection = [...artistsByCategory];
    collection = collection.filter((c) => c.category === letter);
    this.setState({
      category: letter,
      collection,
    });
  };
  handleShowAll = () => {
    this.setState({
      category: "all",
      collection: artistsByCategory,
    });
  };

  render() {
    const { category, collection } = this.state;
    return (
      <Layout
        title="Artists"
        subtitle={
          <>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />
            Architecto atque aut blanditiis consectetur
          </>
        }
      >
        <ArtistLettersFilter
          category={category}
          showAll={this.handleShowAll}
          showonly={this.handleLetterClick}
        />
        {collection.length > 0
          ? collection.map((a) => (
              <Animated animationIn="fadeInUp" isVisible={true}>
                <div
                  className={`avatar avatar-md avatar-letter-${a.category.toLowerCase()} my-5 primary-color`}
                ></div>
                <Row className="mb-5">
                  {a.artists.map((artist) => (
                    <Col md={4} lg={3} className="my-3">
                      <Artist artist={artist} key={artist.id} />
                    </Col>
                  ))}
                </Row>
              </Animated>
            ))
          : "Not Found"}
      </Layout>
    );
  }
}
export default Artists;
