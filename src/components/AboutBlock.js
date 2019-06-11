import React from 'react';
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AbsoluteImage from './includes/absoluteImage.js';


class AboutLeft extends React.Component {
  constructor(props){
    super(props)
  }
  componentDidMount () {
    this.toggleAboutText = () => {
      let aboutBlockData = document.getElementById('aboutBlockData');
      let opoenFullAbout = document.getElementById('opoenFullAbout');

      if(aboutBlockData.className === 'aboutBlockData'){
        aboutBlockData.className = 'aboutBlockData openAbout';
        opoenFullAbout.innerHTML = 'roll up';
      }else{
        aboutBlockData.className = 'aboutBlockData';
        opoenFullAbout.innerHTML = 'Read completely';
      }
    }
  }
  render(){
    return <div className="aboutBlockData" id="aboutBlockData">
    <Fade right>
    <div className="rect_class rect_1"></div>
    <div className="rect_class rect_2"></div>
      <p>
        {this.props.text}
      </p>
      <div className="opoenFullAbout" id="opoenFullAbout" onClick={this.toggleAboutText}>
        Read completely
      </div>
      <Fade right>
        <AbsoluteImage url="http://pngriver.com/wp-content/uploads/2018/04/Download-Satellite-PNG-Clipart.png" MW="250px" typePosition="left" left="calc(100% - 160px)" top="calc(100% - 10px)" dopClass="rectAnimImg"/>
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
    return <div className="aboutBlockData">
      <Fade top>
      <div className="centerLine" />
      </Fade>

      <div className="hobbiesBlock">
        <div className="myHobbie"><FontAwesomeIcon icon={['fas','drumstick-bite']} /></div>
        <div className="myHobbie"><FontAwesomeIcon icon={['fas','gamepad']} /></div>
        <div className="myHobbie"><FontAwesomeIcon icon={['fas','cocktail']} /></div>
        <div className="myHobbie"><FontAwesomeIcon icon={['fas','laptop-code']} /></div>
        <div className="myHobbie"><FontAwesomeIcon icon={['fas','umbrella-beach']} /></div>
        <div className="myHobbie"><FontAwesomeIcon icon={['fas','music']} /></div>
        <div className="myHobbie"><FontAwesomeIcon icon={['fas','feather-alt']} /></div>
      </div>

      <div className="downloadableResume">
        <div className="infoResume">
          <div className="infoResumeSize">File size: 1.1MB</div>
          <div className="infoResumeFormat">Format file: PDF</div>
        </div>
        <a href={this.props.resume} target="_blank">
          <div className="downloadBtn">
            <FontAwesomeIcon icon={['fas','file-download']} />
            <span>download</span>
          </div>
        </a>
      </div>


    </div>

  }
}

class AboutBlock extends React.Component {
  render() {
    return <div className="block aboutBlock" id={this.props.id}>
      <div className="block_title">
        <Bounce>
          <h1 style={{color: "white"}} className="whiteBefore">About</h1>
        </Bounce>
        <div className="shadowTitle">About</div>
      </div>
      <div className="aboutContent">
        <div className="centerBlock">
          <AboutLeft text={this.props.text} />
          <AboutRight resume={this.props.resume}/>
        </div>
      </div>
    </div>
  }
}

export default AboutBlock;
