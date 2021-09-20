import React from "react";
import Container from "react-bootstrap/Container";
import CarouselMod from "./CarouselMod";
import MidContent from "./MidContent";
import TabsMod from "./TabsMod";
import Acc from "./Acc";

function Home() {
  return (
    <>
      <CarouselMod />
      <Container fluid="lg" className="my-5">
        <MidContent />
        <TabsMod />
        <Acc />
      </Container>
    </>
  );
}

export default Home;
