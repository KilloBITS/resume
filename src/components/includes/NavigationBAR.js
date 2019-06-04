import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class MobileMenuBtn extends React.Component{
  render(){
    return <div className="mobileMenuBtn" id="mobileMenuBtnFade">

    </div>
  }
}

class NavigationBAR extends React.Component {
  render(){
    return <div className="navBar">
      <div className="navTop">
        <MobileMenuBtn />
      </div>
      <div className="navCenter">
        <div className="centerMinBtnBack activeBarBtn"><FontAwesomeIcon icon={['fas', 'home']}/></div>
        <div className="centerMinBtnBack"><FontAwesomeIcon icon={['fas', 'info']}/></div>
        <div className="centerMinBtnBack"><FontAwesomeIcon icon={['fas', 'atom']}/></div>
        <div className="centerMinBtnBack"><FontAwesomeIcon icon={['fas', 'blog']}/></div>
        <div className="centerMinBtnBack"><FontAwesomeIcon icon={['fas', 'project-diagram']}/></div>
        <div className="centerMinBtnBack"><FontAwesomeIcon icon={['fas', 'thumbs-up']}/></div>
        <div className="centerMinBtnBack"><FontAwesomeIcon icon={['fas', 'paper-plane']}/></div>
      </div>
      <div className="navBottom"></div>
    </div>
  }
}

export default NavigationBAR;
