import React from 'react';

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
      <div className="navCenter"></div>
      <div className="navBottom"></div>
    </div>
  }
}

export default NavigationBAR;
