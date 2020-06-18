/*!

=========================================================
* BLK Design System React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { Link } from "gatsby";
import Loader from "../Loader/Loader";

 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// reactstrap components
import {
    Button,
    Collapse,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    NavbarBrand,
    Navbar,
    NavItem,
    NavLink,
    Nav,
    Container,
    Row,
    Col,
    UncontrolledTooltip
  } from "reactstrap";
  


class PagesNavbar extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        ls:"70px",
        ani:"true",
        fill :"none",
        border :"white",
        collapseOpen: false,
        color: "navbar-transparent"
      };
    }
    componentDidMount() {
      window.addEventListener("scroll", this.changeColor);
    }
    componentWillUnmount() {
      window.removeEventListener("scroll", this.changeColor);
    }
    changeColor = () => {
      if (
        document.documentElement.scrollTop > 99 ||
        document.body.scrollTop > 99
      ) {
        this.setState({
          ls:"40px",
          ani:"false",
          fill :"white",
          border :"white",
          color: "bg-dark"
        });
      } else if (
        document.documentElement.scrollTop < 100 ||
        document.body.scrollTop < 100
      ) {
        this.setState({
          ls:"70px",
          ani:"true",
          fill :"none",
          border :"white",
          color: "navbar-transparent"
        });
      }
    };
    toggleCollapse = () => {
      document.documentElement.classList.toggle("nav-open");
      this.setState({
        collapseOpen: !this.state.collapseOpen
      });
    };
    onCollapseExiting = () => {
      this.setState({
        collapseOut: "collapsing-out"
      });
    };
    onCollapseExited = () => {
      this.setState({
        collapseOut: ""
      });
    };
    

    render() {
      return (
        <Navbar
          className={"fixed-top " + this.state.color}
          color-on-scroll="100"
          expand="lg"
        >
          <Container>
            <div className="navbar-translate" id="brandlogo">
              <NavbarBrand
                to="/"
                rel="noopener noreferrer"
                tag={Link}
              > 
              <Loader ani={this.state.ani} fill={this.state.fill} border={this.state.border} ls ={this.state.ls} />
               
                <UncontrolledTooltip
                  placement="bottom"
                  target="brandlogo"
                > Designed and coded by Lavish Kumar, illustrations by Undraw and Freepik</UncontrolledTooltip>
              </NavbarBrand>
              <button
                aria-expanded={this.state.collapseOpen}
                className="navbar-toggler navbar-toggler"
                onClick={this.toggleCollapse}
              >
                <FontAwesomeIcon icon={['fas', 'align-right']} color="white" size="lg" />
              </button>
            </div>
            <Collapse
              className={"justify-content-end " + this.state.collapseOut}
              navbar
              isOpen={this.state.collapseOpen}
              onExiting={this.onCollapseExiting}
              onExited={this.onCollapseExited}
            >
              <div className="navbar-collapse-header">
                <Row>
                  <Col className="collapse-brand" xs="6">
                    <a href="#pablo" onClick={e => e.preventDefault()}>
                    <span className="px-3 text-white">SkyLand</span>
                    </a>
                  </Col>
                  <Col className="collapse-close text-right" xs="6">
                    <button
                      aria-expanded={this.state.collapseOpen}
                      className="navbar-toggler"
                      onClick={this.toggleCollapse}
                    >
                     <FontAwesomeIcon icon={['far', 'times-circle']} color="white" size="lg"  />
                    </button>
                  </Col>
                </Row>
              </div>
              <Nav navbar>

            
              <UncontrolledDropdown nav>
                  <DropdownToggle
                    caret
                    id="aboutus"
                    data-placement="bottom"
                    color="default"
                    data-toggle="dropdown"
                    href="#pablo"
                    nav
                    className="d-flex d-lg-block justify-content-center"
                    onClick={e => e.preventDefault()
                    }
                  >
                   {/* <FontAwesomeIcon icon={['far', 'user-circle']} color="white" size="lg"  />  */}
                    <span> <FontAwesomeIcon icon={['fas', 'dna']} color="white" size="lg"  />  About Us</span>
                    <UncontrolledTooltip
                  placement="top"
                  target="aboutus"
                > Get to know us.</UncontrolledTooltip>
                  </DropdownToggle>
  
                  <DropdownMenu className="dropdown-with-icons dropdown-black " style={{color:"#f2f2f2"}}>
                    <DropdownItem>
                    <Link to="/about/">                  
                      <Button id="about"
                    className="nav-link m-1 d-flex d-lg-block justify-content-center"
                    color="default"
                    
                  >
                    <FontAwesomeIcon icon={['fas', 'dna']} color="white" size="lg"  />  About Us
                    <UncontrolledTooltip
                  placement="bottom"
                  target="about"
                >Know more ...</UncontrolledTooltip>
                  </Button>
                  </Link>
                    </DropdownItem>

  
                    
                  </DropdownMenu>
                </UncontrolledDropdown>
                  
                  
                <UncontrolledDropdown nav>
                  <DropdownToggle
                    caret
                    id="journey"
                    data-placement="bottom"
                    color="default"
                    data-toggle="dropdown"
                    href="#pablo"
                    nav
                    className="d-flex d-lg-block justify-content-center"
                    onClick={e => e.preventDefault()
                    }
                  >
                   {/* <FontAwesomeIcon icon={['far', 'user-circle']} color="white" size="lg"  />  */}
                    <span> <FontAwesomeIcon icon={['fas', 'drafting-compass']} color="white" size="lg"  />  Our Vision</span>
                    <UncontrolledTooltip
                  placement="top"
                  target="journey"
                > View our journey and our philosophies</UncontrolledTooltip>
                  </DropdownToggle>
  
                  <DropdownMenu className="dropdown-with-icons dropdown-black " style={{color:"#f2f2f2"}}>
                    <DropdownItem>
                  <Link to="/vision/">      
                  <Button id="philosophy"
                    className="nav-link m-1 d-flex d-lg-block justify-content-center bg-transparent"
                    color="default"
                  
                  >
                    <FontAwesomeIcon icon={['fas', 'drafting-compass']} color="white" size="lg"  />  Green Philisophy
                    <UncontrolledTooltip
                  placement="bottom"
                  target="philosophy"
                >Know more about our Unique Philosophy.</UncontrolledTooltip>
                  </Button>
                  </Link>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>

          

         

     


              {/* <NavItem className="p-0">
                  <NavLink
                  id="linkedin"
                    href="https://www.linkedin.com/in/lavish-k-6645b8112/"
                    target="_blank"
                  >
                    <i className="fa fa-linkedin" />
                    <p className="d-lg-none d-xl-none">Linkedin</p>
                  </NavLink>
                  <UncontrolledTooltip
                  placement="bottom"
                  target="linkedin"
                > Follow On Linkedin</UncontrolledTooltip>
                </NavItem> */}
               

                <UncontrolledDropdown nav>
                  <DropdownToggle
                    caret
                    id="browsesection"
                    data-placement="bottom"
                    color="default"
                    data-toggle="dropdown"
                    href="#pablo"
                    nav
                    className="d-flex d-lg-block justify-content-center"
                    onClick={e => e.preventDefault()
                    }
                  >
                   {/* <FontAwesomeIcon icon={['far', 'user-circle']} color="white" size="lg"  />  */}
                    
                    <span>  <FontAwesomeIcon icon={['fas', 'address-book']} color="white" size="lg"  /> Browse Portfolio</span>
                    <UncontrolledTooltip
                  placement="top"
                  target="browsesection"
                > Browse our portfolio</UncontrolledTooltip>
                  </DropdownToggle>
  
                  <DropdownMenu className="dropdown-with-icons dropdown-black " style={{color:"#f2f2f2"}}>
                    <DropdownItem>
                     <Link to="/portfolio/">      
                    <Button id="profile"
                    className="nav-link m-1 d-flex d-lg-block justify-content-center"
                    color="default"
                    
                  >
                    <FontAwesomeIcon icon={['fas', 'user-friends']} color="white" size="lg"  />  Work Portfolio
                    <UncontrolledTooltip
                  placement="bottom"
                  target="profile"
                >Lets see what we work on</UncontrolledTooltip>
                  </Button>
                  </Link>
                    </DropdownItem>
                    <DropdownItem>
                     <Link to="/projects/">      
                    <Button id="projects"
                    className="nav-link m-1 d-flex d-lg-block justify-content-center"
                    color="default"
                    
                  >
                    <FontAwesomeIcon icon={['fas', 'users-cog']} color="white" size="lg"  />  Projects
                    <UncontrolledTooltip
                  placement="bottom"
                  target="projects"
                >See our Live/Past Projects</UncontrolledTooltip>
                  </Button>
                  </Link>
                    </DropdownItem>
                    <DropdownItem>
                     <Link to="/clients/">      
                    <Button id="clients"
                    className="nav-link m-1 d-flex d-lg-block justify-content-center"
                    color="default"
                    
                  >
                    <FontAwesomeIcon icon={['fas', 'users']} color="white" size="lg"  />  Clients
                    <UncontrolledTooltip
                  placement="bottom"
                  target="clients"
                >See our happy clients.</UncontrolledTooltip>
                  </Button>
                  </Link>
                    </DropdownItem>

  
                    
                  </DropdownMenu>
                </UncontrolledDropdown>
                {/* <NavItem id="viewproject">
                  <Button
                    className="nav-link d-none d-lg-block"
                    color="success"
                    onClick={this.scrollToProjects}
                  >
                    <i className="tim-icons icon-atom" /> View Projects
                    <UncontrolledTooltip
                  placement="bottom"
                  target="viewproject"
                > Have a look at some of my amazing projects.</UncontrolledTooltip>
                  </Button>
                </NavItem> */}
                <NavItem id="downloadvc" className="m-1">
                  <Button
                    className="nav-link  d-flex d-lg-block justify-content-center"
                    color="warning"
                    href="https://drive.google.com/file/d/1ftFiIOos4eDVXNe5I4xvtZ5EKWw8i9jn/view?usp=sharing"
                    target="_blank"
                  >
                    <FontAwesomeIcon icon={['fas', 'address-card']} color="white" size="lg" className="mr-1" />  
                     Contact Us
                    <UncontrolledTooltip
                  placement="bottom"
                  target="downloadvc"
                > Download my CV for your future reference.</UncontrolledTooltip>
                  </Button>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      );
    }
  }
export default PagesNavbar;
