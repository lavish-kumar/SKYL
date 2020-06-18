import React from "react"
import { Link } from "gatsby"
import Typed from "../components/Typed/Typed"
import Logo from "../components/Loader/Loader"
import headerImage from '../images/about.svg'
import ecology from "../images/ecology.svg";
import ecoanalysis from "../images/ecoanalysis.svg";
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
import AlternateHeader from "../components/AlternateHeader/AlternateHeader"
import Construction from "../images/Construction.svg"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import InfoGraphic from "../components/InfoGraphics/InfoGraphics"
import Carousel from "../components/Carousel/Carousel"
import Loader from "../components/Loader/Loader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class Index extends React.Component {


  componentDidMount() {
    document.body.classList.add("index-page");
  }
  componentWillUnmount() {
    document.body.classList.toggle("index-page");
  }


  render(){
   
    

    return (
    <>
  <Layout>
    <SEO title="Home" />
    <AlternateHeader>
      
      <Container >

        
      <div className="section">

      <div className=" m-2 py-5 row row-grid justify-content-between align-items-center text-left">


      <div className="col-md-6 order-sm-1 order-2 fakeScreen" style={{marginTop:"5rem",background:"rgba(0,0,0,0.6)"}} >
      <h3 className="m-0 bannerText1" ><strong className=" text-warning">About</strong> <strong className=" text-white">Us</strong> <br/></h3>
            <h2 className="title text-left">Founded in 2019 <br/>We are an upcoming Structure Design Innovation company Located at Jaipur, India</h2>
        </div>

        <div className="col-md-6 order-1 p-1" style={{marginTop:"3rem"}} >    
        <div className="logo">
          <div className="logo-image">

            {/* <img class-name="img-fluid" src={headerImage} alt="" /> */}
            </div>
            </div>
        </div>


      </div>
      <div>
      <div className="arrow bounce">
                <a  onClick={this.scrollToSkills} href="JavaScript:void(0)"> <FontAwesomeIcon icon={['fas', 'arrow-down']} color="white" size="2x"  /></a>
      </div>
      </div>
                  
      </div>
      </Container>
   </AlternateHeader>

   <section className="section section-lg section-safe">

      <Container>
        <Row className="align-items-center text-left">
          <Col sm="12" lg="6">
          <h1 className="title">What<br /><strong className="text-info">we crave for</strong></h1>
          <p className="text-white description">Our functional philosophies are based on responsibility towards the planet & its ecosystem, so as to offer design solutions that are not only specific, but also sensitive, thoughtful, and humane</p>
          </Col>
          <Col sm="12" lg="6">
          <img
                alt="..."
                className="path"
                src={require("../assets/img/path3.png")}
              />
          <img src={ecology}/>
          </Col>
        </Row>
        </Container>
        </section>
        <section className="section section-lg section-safe">
        <Container>
        <Row className="align-items-center text-left">
        <Col sm="12" lg="6">
        <img
                alt="..."
                className="path"
                src={require("../assets/img/path5.png")}
              />
          <img src={ecoanalysis}/>
          </Col>
          <Col sm="12" lg="6">
          <h1 className="title">Go<br /><strong className="text-info">Green</strong></h1>
          <p className="text-white description">After meticulously going through the current common planning, designing & construction techniques, the idea to create an ecofriendly yet futuristic infrastructure philosophy was adopted that would attract the eye of the beholder along with flourishing the planet making lives and designs better</p>
          </Col>

        </Row>
      </Container>
   </section>
    


   <section className="section section-lg section-safe">

   <div className="team-5"><div className="container"><div className="row"><div className="ml-auto mr-auto text-center col-md-8"><h2 className="title">The Executive Team</h2><h4 className="description">Our team is committed to participate in dedicated serving. Serving our clients with due diligence, while exploring new styles, techniques and strategies, is what has always been our primary objective. We are a professional design lab /design solution for the architectural challenges, while also carrying out extensive research & inventing sustainable methodologies to build a positive living environment.</h4></div></div><div className="row"><div className="col-md-4"><div className="card-profile profile-bg card"><div className="card-header" style={{backgroundImage: 'url("/blk-design-system-pro-react/static/media/ben-konfrst.7c1acc7d.jpg")'}}><div className="card-avatar"><a href="#pablo"><img alt="..." className="img img-raised" src="/blk-design-system-pro-react/static/media/ryan.bac7ae9b.jpg" /></a></div></div><div className="card-body"><h3 className="card-title">Byron Reese</h3><h6 className="category text-primary">Credit Analyst</h6><p className="card-description">Multi-Cloud Object Storage and Data Mobility: A GigaOm Market Landscape Report has been announced...</p></div><div className="card-footer"><div className="follow float-left"><a href="#pablo" className="btn-simple btn btn-primary btn-sm"><i className="tim-icons icon-check-2 mr-1" />Following</a></div><div className="d-inline float-right d-md-block"><a href="#pablo" className="btn-icon btn-round mr-1 btn btn-dribbble"><i className="fab fa-dribbble" /></a><a href="#pablo" className="btn-icon btn-round mr-1 btn btn-linkedin"><i className="fab fa-linkedin" /></a><a href="#pablo" className="btn-icon btn-round btn btn-behance"><i className="fab fa-behance" /></a></div></div></div></div><div className="col-md-4"><div className="card-profile profile-bg card"><div className="card-header" style={{backgroundImage: 'url("/blk-design-system-pro-react/static/media/ruvim-noga.c20c67af.jpg")'}}><div className="card-avatar"><a href="#pablo"><img alt="..." className="img img-raised" src="/blk-design-system-pro-react/static/media/lora.b14640a4.jpg" /></a></div></div><div className="card-body"><h3 className="card-title">Melanie Paisley</h3><h6 className="category text-primary">Writer</h6><p className="card-description">Over the years, advancement in CRM technology has reshaped the way SMBs and SMEs manage their workflows...</p></div><div className="card-footer"><div className="follow float-left"><a href="#pablo" className="btn btn-primary btn-sm">Follow</a></div><div className="d-inline float-right d-md-block"><a href="#pablo" className="btn-icon btn-round mr-1 btn btn-dribbble"><i className="fab fa-dribbble" /></a><a href="#pablo" className="btn-icon btn-round mr-1 btn btn-linkedin"><i className="fab fa-linkedin" /></a><a href="#pablo" className="btn-icon btn-round btn btn-behance"><i className="fab fa-behance" /></a></div></div></div></div><div className="col-md-4"><div className="card-profile profile-bg card"><div className="card-header" style={{backgroundImage: 'url("/blk-design-system-pro-react/static/media/sendra-martorell.36484533.jpg")'}}><div className="card-avatar"><a href="#pablo"><img alt="..." className="img img-raised" src="/blk-design-system-pro-react/static/media/ryan.4c450c46.png" /></a></div></div><div className="card-body"><h3 className="card-title">Jon Collins</h3><h6 className="category text-primary">Data Specialist</h6><p className="card-description">Scaling DevOps: Strategy &amp; Technical Considerations for Successful Enterprise DevOps</p></div><div className="card-footer"><div className="follow float-left"><a href="#pablo" className="btn-simple btn btn-primary btn-sm"><i className="tim-icons icon-check-2 mr-1" />Following</a></div><div className="d-inline float-right d-md-block"><a href="#pablo" className="btn-icon btn-round mr-1 btn btn-dribbble"><i className="fab fa-dribbble" /></a><a href="#pablo" className="btn-icon btn-round mr-1 btn btn-linkedin"><i className="fab fa-linkedin" /></a><a href="#pablo" className="btn-icon btn-round btn btn-behance"><i className="fab fa-behance" /></a></div></div></div></div></div></div></div>
          </section>

  </Layout>
  </>
  );
  }
  


}

export default Index
