import React from 'react';
import functions from '../scripts/functions.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const footerLogo = require('../images/MyLogotype.png');
let parseMenu = (dataMenu) => {
  const menuBtn = dataMenu.map((comp, key) => <div key={key} className="menu_btn" style={{color: (comp.color !== undefined)?comp.color: 'white' }} def-title={comp.title}>{comp.name}</div>);
  return menuBtn
}

class OtherBlock extends React.Component {
  render() {
    return <div className="block otherBlock" id="oyakor_other">
      <div className="otherDataBlockFoot">
        <div className="otherContent">
          {parseMenu(this.props.menu)}
        </div>
        <div className="otherContent">
          <div className="toTopClicker">
            <div className="topClickerBtn"><FontAwesomeIcon icon={['fas', 'arrow-up']} /></div>
          </div>
          <div className="footerLogotype">
            <img src={footerLogo} />
          </div>
        </div>
        <div className="otherContent">

        </div>
      </div>
    </div>
  }
}

export default OtherBlock;
