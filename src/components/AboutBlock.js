import React from 'react';
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';

class AboutLeft extends React.Component {
  render(){
    return <div className="aboutBlockData">
    <Fade right>
    <div className="rect_class rect_1"></div>
    <div className="rect_class rect_2"></div>
      <p>
        {this.props.text}
      </p>
    </Fade>
    </div>
  }
}

class AboutRight extends React.Component {
  render(){
    return <div className="aboutBlockData">
      <div className="centerLine" />
    </div>
  }
}

class AboutBlock extends React.Component {
  render() {
    return <div className="block aboutBlock">
      <div className="aboutContent">
        <div className="block_title">
          <Bounce><h1 style={{color: "white"}} className="whiteBefore">Обо мне</h1></Bounce>
        </div>
        <div className="centerBlock">
          <AboutLeft text={this.props.text} />
          <AboutRight />
        </div>
      </div>
    </div>
  }
}

export default AboutBlock;
