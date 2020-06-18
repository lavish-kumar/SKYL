import React from "react";

import { Container } from "reactstrap";

import Swiper from 'react-id-swiper';
import '../../assets/css/swiper.css'
const Carousel = (props) => {
  const params = {...props.settings,
  }
  
  return (
  <Container >
    <Swiper {...params}>
{props.children}
    </Swiper>
    </Container>
  )
};
export default Carousel;


