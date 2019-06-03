import React from 'react';
import '../../styles/opened_menu.css';

class OpenedMenuLeftBlock extends React.Component{
  render(){
    return <div className="menuBlock leftMenu"></div>
  }
}


class OpenedMenuRightBlock extends React.Component{
  render(){
    return <div className="menuBlock rightMenu">
      <div className="heightCenter">
        <div className="openeMenuBtnTitle">Main</div>
        <div className="openeMenuBtnTitle">About</div>
        <div className="openeMenuBtnTitle">Skills</div>
        <div className="openeMenuBtnTitle">Blog</div>
        <div className="openeMenuBtnTitle">Projects</div>
        <div className="openeMenuBtnTitle">Socials</div>
        <div className="openeMenuBtnTitle">Contacts</div>
      </div>
    </div>
  }
}

class OpenedMenuData extends React.Component{
  render(){
    return <div className="openedMenuData">
      <div className="CloseMenuBtn"></div>
      <OpenedMenuLeftBlock />
      <OpenedMenuRightBlock />
    </div>
  }
}


export default OpenedMenuData;
