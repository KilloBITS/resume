import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const logotype = require('../../images/MyLogotype.png');
class MobileMenuBtn extends React.Component{
  render(){
    return <div className="mobileMenuBtn" id="mobileMenuBtnFade" onClick={this.props.clickMethod}></div>
  }
}

class NavigationBAR extends React.Component {
  render(){
    return <div className="navBar" id="navBar">
      <div className="navTop">
        <MobileMenuBtn clickMethod={this.props.functions.toggleMenu}/>
      </div>
      <div className="navCenter" id="navCenter">
        <div className="menuLogotype" id="menuLogotype">
          <img src={logotype} />
        </div>
        <div className="centerMinBtnBack activeBarBtn">
          <FontAwesomeIcon icon={['fas', 'home']}/>
          <div className="openedMenuText">To main</div>
        </div>
        <div className="centerMinBtnBack">
          <FontAwesomeIcon icon={['fas', 'info']}/>
          <div className="openedMenuText">About me</div>
        </div>
        <div className="centerMinBtnBack">
          <FontAwesomeIcon icon={['fas', 'atom']}/>
          <div className="openedMenuText">My skills</div>
        </div>
        <div className="centerMinBtnBack">
          <FontAwesomeIcon icon={['fas', 'blog']}/>
          <div className="openedMenuText">Blog</div>
        </div>
        <div className="centerMinBtnBack">
          <FontAwesomeIcon icon={['fas', 'project-diagram']}/>
          <div className="openedMenuText">Projects</div>
        </div>
        <div className="centerMinBtnBack">
          <FontAwesomeIcon icon={['fas', 'paper-plane']}/>
          <div className="openedMenuText">Contacts</div>
        </div>

        <div className="centerMinBtnBack1 navBtnResume">
          <a href={this.props.resume} target="_blank">
            <FontAwesomeIcon icon={['fas', 'file-download']}/>
            <div className="openedMenuText">Resume</div>
          </a>
        </div>

      </div>
      <div className="navBottom"></div>
    </div>
  }
}

export default NavigationBAR;
