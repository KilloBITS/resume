import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Bounce from 'react-reveal/Bounce';
// var backgroundImageReq = require('../images/110228.jpg');

class MainBlockContent extends React.Component {
  render() {
    return <div className="center_block" id="mainCenter">
      <Bounce><h1 id="myName">Ihor Kalenyuk</h1></Bounce>      
      <h2 className="mainBlockInfoMini">WEB</h2><h2 className="mainBlockInfoMini">DEVELOPER.</h2><h2 className="mainBlockInfoMini">TECHNOLOGY ENTHUSIAST.</h2>
      <div className="socialsLineMini">
        <Bounce><div className="socials_mini_icon"><a href={this.props.socials.vk}><FontAwesomeIcon icon={['fab', 'vk']} /></a></div></Bounce>
        <Bounce><div className="socials_mini_icon"><a href={this.props.socials.insta}><FontAwesomeIcon icon={['fab', 'instagram']} /></a></div></Bounce>
        <Bounce><div className="socials_mini_icon"><a href={this.props.socials.fb}><FontAwesomeIcon icon={['fab', 'facebook']} /></a></div></Bounce>
        <Bounce><div className="socials_mini_icon"><a href={this.props.socials.in}><FontAwesomeIcon icon={['fab', 'linkedin']} /></a></div></Bounce>
        <Bounce><div className="socials_mini_icon"><a href={this.props.socials.git}><FontAwesomeIcon icon={['fab', 'github']} /></a></div></Bounce>
      </div>
    </div>
  }
}

class MainDesign extends React.Component {
  render(){
    return <main>
			<div className="introduction-block">
				<div className="scroller">
					<div className="mouse">
						<div className="scroll-wheel"></div>
					</div>
					<svg role="presentation" className="icn" width="20" height="20"></svg>
				</div>
			</div>
			<div id="particle-container">
				<div className="particle"></div>
				<div className="particle"></div>
				<div className="particle"></div>
				<div className="particle"></div>
				<div className="particle"></div>
				<div className="particle"></div>
				<div className="particle"></div>
				<div className="particle"></div>
				<div className="particle"></div>
				<div className="particle"></div>
				<div className="particle"></div>
				<div className="particle"></div>
				<div className="particle"></div>
				<div className="particle"></div>
				<div className="particle"></div>
				<div className="particle"></div>
				<div className="particle"></div>
				<div className="particle"></div>
				<div className="particle"></div>
				<div className="particle"></div>
				<div className="particle"></div>
				<div className="particle"></div>
				<div className="particle"></div>
				<div className="particle"></div>
				<div className="particle"></div>
				<div className="particle"></div>
				<div className="particle"></div>
				<div className="particle"></div>
				<div className="particle"></div>
				<div className="particle"></div>
			</div>
		</main>
  }
}

class MainBlock extends React.Component {
  constructor(props){
    super(props);
    this.state = {show: false};
  }

  componentDidMount () {
    this.timeoutId = setTimeout(function () {
        this.setState({show: true});
    }.bind(this), 2000);
  }

  componentWillUnmount () {
    if (this.timeoutId) {
        clearTimeout(this.timeoutId);
    }
  }
//
  render() {
    return <div className={this.state.show ? "block mainBlock loaded" : "block mainBlock"} >
      <MainDesign />
      <MainBlockContent socials={this.props.socials}/>
    < /div>
  }
}

export default MainBlock;
