import React from "react";
import Container from "react-bootstrap/Container";
import CarouselMod from "./CarouselMod";
import MidContent from "./MidContent";
import TabsMod from "./TabsMod";

function Home() {
  return (
    <>
      <CarouselMod />
      <Container fluid="lg" className="my-5">
        <MidContent />
        <TabsMod />
      </Container>
    </>
  );
}

export default Home;
