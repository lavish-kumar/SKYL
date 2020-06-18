import React from "react"
import { Link } from "gatsby"
import Typed from "../components/Typed/Typed"


import 
{   Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  ListGroupItem,
  ListGroup,
  Container,
  Row,
  Button,
  Col,
  CardSubtitle, CardText, CardLink } from 'reactstrap';
import PageHeader from "../components/PageHeader/PageHeadre"
import Construction from "../images/Construction.svg"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import InfoGraphic from "../components/InfoGraphics/InfoGraphics"
import Carousel from "../components/Carousel/Carousel"
import Loader from "../components/Loader/Loader";
class Index extends React.Component {


  componentDidMount() {
    document.body.classList.add("index-page");
  }
  componentWillUnmount() {
    document.body.classList.toggle("index-page");
  }


  render(){
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
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
    }

    const params2 = {
      
      grabCursor: true,
      freeMode: false,
      loop: true,
      spaceBetween: 15,
      centeredSlides: true,
      slidesPerView: 'auto',
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
    }

    return (
    <>
  <Layout>
    <SEO title="Home" />
    <PageHeader>
      
      <Container >
      <div className="section">
      <div className=" m-2 py-5 row row-grid justify-content-between align-items-center text-left">


        <div className="col-md-6 order-sm-1 order-2" >
        <div className="row p-3 ">
            <div className="col fakeScreen" style={{textAlign:"center"}}>
              <h1 className="text-white m-0 bannerText1"  ><strong>SKYLAND</strong> <br/></h1>
              <h1 className="text-white m-0 bannerText2" ><strong >INFRASTRUCTURE</strong> <br/>
            </h1>
            </div>
          </div>
          <div className="row p-3 text-center " >
            <div className="col fakeScreen">
           
              <div className="px-1">
                <Typed  textstyle="whitetext" ts="9"
                  strings={[
                    'Building Future with Ideas',
                    'Experience you can trust',
                    'Services you can count on',
                    'Client Focused. Results Driven',
                    'We dig what you dream',
                    'Let your dreams be our project',
                    'Renovation is our inspiration',
                    'Your happiness is under construction',
                    'Imagination and renovation'
                  ]}
                />

              </div>
            </div>
          </div>
        </div>

        <div className="col-md-6 order-1 p-1" style={{marginTop:"3rem"}} >

                <img 
                alt="..."
                className="img-fluid center"
                src={Construction}
              
              />
              
        </div>

      </div>
      <div>
      <div className="arrow bounce">
                <a  onClick={this.scrollToSkills} className="fa fa-arrow-down fa-2x" href="JavaScript:void(0)">{""}</a>
      </div>
      </div>
                  
      </div>
      </Container>
   </PageHeader>
   <InfoGraphic/>


   <section className="section section-lg section-safe">

            <Container>
              <Row className="row-grid justify-content-between">
                <Col md="5">
                <Loader/>
                  <Card className="card-stats bg-danger">
                    <CardBody>
                      <div className="justify-content-center">
                        <div className="numbers">
                          <CardTitle tag="p">100%</CardTitle>
                          <p className="card-category text-white">Positive Feedback 📄</p>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                  <Card className="card-stats bg-info">
                    <CardBody>
                      <div className="justify-content-center">
                        <div className="numbers">
                          <CardTitle tag="p">356</CardTitle>
                          <p className="card-category text-white">
                            Client Interactions 🤝
                          </p>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                  <Card className="card-stats bg-default">
                    <CardBody>
                      <div className="justify-content-center">
                        <div className="numbers">
                          <CardTitle tag="p">115</CardTitle>
                          <p className="card-category text-white">Happy Clients 😁</p>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
                <Col md="6">
                  <div className="px-md-5">
                    <hr className="line-success" />
                    <h3>Awesome features</h3>
                    <p>
                      The design system comes with three pre-built pages to help
                      you get started faster. You can change the text and images
                      and you're good to go.
                    </p>
                    <ul className="list-unstyled mt-5">
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div className="icon icon-success mb-2">
                            <i className="tim-icons icon-vector" />
                          </div>
                          <div className="ml-3">
                            <h6>Carefully crafted components</h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div className="icon icon-success mb-2">
                            <i className="tim-icons icon-tap-02" />
                          </div>
                          <div className="ml-3">
                            <h6>Amazing page examples</h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div className="icon icon-success mb-2">
                            <i className="tim-icons icon-single-02" />
                          </div>
                          <div className="ml-3">
                            <h6>Super friendly support team</h6>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
  

          <section className="section">
            {/* <img
              alt="..."
              className="path"
              src={require("../assets/img/path5.png")}
            /> */}

            <Container >
              <Row>
                <Col md="4">
                  <hr className="line-info" />
                  <h1>
                   Have a Look at {" "}<br/>
                    <span className="text-info">Our Projects</span>
                  </h1>
                </Col>
              </Row>
              <Row>

              <Carousel settings={params2}>
              <Col md="4">
                     <Card className="card-coin card-plain" style={{marginTop:"2rem"}}>

                    <CardBody>
                    <img
                        alt="..."
                        className="img-center img-fluid"
                        src={Construction}
                      />
                      <Row>
                        <Col className="text-center" md="12">
                          <h4 className="text-uppercase">Light Coin</h4>
                          <span>Plan</span>
                          <hr className="line-primary" />
                        </Col>
                      </Row>
                      <Row>
                        <ListGroup>
                          <ListGroupItem>50 messages</ListGroupItem>
                          <ListGroupItem>100 emails</ListGroupItem>
                          <ListGroupItem>24/7 Support</ListGroupItem>
                        </ListGroup>
                      </Row>
                    </CardBody>
                    <CardFooter className="text-center">
                      <Button className="btn-simple" color="primary">
                        Get plan
                      </Button>
                    </CardFooter>
                  </Card>
                  </Col>
                  <Col md="4">
                  <Card className="card-coin card-plain" style={{marginTop:"2rem"}}>

<CardBody>
<img
    alt="..."
    className="img-center img-fluid"
    src={Construction}
  />
  <Row>
    <Col className="text-center" md="12">
      <h4 className="text-uppercase">Light Coin</h4>
      <span>Plan</span>
      <hr className="line-primary" />
    </Col>
  </Row>
  <Row>
    <ListGroup>
      <ListGroupItem>50 messages</ListGroupItem>
      <ListGroupItem>100 emails</ListGroupItem>
      <ListGroupItem>24/7 Support</ListGroupItem>
    </ListGroup>
  </Row>
</CardBody>
<CardFooter className="text-center">
  <Button className="btn-simple" color="primary">
    Get plan
  </Button>
</CardFooter>
</Card>
</Col>
                  <Col md="4">
<Card className="card-coin card-plain" style={{marginTop:"2rem"}}>

<CardBody>
<img
    alt="..."
    className="img-center img-fluid"
    src={Construction}
  />
  <Row>
    <Col className="text-center" md="12">
      <h4 className="text-uppercase">Light Coin</h4>
      <span>Plan</span>
      <hr className="line-primary" />
    </Col>
  </Row>
  <Row>
    <ListGroup>
      <ListGroupItem>50 messages</ListGroupItem>
      <ListGroupItem>100 emails</ListGroupItem>
      <ListGroupItem>24/7 Support</ListGroupItem>
    </ListGroup>
  </Row>
</CardBody>
<CardFooter className="text-center">
  <Button className="btn-simple" color="primary">
    Get plan
  </Button>
</CardFooter>
</Card>
</Col>


   </Carousel>



                
              </Row>
            </Container>
          </section>



  </Layout>
  </>
  );
  }
  


}

export default Index
