
import React from "react";
// import classnames from "classnames";
// // plugin that creates slider
// import Slider from "nouislider";
// // react plugin used to create switch buttons
// import Switch from "react-bootstrap-switch";

// reactstrap components
import {
  // Button,
  // Label,
  // FormGroup,
  // Input,
  // InputGroupAddon,
  // InputGroupText,
  // InputGroup,
  Container,
  Row,
  // TabPane,
  Col,
  Table,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  ListGroupItem,
  ListGroup,

} from "reactstrap";
import { CardImg,CardText, Button } from 'reactstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import draft from "../../assets/img/draft.svg"
import reconstruction from "../../assets/img/reconstruction.svg"
import automation from "../../assets/img/automation.svg"
import greenhome from "../../assets/img/greenbuilding.svg"
import Carousel from '../Carousel/Carousel'
class Basics extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputFocus: false
    };
  }
  componentDidMount() {
    // var slider1 = this.refs.slider1;
    // var slider2 = this.refs.slider2;
    // Slider.create(slider1, {
    //   start: [40],
    //   connect: [true, false],
    //   step: 1,
    //   range: { min: 0, max: 100 }
    // });
    // Slider.create(slider2, {
    //   start: [20, 60],
    //   connect: [false, true, false],
    //   step: 1,
    //   range: { min: 0, max: 100 }
    // });
  }
  render() {
    const params = {
      effect: 'coverflow',
      grabCursor: true,
      freeMode: true,
      loop: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
      },autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
    }
    //   navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev'
    //   },
    //   renderNextButton: () => <button className="swiper-button-next btn btn-simple btn-round btn-icon"><FontAwesomeIcon icon={['fas', 'less-than']} color="info" size="sm"  /></button>,
    //   renderPrevButton: () => <button className="swiper-button-prev btn btn-simple btn-round btn-icon"><FontAwesomeIcon icon={['fas', 'greater-than']} color="info" size="sm"  /></button>,
    // }
    
    return (
      
      <div >

            <section className="section" id="skills-section">
              <img
                alt="..."
                className="path"
                src={require("../../assets/img/path4.png")}
              />
              <Container>
                <Row className="row-grid justify-content-between">
                <div className="col-md-4">
                <Col>
                  <hr className="line-primary" />
                  <h1 style={{fontSize:"3rem"}}>
                    Our{" "}
                    <span className="text-primary">Services</span>
                  </h1>
                  <h1 style={{fontSize:"2rem"}}>
                    <span className="text-light">   Diversified service, Simplified quality</span>
                  </h1>
               
                </Col>

              </div>
                  <Col md="8" style={{margin: "auto"}} >
                  <Row >


                  <Carousel settings={params}>
                  <Card style={{width: '20rem'}}>
                    <CardHeader> <Row>
                              <Col md="4" xs="5">
                                <div className="icon-big text-center icon-warning">
                                  <img src={draft} className="img-fluid" alt="React Logo"></img>
                                </div>
                              </Col>
                              <Col md="8" xs="7">
                                 <h3>Str. Design Consultancy</h3>
                             </Col>
                            </Row>
                    </CardHeader>
                    <CardBody>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content</CardText>
                    </CardBody>
                </Card>

                <Card style={{width: '20rem'}}>
                    <CardHeader> <Row>
                              <Col md="4" xs="5">
                                <div className="icon-big text-center icon-warning">
                                  <img src={automation} className="img-fluid" alt="React Logo"></img>
                                </div>
                              </Col>
                              <Col md="8" xs="7">
                                 <h3>Smart Home Automation </h3>
                             </Col>
                            </Row>
                    </CardHeader>
                    <CardBody>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content</CardText>
                    </CardBody>
                </Card>

                <Card style={{width: '20rem'}}>
                    <CardHeader> <Row>
                              <Col md="4" xs="5">
                                <div className="icon-big text-center icon-warning">
                                  <img src={reconstruction}  className="img-fluid" alt="React Logo"></img>
                                </div>
                              </Col>
                              <Col md="8" xs="7">
                                 <h3>Retrofitting Consultancy</h3>
                             </Col>
                            </Row>
                    </CardHeader>
                    <CardBody>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content</CardText>
                    </CardBody>
                </Card>


                <Card style={{width: '20rem'}}>
                    <CardHeader> <Row>
                              <Col md="4" xs="5">
                                <div className="icon-big text-center icon-warning">
                                  <img src={greenhome} className="img-fluid" alt="React Logo"></img>
                                </div>
                              </Col>
                              <Col md="8" xs="7">
                                 <h3>Green Building planning</h3>
                             </Col>
                            </Row>
                    </CardHeader>
                    <CardBody>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's content</CardText>
                    </CardBody>
                </Card>
                
                   </Carousel>








                    
                  {/* <Col className="px-2 py-2 " lg="6" sm="12" >
                        <Card className="card-stats">
                          <CardBody>
                            <Row>
                              <Col md="4" xs="5">
                                <div className="icon-big text-center icon-warning">
                                  <img src={draft} className="img-fluid" alt="React Logo"></img>
                                </div>
                              </Col>
                              <Col md="8" xs="7">
                                <div className="numbers">
                                  <CardTitle tag="p">Str. Design Consultancy</CardTitle>
                                  <p />
                                 
                                </div>
                              </Col>
                            </Row>
                          </CardBody>
                        </Card>
                      </Col>
                  <Col className="px-2 py-2" lg="6" sm="12">
                        <Card className="card-stats">
                          <CardBody>
                            <Row>
                              <Col md="4" xs="5">
                                <div className="icon-big text-center icon-warning">
                                <img src={automation} className="img-fluid" alt="MongoDB Logo"></img> 
                                </div>
                              </Col>
                              <Col md="8" xs="7">
                                <div className="numbers">
                                  <CardTitle tag="p">Smart Home Automation </CardTitle>
                                  <p />
                                 
                                </div>
                              </Col>
                            </Row>
                          </CardBody>
                        </Card>
                      </Col> */}

                    </Row>
                    {/* <Row>
                      <Col className="px-2 py-2" lg="6" sm="12">
                        
                        <Card className="card-stats">
                          <CardBody>
                            <Row>
                              <Col md="4" xs="5">
                                <div className="icon-big text-center icon-warning">
                                <img src={reconstruction} className="img-fluid" alt="Node JS Logo"></img> 
                                </div>
                              </Col>
                              <Col md="8" xs="7">
                                <div className="numbers">
                                  <CardTitle tag="p">Retrofitting Consultancy</CardTitle>
                                  <p />
                                 
                                </div>
                              </Col>
                            </Row>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col className="px-2 py-2" lg="6" sm="12">
                        <Card className="card-stats">
                          <CardBody>
                            <Row>
                              <Col md="4" xs="5">
                                <div className="icon-big text-center icon-warning">
                                <img src={greenhome} className="img-fluid" alt="Angular Logo"></img>
                                </div>
                              </Col>
                              <Col md="8" xs="7">
                                <div className="numbers">
                                  <CardTitle tag="p">Green Building planning</CardTitle>
                                  <p />
                                  
                                </div>
                              </Col>
                            </Row>
                          </CardBody>
                        </Card>
                      </Col>
                    </Row> */}
                  </Col>
                </Row>
              </Container>
            </section>


          {/* <section id="education-section" className="section section-lg " style={{marginTop:"4rem"}}>

            <Container>
              <Row>
                <Col md="6">
                  <hr className="line-primary" />
                  <h1>
                    Education{" "}
                    <span className="text-primary">Details</span>
                  </h1>
                </Col>
              </Row>
              <Row>
                <Col >
                  <Card className="card-coin card-plain">
                    <CardBody>
                      <Row>
                        <Col className="text-center" md="12">
                          <hr className="line-primary" />
                        </Col>
                      </Row>
                      <Row className="p-5">
                          <Table >
                            <thead className="text-primary">
                              <tr>
                                <th className="header">DEGREE</th>
                                <th className="header">INSTITUTE NAME</th>
                                <th className="header">YEAR</th>
                                <th className="header">CGPA</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>Bachelor of Technology - Information Technology</td>
                                <td>Jaypee University of Information Technology</td>
                                <td>2020</td>
                                <td>8 . 9 {"  CGPA"}</td>
                              </tr>
                              <tr>
                                <td>Higher Secondary School</td>
                                <td>Sanskar School, Jaipur</td>
                                <td>2016</td>
                                <td>84 . 6 {"  %"}</td>
                              </tr>
                              <tr>
                                <td>Secondary School</td>
                                <td>Sanskar School, Jaipur</td>
                                <td>2014</td>
                                <td>9 . 2 {"  CGPA"}</td>
                              </tr>
                            </tbody>
                          </Table>
                 
                      
                      </Row>
                    </CardBody>
                    <CardFooter className="text-center">
                    <hr className="line-primary" />
                    </CardFooter>
                  </Card>
                </Col>
              </Row>
            </Container>
          </section>
           */}

          {/* <Container>
        
          <div className="space-70" />

          <div className="space-70" />
          <Row id="checkRadios">
            <Col lg="3" sm="6">
              <p className="category">Checkboxes</p>
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" />
                  <span className="form-check-sign" />
                  Unchecked
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input defaultChecked type="checkbox" />
                  <span className="form-check-sign" />
                  Checked
                </Label>
              </FormGroup>
              <FormGroup check disabled>
                <Label check>
                  <Input disabled type="checkbox" />
                  <span className="form-check-sign" />
                  Disabled Unchecked
                </Label>
              </FormGroup>
              <FormGroup check disabled>
                <Label check>
                  <Input defaultChecked disabled type="checkbox" />
                  <span className="form-check-sign" />
                  Disabled Checked
                </Label>
              </FormGroup>
            </Col>
            <Col lg="3" sm="6">
              <p className="category">Radios</p>
              <FormGroup check className="form-check-radio">
                <Label check>
                  <Input
                    defaultValue="option1"
                    id="exampleRadios1"
                    name="exampleRadios"
                    type="radio"
                  />
                  <span className="form-check-sign" />
                  Radio is off
                </Label>
              </FormGroup>
              <FormGroup check className="form-check-radio">
                <Label check>
                  <Input
                    defaultChecked
                    defaultValue="option2"
                    id="exampleRadios1"
                    name="exampleRadios"
                    type="radio"
                  />
                  <span className="form-check-sign" />
                  Radio is on
                </Label>
              </FormGroup>
              <FormGroup check className="form-check-radio" disabled>
                <Label check>
                  <Input
                    defaultValue="option3"
                    disabled
                    id="exampleRadios2"
                    name="exampleRadios1"
                    type="radio"
                  />
                  <span className="form-check-sign" />
                  Disabled radio is off
                </Label>
              </FormGroup>
              <FormGroup check className="form-check-radio" disabled>
                <Label check>
                  <Input
                    defaultChecked
                    defaultValue="option4"
                    disabled
                    id="exampleRadios2"
                    name="exampleRadios1"
                    type="radio"
                  />
                  <span className="form-check-sign" />
                  Disabled radio is on
                </Label>
              </FormGroup>
            </Col>
            <Col lg="3" sm="6">
              <p className="category">Toggle Buttons</p>
              <Switch offColor="" offText="" onColor="" onText="" />
              <br />
              <Switch defaultValue={false} offColor="" onColor="" />
            </Col>
            <Col lg="3" sm="6">
              <p className="category">Sliders</p>
              <div className="slider" ref="slider1" />
              <br />
              <div className="slider slider-info mb-3" ref="slider2" />
            </Col>
          </Row>
        </Container> */}
      </div>
    );
  }
}

export default Basics;
