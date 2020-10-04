import React, { useContext } from "react";
import SideBar from "../components/SideBar";
import { Link } from "react-router-dom";
import { Container, Row, Col, Image, Jumbotron } from "react-bootstrap";

const Home = () => {
  // Data Buku
  const books = [
    {
      title: "What if? Absurd question",
      author: "Randall Munroe",
      ISBN: "9781789807554",
      image: require("../images/WhatIf.svg"),
      ebook: "what if? absurd Question.pdf",
      status: "Approve",
    },
    {
      title: "Glyph: New look on things",
      author: "Morris Williamson",
      ISBN: "9781789807555",
      image: require("../images/Glyph.svg"),
      ebook: "Glyph.pdf",
      status: "Approve",
    },
    {
      title: "Harry Potter and Goblet of fire",
      author: "J. K. Rowling",
      ISBN: "9781789807666",
      image: require("../images/HarryPotter.svg"),
      ebook: "Harrypoter.pdf",
      status: "Cancel",
    },
    {
      title: "Tess on the Road",
      author: "Rachel Hartman",
      ISBN: "9781789807576",
      image: require("../images/TessRoad.svg"),
      ebook: "Harrypoter.pdf",
      status: "Waiting to be verified",
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
            <Jumbotron fluid style={{ padding: "0", background: "#E6F2FD" }}>
              <Container>
                <Row>
                  <div className="col-8 mt-5 my-3">
                    <h1 className="jumbo">
                      Share, read, and <i>love</i>
                    </h1>
                    <h5>Reading is fascinating</h5>
                  </div>
                  <div className="col-4 my-3">
                    <Image
                      src={require("../images/FixYou.svg")}
                      style={{
                        height: "300px",
                        width: "auto",
                        textAlign: "center",
                      }}
                    ></Image>
                  </div>
                </Row>
              </Container>
            </Jumbotron>

            <Row>
              <Col>
                <h3>List Book</h3>
              </Col>
              <Col style={{ textAlign: "right" }}>
                <button className="btn btn-light">Category</button>
              </Col>
            </Row>

            {/* Card for Books */}
            <div className="row mt-3">
              {books.map((books) => (
                <div className="col-sm-3">
                  <div className="card" style={{ border: "none" }}>
                    <Link to="/detailbuku" style={{ color: "black" }}>
                      <img
                        className="card-img-top"
                        alt="..."
                        src={books.image}
                      ></img>
                      <h5 className="card-title py-2">{books.title}</h5>
                    </Link>
                    <p className="card-text subtitle">{books.author}</p>
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
        {/* <Row>
          <div>{JSON.stringify(state)}</div>
        </Row> */}
      </Container>
    </div>
  );
};

export default Home;
