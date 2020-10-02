import React from "react";
import SideBar from "../components/SideBar";
import { Container, Row, Col, Image, Jumbotron, Button } from "react-bootstrap";

const Home = () => {
  // Data Buku
  const books = [
    {
      title: "What if? Absurd question",
      author: "Randall Munroe",
      image: require("../images/WhatIf.svg"),
    },
    {
      title: "Glyph: New look on things",
      author: "Morris Williamson",
      image: require("../images/Glyph.svg"),
    },
    {
      title: "Harry Potter and Goblet of fire",
      author: "J. K. Rowling",
      image: require("../images/HarryPotter.svg"),
    },
    {
      title: "Tess on the Road",
      author: "Rachel Hartman",
      image: require("../images/TessRoad.svg"),
    },
  ];

  return (
    <div>
      <Container className="mt-3">
        <Row>
          {/* Grid 3 untuk Side Bar */}
          <Col xs={3}>
            <SideBar />
          </Col>

          {/* Grid 9 untuk konten */}
          <Col xs={9}>
            <Jumbotron fluid style={{ padding: "0" }}>
              <Container>
                <Row>
                  <Col xs={8} className="mt-5 my-3">
                    <h1>
                      Share, read, and <i>love</i>
                    </h1>
                    <p>Reading is fascinating</p>
                  </Col>
                  <Col xs={4} className="my-3">
                    <Image
                      src={require("../images/FixYou.svg")}
                      style={{ height: "200px", width: "auto" }}
                    ></Image>
                  </Col>
                </Row>
              </Container>
            </Jumbotron>

            <Row>
              <Col>
                <h3>List Book</h3>
              </Col>
              <Col style={{ textAlign: "right" }}>
                <Button>Category</Button>
              </Col>
            </Row>

            {/* Card for Books */}
            <div className="row mt-3">
              {books.map((books) => (
                <div className="col-sm-3">
                  <div className="card" style={{ border: "none" }}>
                    <img class="card-img-top" alt="..." src={books.image}></img>
                    <div className="card-body">
                      <h4 class="card-title">{books.title}</h4>
                      <p class="card-text">{books.author}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
