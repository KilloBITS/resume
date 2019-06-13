import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const logotype = require('../../images/MyLogotype.png');

let toTopThisScroll = (e) => {
  if(document.body.offsetWidth > 800){
    document.getElementById('navBar').style.width = "28px";
  }else{
    document.getElementById('navBar').style.width = "0px";
  }
  document.getElementById('navCenter').className = 'navCenter';
  let toTopposition = document.getElementById(e.target.getAttribute('toyakor')).offsetTop;
  document.getElementById('scrollBlock').getElementsByTagName('div')[0].scrollTo({top: toTopposition, behavior: 'smooth'});
}

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
        <div className="centerMinBtnBack activeBarBtn" onClick={toTopThisScroll.bind(this)} toyakor="yakor_main">
          <FontAwesomeIcon icon={['fas', 'home']} toyakor="yakor_main" />
          <div className="openedMenuText" toyakor="yakor_main">To main</div>
        </div>
        <div className="centerMinBtnBack" onClick={toTopThisScroll.bind(this)} toyakor="yakor_about">
          <FontAwesomeIcon icon={['fas', 'info']}/>
          <div className="openedMenuText" toyakor="yakor_about">About me</div>
        </div>
        <div className="centerMinBtnBack" onClick={toTopThisScroll.bind(this)} toyakor="yakor_skills">
          <FontAwesomeIcon icon={['fas', 'atom']}/>
          <div className="openedMenuText" toyakor="yakor_skills">My skills</div>
        </div>
        <div className="centerMinBtnBack" onClick={toTopThisScroll.bind(this)} toyakor="yakor_block">
          <FontAwesomeIcon icon={['fas', 'blog']}/>
          <div className="openedMenuText" toyakor="yakor_block">Blog</div>
        </div>
        <div className="centerMinBtnBack" onClick={toTopThisScroll.bind(this)} toyakor="yakor_projects">
          <FontAwesomeIcon icon={['fas', 'project-diagram']}/>
          <div className="openedMenuText" toyakor="yakor_projects">Projects</div>
        </div>
        <div className="centerMinBtnBack" onClick={toTopThisScroll.bind(this)} toyakor="yakor_call">
          <FontAwesomeIcon icon={['fas', 'paper-plane']}/>
          <div className="openedMenuText" toyakor="yakor_call">Contacts</div>
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
