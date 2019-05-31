import React from 'react';
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';
import Rocket from './includes/rocket.js';
import Devices from './includes/devices.js';

class ReactAnimLogo extends React.Component {
  render() {
    return <div className="svg-container">
        <svg version="1.1" x="0px" y="0px" viewBox="0 0 400 400" enableBackground="new 0 0 400 400">
        <circle fill="#90c05d" cx="200" cy="200" r="139"/>
        <path className="atom-1" fill="none" stroke="#FFFFFF" strokeWidth="8" strokeMiterlimit="10" d="M231.7,200c0,17.4-1.7,88-31.7,88
          s-31.7-70.6-31.7-88s1.7-88,31.7-88S231.7,182.6,231.7,200z"/>
          <circle className="circle-1" fill="#F04F4D" cx="0" cy="0" r="7.3"/>
        <path className="atom-2" fill="none" stroke="#FFFFFF" strokeWidth="8" strokeMiterlimit="10" d="M216.1,227.7c-15,8.9-76.6,43.4-91.9,17.6
          s44.6-63.2,59.6-72.1s76.6-43.4,91.9-17.6S231.1,218.8,216.1,227.7z"/>
          <circle className="circle-2" fill="#F04F4D" cx="0" cy="0" r="7.3"/>
        <path className="atom-3" fill="none" stroke="#FFFFFF" strokeWidth="8" strokeMiterlimit="10" d="M183.9,227.7c15,8.9,76.6,43.4,91.9,17.6
          s-44.6-63.2-59.6-72.1s-76.6-43.4-91.9-17.6S168.9,218.8,183.9,227.7z"/>
        <circle className="circle-3" fill="#F04F4D" cx="0" cy="0" r="7.3"/>
        <circle fill="#1A4C59" cx="200" cy="202.5" r="16"/>
        </svg>
      </div>
  }
}

class RectsBtn extends React.Component {
  render(){
    return <div className="Blobs_data">
      <div className="row animate-multiple">

      <Bounce>
      <div className="col-md-3 col-6 animated fadeInUp">
        <h4 className="item-1">
          <a href="#">
            <span>Websites</span>
          </a>
        </h4>
      </div>
      </Bounce>



      <Bounce>
        <div className="col-md-3 col-6 animated fadeInUp">
          <h4 className="item-2">
            <a href="#">
              <span>Desctop</span>
            </a>
          </h4>
        </div>
      </Bounce>


      <Bounce>
        <div className="col-md-3 col-6 animated fadeInUp">
          <h4 className="item-3">
            <a href="#">
              <span>E-Commerce</span>
            </a>
          </h4>
        </div>
      </Bounce>

      <Bounce>
        <div className="col-md-3 col-6 animated fadeInUp">
          <h4 className="item-4">
            <a href="#">
              <span>Design</span>
            </a>
          </h4>
        </div>
      </Bounce>

      </div>
    </div>
  }
}


class SkillsBlock extends React.Component {
  render() {
    return <div className="block skillsBlock">
      <Fade left>
        <ReactAnimLogo />
      </Fade>
      <div className="block_title">
        <Bounce><h1 style={{color: "white"}} className="whiteBefore">Навыки и технологии</h1></Bounce>
      </div>
      <RectsBtn />


    </div>
  }
}

export default SkillsBlock;
