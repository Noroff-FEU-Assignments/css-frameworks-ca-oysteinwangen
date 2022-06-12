import React from "react";
import Container from "react-bootstrap/Container";
import Cards from "./Cards";
import PaginationMod from "./PaginationMod";

function News() {
  return (
    <div>
      <Container className="my-5">
        <h1 className="mb-4">News</h1>
        <PaginationMod />
        <Cards />
        <PaginationMod />
      </Container>
    </div>
  );
}

export default News;
