import React, { Component } from 'react';
import * as THREE from 'three';
import GLOBE from 'vanta/dist/vanta.globe.min.js'



class Birds extends Component {
  constructor() {
    super()
    this.vantaRef = React.createRef()
  }

  componentDidMount() {
    this.vantaEffect = 
    
    
    GLOBE({
      el: this.vantaRef.current,
     
  minHeight: 900.00,
  mouseControls: false,
  touchControls: false,
  minWidth: 200.00,
  zoom: 1.00,
  scale: 1.00,
  scaleMobile: 2.00,
      THREE: THREE
    })
  }

  // color: 0x5192f,
  // shininess: 26.00,
  // waveHeight: 11.00,
  // waveSpeed: 0.80,
  // zoom: 1.00
  componentWillUnmount() {
    if (this.vantaEffect) {
      this.vantaEffect.destroy()
    }
  }
  render() {
    return <div ref={this.vantaRef}>
      {this.props.children}
    </div>
  }
}

export default Birds;
