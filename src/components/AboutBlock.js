import React from 'react';
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';
import AbsoluteImage from './includes/absoluteImage.js';

class AboutLeft extends React.Component {
  render(){
    return <div className="aboutBlockData">
    <Fade right>
    <div className="rect_class rect_1"></div>
    <div className="rect_class rect_2"></div>
      <p>
        {this.props.text}
      </p>
      <Fade right>
        <AbsoluteImage url="http://pluspng.com/img-png/satellite-png-image-40933-529.png" MW="250px" typePosition="left" left="calc(100% - 160px)" top="calc(100% - 10px)" dopClass="rectAnimImg"/>
      </Fade>
    </Fade>
    </div>
  }
}

class PaperPlane extends React.Component {
  render(){
    return <div className="animationPaperPlane">
      <svg viewBox="0 0 3387 1270">
        <path id="planePath" className="planePath" d="M-226 626c439,4 636,-213 934,-225 755,-31 602,769 1334,658 562,-86 668,-698 266,-908 -401,-210 -893,189 -632,630 260,441 747,121 1051,91 360,-36 889,179 889,179"/>

        <animateMotion xlinkHref="#plane" dur="10s" repeatCount="indefinite" rotate="auto">
          <mpath xlinkHref="#planePath" />
        </animateMotion>
      </svg>
    </div>
  }
}

class AboutRight extends React.Component {
  render(){
    return <Fade top>
    <div className="aboutBlockData">
      <div className="centerLine" />
    </div>
    </Fade>
  }
}

class AboutBlock extends React.Component {
  render() {
    return <div className="block aboutBlock" id={this.props.id}>
      <div className="block_title">
        <Bounce>
          <h1 style={{color: "white"}} className="whiteBefore">Обо мне</h1>
        </Bounce>
        <div className="shadowTitle">Обо мне</div>
      </div>
      <div className="aboutContent">
        <div className="centerBlock">
          <AboutLeft text={this.props.text} />
          <AboutRight />
        </div>
      </div>
      <PaperPlane />
    </div>
  }
}

export default AboutBlock;
