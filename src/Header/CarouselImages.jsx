import {
  CarouselProvider,
  Image,
  Slide,
  Slider,
  ButtonBack,
  ButtonFirst,
  ButtonLast,
  ButtonNext,
  ButtonPlay,
  DotGroup
} from "pure-react-carousel";
import React from "react";

import s from "../styles.scss";

const ImageCarousel = () => (
  <CarouselProvider
    visibleSlides={1}
    totalSlides={3}
    naturalSlideWidth={9}
    naturalSlideHeight={6}
    hasMasterSpinner
    interval={3000}
    isPlaying
  >
    <Slider className={s.slider}>
      <Slide style={{ padding: "5em 0em", height: "300px" }} tag="a" index={0}>
        <Image src="https://lorempixel.com/800/800/cats/0" size="small" />
      </Slide>
      <Slide style={{ padding: "5em 0em", height: "300px" }} tag="a" index={1}>
        <Image src="https://lorempixel.com/800/800/cats/1" />
      </Slide>
      <Slide style={{ padding: "5em 0em", height: "300px" }} tag="a" index={2}>
        <Image src="https://lorempixel.com/800/800/cats/2" />
      </Slide>
    </Slider>
    <ButtonPlay childrenPlaying="Pause" childrenPaused="Play" />
    <ButtonFirst>First</ButtonFirst>
    <ButtonBack>Back</ButtonBack>
    <ButtonNext>Next</ButtonNext>
    <ButtonLast>Last</ButtonLast>
    <DotGroup />
  </CarouselProvider>
);

export default ImageCarousel;
