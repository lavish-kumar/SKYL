import React from "react";
// ReactJS plugin for a nice carousel
import Slick from "react-slick";
// reactstrap components
import { Row, Col, Button } from "reactstrap";

// custom previous button for the slick component
const PrevButton = props => {
  return (
    <Button
      className="btn-round btn-icon btn-simple slick-prev slick-arrow"
      color="primary"
      aria-label="Previous"
      type="button"
      onClick={props.onClick}
    >
      <i className="tim-icons icon-minimal-left" />
    </Button>
  );
};
// custom next button for the slick component
const NextButton = props => {
  return (
    <Button
      className="btn-round btn-icon btn-simple slick-next slick-arrow"
      color="primary"
      aria-label="Next"
      type="button"
    >
      <i className="tim-icons icon-minimal-right" onClick={props.onClick} />
    </Button>
  );
};

let slickSettings = {
  prevArrow: <PrevButton />,
  nextArrow: <NextButton />,
  className: "light slider blog-post",
  dots: false,
  infinite: true,
  centerMode: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
}

class SlickCarousel extends React.Component {
  render() {
    return (
      <>
      <Row>
        <Col md="12">
          <section className="light slider" />
          <Slick {...slickSettings}>
            <div>
              <img
                alt="..."
                height="500"
                src={require("../../assets/img/james.jpg")}
                width="450"
              />
            </div>

            <div>
              <img
                alt="..."
                height="500"
                src={require("../../assets/img/lora.jpg")}
                width="450"
              />
            </div>

          </Slick>
        </Col>
      </Row>
      </>
    );
  }
}

export default SlickCarousel;