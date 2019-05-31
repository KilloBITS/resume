import React from 'react';
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';

const myPhoto = require('../images/myphoto.png')

class AboutLeft extends React.Component {
  render(){
    return <div className="aboutBlockData">
    <Fade left><img src={myPhoto} align="left" vspace="5" hspace="5"/></Fade>
    <Fade right>
      <p>
        <div className="rect_class rect_1"></div>
        <div className="rect_class rect_2"></div>
        {this.props.text}
      </p>
    </Fade>
    </div>
  }
}

class AboutRight extends React.Component {
  render(){
    return <div className="aboutBlockData"></div>
  }
}

class AboutBlock extends React.Component {
  render() {
    return <div className="block aboutBlock">
      <div className="block_title">
        <Bounce><h1 style={{color: "black"}}>Обо мне</h1></Bounce>
      </div>
      <div className="centerBlock">
        <AboutLeft text={this.props.text} />
        <AboutRight />
      </div>
    </div>
  }
}

export default AboutBlock;
