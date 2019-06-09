import React from 'react';
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
import AbsoluteImage from './includes/absoluteImage.js';

class RectsBtn extends React.Component {
  render(){
    return <div className="Blobs_data">
      <div className="row animate-multiple">

      <Fade left>
      <div className="col-md-3 col-6 animated fadeInUp">
        <h4 className="item-1">
          <a href="#">
            <span>Web Development</span>
          </a>
        </h4>
      </div>
      </Fade>
      <Fade top>
        <div className="col-md-3 col-6 animated fadeInUp">
          <h4 className="item-2">
            <a href="#">
              <span>Desktop development</span>
            </a>
          </h4>
        </div>
      </Fade>
      <Fade bottom>
        <div className="col-md-3 col-6 animated fadeInUp">
          <h4 className="item-3">
            <a href="#">
              <span>Design</span>
            </a>
          </h4>
        </div>
      </Fade>
      <Fade right>
        <div className="col-md-3 col-6 animated fadeInUp">
          <h4 className="item-4">
            <a href="#">
              <span>Support and update</span>
            </a>
          </h4>
        </div>
      </Fade>
      </div>
    </div>
  }
}

class ProgressBars extends React.Component {
  render(){
    return <div className="ProgressBlock">
    <Fade left>
      <AbsoluteImage url="https://avatanplus.com/files/resources/mid/5845ade668b67158d02f4c1d.png" MW="450px" typePosition="left" left="-400px" top="-120px" dopClass="rectAnimImg"/>
    </Fade>
      <Flip top>
      <div className="defaultLine">
        <span>Programs langs.</span>
      </div>
      </Flip>
      <Fade left>
      <div className="progressLine">
        <span>Node.js</span>
        <div className="progressBar">
          <div className="isProgress" style={{width: '72%'}}></div>
        </div>
      </div>
      </Fade>
      <Fade right>
      <div className="progressLine">
        <span>JavaScript</span>
        <div className="progressBar">
          <div className="isProgress" style={{width: '77%'}}></div>
        </div>
      </div>
      </Fade>
      <Fade left>
      <div className="progressLine">
        <span>C#</span>
        <div className="progressBar">
          <div className="isProgress" style={{width: '77%'}}></div>
        </div>
      </div>
      </Fade>
      <Fade right>
      <div className="progressLine">
        <span>Delphi</span>
        <div className="progressBar">
          <div className="isProgress" style={{width: '77%'}}></div>
        </div>
      </div>
      </Fade>
      <Flip top>
      <div className="defaultLine">
        <span>Freamworks and libs</span>
      </div>
      </Flip>
      <Fade left>
      <div className="progressLine">
        <span>React</span>
        <div className="progressBar">
          <div className="isProgress" style={{width: '63%'}}></div>
        </div>
      </div>
      </Fade>
      <Fade right>
      <div className="progressLine">
        <span>jQuery</span>
        <div className="progressBar">
          <div className="isProgress" style={{width: '85%'}}></div>
        </div>
      </div>
      </Fade>
      <Fade left>
      <div className="progressLine">
        <span>OpenLayers</span>
        <div className="progressBar">
          <div className="isProgress" style={{width: '85%'}}></div>
        </div>
      </div>
      </Fade>
      <Fade right>
      <div className="progressLine">
        <span>MapBox</span>
        <div className="progressBar">
          <div className="isProgress" style={{width: '77%'}}></div>
        </div>
      </div>
      </Fade>
      <Fade left>
      <div className="progressLine">
        <span>Bootstrap</span>
        <div className="progressBar">
          <div className="isProgress" style={{width: '70%'}}></div>
        </div>
      </div>
      </Fade>
      <Fade right>
      <div className="progressLine">
        <span>Font Awesome</span>
        <div className="progressBar">
          <div className="isProgress" style={{width: '93%'}}></div>
        </div>
      </div>
      </Fade>
      <Flip top>
      <div className="defaultLine">
        <span>Syles</span>
      </div>
      </Flip>
      <Fade left>
      <div className="progressLine">
        <span>CSS</span>
        <div className="progressBar">
          <div className="isProgress" style={{width: '70%'}}></div>
        </div>
      </div>
      </Fade>
      <Fade right>
      <div className="progressLine">
        <span>LESS</span>
        <div className="progressBar">
          <div className="isProgress" style={{width: '65%'}}></div>
        </div>
      </div>
      </Fade>
      <Flip top>
      <div className="defaultLine">
        <span>Others</span>
      </div>
      </Flip>
      <Fade left>
      <div className="progressLine">
        <span>Git</span>
        <div className="progressBar">
          <div className="isProgress" style={{width: '54%'}}></div>
        </div>
      </div>
      </Fade>
      <Fade right>
      <div className="progressLine">
        <span>HTML5</span>
        <div className="progressBar">
          <div className="isProgress" style={{width: '90%'}}></div>
        </div>
      </div>
      </Fade>
    </div>
  }
}

class SkillsBlock extends React.Component {
  render() {
    return <div className="block skillsBlock" id={this.props.id}>
      <div className="block_title">
        <Bounce>
          <h1 style={{color: "white"}} className="whiteBefore">Навыки и технологии</h1>
        </Bounce>
        <div className="shadowTitle">Навыки и технологии</div>
      </div>
      <RectsBtn />
      <ProgressBars/>

    </div>
  }
}

export default SkillsBlock;
