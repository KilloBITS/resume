import React from 'react';
import '../../styles/topmenu.css';
import functions from '../../scripts/functions.js';

let parseMenu = (dataMenu) => {
  const menuBtn = dataMenu.map((comp, key) => <div key={key} className="menu_btn" style={{color: (comp.color !== undefined)?comp.color: 'white' }} id={comp.id} def-title={comp.title}>{comp.name}</div>);
  return menuBtn
}

class HeadMenu extends React.Component {
  constructor(props){
    super(props);
    this.btnClicker = functions.clickYakor();
  }
  render() {
    return <div className="topmenu" onLoad={this.btnClicker}>
      <div className="menuBlock"></div>
      <div className="menuBlock menuCenter">{parseMenu(this.props.menu)}</div>
      <div className="menuBlock menuRight"></div>
    </div>
  }
}

export default HeadMenu;
