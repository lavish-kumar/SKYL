import React from "react";
import { Container } from "reactstrap";
import Vanata from "../Vanta/Vanta";
class PageHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clip_path:"clip-top"
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
        clip_path:"clip-scrolled"
      });
    } else if (
      document.documentElement.scrollTop < 100 ||
      document.body.scrollTop < 100
    ) {
      this.setState({
        clip_path:"clip-top"
      });
    }
  };

  render() {
    return (
      <div className={"page-header header-filter "+ this.state.clip_path}>
        <Vanata>
        <Container>
          {this.props.children}
        </Container>
        </Vanata>
      </div>
    );
  }
}

export default PageHeader;
