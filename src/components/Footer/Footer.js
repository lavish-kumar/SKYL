import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Footer.css'
import { Link } from "gatsby";
// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

export default function Footer() {
    return (
<div>
<svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      className="waves"
      preserveAspectRatio="none"
      viewBox="0 24 150 28"
    >
      <defs>
        <path
          id="gentle-wave"
          d="M-160 44c30 0 58-18 88-18s58 18 88 18 58-18 88-18 58 18 88 18v44h-352z"
        ></path>
      </defs>
      <g className="parallax">
        <use x="48" fill="rgba(0,0,100,0.5)" xlinkHref="#gentle-wave"></use>
        <use
          x="48"
          y="3"
          fill="rgba(0,200,255,0.4)"
          xlinkHref="#gentle-wave"
        ></use>
        <use
          x="48"
          y="5"
          fill="rgba(200,255,255,0.3)"
          xlinkHref="#gentle-wave"
        ></use>
        <use x="48" y="7" fill="#292D61" xlinkHref="#gentle-wave"></use>
      </g>
    </svg>
    <footer className="footer">
        <Container>
          <Row>
            <Col md="3">
              <h1 className="title">BLK•</h1>
            </Col>
            <Col md="3">
              <Nav>
                <NavItem>
                  <NavLink to="/" tag={Link}>
                    Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/landing-page" tag={Link}>
                    Landing
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/register-page" tag={Link}>
                    Register
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/profile-page" tag={Link}>
                    Profile
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>
            <Col md="3">
              <Nav>
                <NavItem>
                  <NavLink href="https://creative-tim.com/contact-us?ref=blkdsr-footer">
                    Contact Us
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://creative-tim.com/about-us?ref=blkdsr-footer">
                    About Us
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://creative-tim.com/blog?ref=blkdsr-footer">
                    Blog
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://opensource.org/licenses/MIT">
                    License
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>
            <Col md="3">
              <h3 className="title">Follow us:</h3>
              <div className="btn-wrapper profile">
                <Button
                  className="btn-icon btn-neutral btn-round btn-simple"
                  color="default"
                  href="https://twitter.com/creativetim"
                  id="tooltip622135962"
                  target="_blank"
                >
                   <FontAwesomeIcon icon={['fab', 'twitter']} color="white" size="lg" />
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip622135962">
                  Follow us
                </UncontrolledTooltip>
                <Button
                  className="btn-icon btn-neutral btn-round btn-simple"
                  color="default"
                  href="https://www.facebook.com/creativetim"
                  id="tooltip230450801"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={['fab', 'facebook']} color="white" size="lg" />
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip230450801">
                  Like us
                </UncontrolledTooltip>
                <Button
                  className="btn-icon btn-neutral btn-round btn-simple"
                  color="default"
                  href="https://dribbble.com/creativetim"
                  id="tooltip318450378"
                  target="_blank"
                >
                    <FontAwesomeIcon icon={['fab', 'dribble']} color="white" size="lg" />
                </Button>
                <UncontrolledTooltip delay={0} target="tooltip318450378">
                  Follow us
                </UncontrolledTooltip>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
</div>
    )
}
