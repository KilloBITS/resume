import React from 'react';
import '../../styles/topmenu.css';

let toTopThisScroll = (e) => {
  let toTopposition = document.getElementById(e.target.getAttribute('toyakor')).offsetTop;
  document.getElementById('scrollBlock').getElementsByTagName('div')[0].scrollTo({top: toTopposition, behavior: 'smooth'});
  // document.getElementById('scrollBlock').getElementsByTagName('div')[0].scrollTo({top: 0, behavior: 'smooth'});
}


let parseMenu = (dataMenu, m, clickMethod) => {
  if(m){
    const menuBtn = dataMenu.map((comp, key) => <div key={key} onClick={toTopThisScroll.bind(this)} toyakor={comp.yakor} className="menu_btn" style={{color: (comp.color !== undefined)?comp.color: 'white' }} id={comp.id} def-title={comp.title}>{comp.name}</div>);
    return menuBtn
  }else{
    return <div className="menu_btn">Not data found</div>
  }
}

class HeadMenu extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return <div className="topmenu">
      <div className="menuBlock"></div>
      <div className="menuBlock menuCenter">{(this.props.menu !== 0)?parseMenu(this.props.menu, true):parseMenu(0, false)}</div>
      <div className="menuBlock menuRight"></div>
    </div>
  }
}

export default HeadMenu;
