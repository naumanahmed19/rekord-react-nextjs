import React, { Component, useState } from "react";
import { Layout, Artist, ArtistLettersFilter } from "../components";
import { artists, artistsByCategory } from "../assets/data/data";;
import { Row, Col } from "react-bootstrap";
import Animate from "animate.css-react";

const Artists = () => {

  const [category, setCategory] = useState('all');
  const [collection, setCollection] = useState(artistsByCategory);


  const handleLetterClick = (letter) => {
    let collection = [...artistsByCategory];
    collection = collection.filter((c) => c.category === letter);
    setCategory(letter);
    setCollection(collection);
  };
  const handleShowAll = () => {
    setCategory("all");
    setCollection(artistsByCategory);
  };

  //const { category, collection } = this.state;
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
        showAll={handleShowAll}
        showonly={handleLetterClick}
      />
      {collection.length > 0
        ? collection.map((a) => (
            <Animate appear="fadeInUp" key={a.category} >
              <div
                className={`avatar avatar-md avatar-letter-${a.category.toLowerCase()} my-5 primary-color`}
              ></div>
              <Row className="mb-5">
                {a.artists.map((artist) => (
                  <Col md={4} lg={3} className="my-3" key={artist.id}>
                  <Artist artist={artist}  />
                </Col>
                ))}
              </Row>
            </Animate>
          ))
        : "Not Found"}
    </Layout>
  );
}
export default Artists;