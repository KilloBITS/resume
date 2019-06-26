import React from 'react';
import functions from '../scripts/functions.js';
import Bounce from 'react-reveal/Bounce';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const footerLogo = require('../images/MyLogotype.png');

let toTopThisScroll = (e) => {
  let toTopposition = document.getElementById(e.target.getAttribute('toyakor')).offsetTop;
  document.getElementById('scrollBlock').getElementsByTagName('div')[0].scrollTo({top: toTopposition, behavior: 'smooth'});
  // document.getElementById('scrollBlock').getElementsByTagName('div')[0].scrollTo({top: 0, behavior: 'smooth'});
}

let parseMenu = (dataMenu, m) => {
  if(m){
    const menuBtn = dataMenu.map((comp, key) => <div key={key} onClick={toTopThisScroll.bind(this)} toyakor={comp.yakor} className="menu_btn" id={comp.id} def-title={comp.title}>{comp.name}</div>);
    return menuBtn
  }else{
    return <div className="menu_btn">No data found</div>
  }
}

class OtherBlock extends React.Component {
  constructor(props) {
    super(props)
  }

  toTopThisScroll(){
    document.getElementById('scrollBlock').getElementsByTagName('div')[0].scrollTo({top: 0, behavior: 'smooth'});
  }
  render() {
    return <div className="block otherBlock" id="oyakor_other">
      <div className="otherDataBlockFoot">
        <div className="otherContent">
          {(this.props.menu !== 0)?parseMenu(this.props.menu, true):parseMenu(0, false)}
        </div>
        <div className="otherContent otherCenter">
          <div className="toTopClicker">
            <div className="topClickerBtn" onClick={this.toTopThisScroll.bind(this)}><FontAwesomeIcon icon={['fas', 'arrow-up']} /></div>
          </div>
          <div className="footerLogotype">
            <img src={footerLogo} />
          </div>
        </div>
        <div className="otherContent">
          <div className="othersLineData">
            <a href={"mailto:" + this.props.contacts.email}> {this.props.contacts.email} </a>
          </div>
          <div className="othersLineData">
            <a href={"tel:" + this.props.contacts.number}> {this.props.contacts.number} </a>
          </div>
          <div className="othersLineData">
            {this.props.contacts.country},{this.props.contacts.city}
          </div>
          <div className="socialsContacts">
            <Bounce><div className="socials_mini_icon"><a target="_blank" href={this.props.socials.vk}><FontAwesomeIcon icon={['fab', 'vk']} /></a></div></Bounce>
            <Bounce><div className="socials_mini_icon"><a target="_blank" href={this.props.socials.insta}><FontAwesomeIcon icon={['fab', 'instagram']} /></a></div></Bounce>
            <Bounce><div className="socials_mini_icon"><a target="_blank" href={this.props.socials.fb}><FontAwesomeIcon icon={['fab', 'facebook']} /></a></div></Bounce>
            <Bounce><div className="socials_mini_icon"><a target="_blank" href={this.props.socials.in}><FontAwesomeIcon icon={['fab', 'linkedin']} /></a></div></Bounce>
            <Bounce><div className="socials_mini_icon"><a target="_blank" href={this.props.socials.git}><FontAwesomeIcon icon={['fab', 'github']} /></a></div></Bounce>
          </div>
        </div>
      </div>
    </div>
  }
}

export default OtherBlock;
