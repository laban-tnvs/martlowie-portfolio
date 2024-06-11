import React from 'react'

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ReferensesInfo from './ReferensesInfo';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

const ReferensesSlider = () => {
  return <Carousel
  additionalTransfrom={0}
  arrows={true}
  autoPlay={true}
  autoPlaySpeed={5000}
  centerMode={false}
  infinite
  responsive={responsive}
  itemClass="item"
>
  <ReferensesInfo image="/images/r1.png" name="April Joy B. Hachero" role="Internship Workmate" contact="0997-445-8924"/>
  <ReferensesInfo image="/images/r3.png" name="Engr. Carlos O. Villacarlos JR." role="BTECH Faculty" contact="0995-655-4107"/>
  <ReferensesInfo image="/images/r2.png" name="Justine Apol B. Trinidad" role="Internship Workmate" contact="0969-433-6824"/>
</Carousel>;
}

export default ReferensesSlider
