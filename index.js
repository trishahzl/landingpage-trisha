import React from "react";
import ReactDOM from "react-dom";
import "tachyons";
import { Provider, Heading, Subhead } from "rebass";
import {
  Hero,
  Flex,
  CallToAction,
  ScrollDownIndicator
} from "react-landing-page";

//good images : https://cdn.wallpapersafari.com/49/28/PlbUCQ.jpg
//https://www.freepik.com/free-vector/blue-abstract-acrylic-brush-stroke-textured-background_4044776.htm
//https://image.freepik.com/free-vector/blue-abstract-acrylic-brush-stroke-textured-background_53876-86373.jpg
//https://image.freepik.com/free-vector/colorful-memphis-design-background-vector_53876-81744.jpg

const App = (props) => (
  <Provider>
    <Hero
      color="black"
      backgroundImage="https://image.freepik.com/free-vector/colorful-memphis-design-background-vector_53876-81744.jpg"
      // backgroundImage="https://image.freepik.com/free-vector/blue-abstract-acrylic-brush-stroke-textured-background_53876-86373.jpg"
      bg="black"
      bgOpacity={0.1}
    >
      <Heading fontSize={150}>Trishades</Heading>
      <Subhead fontSize={[2, 3]}>See new</Subhead>
      <Flex mt={3}>
        <CallToAction bg="grey" mr={3}>
          Help
        </CallToAction>
        <CallToAction>Buy Now</CallToAction>
      </Flex>
      <ScrollDownIndicator />
    </Hero>
  </Provider>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
