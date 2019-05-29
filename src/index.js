import './styles/index.css';
import './styles/progress-bar.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Scrollbars } from 'react-custom-scrollbars';
import ProgressBar from './components/includes/ProgressBar.js';

import MenuHead from './components/HeadMenu.js';
import Preloader from './components/Preloader.js';
import MainBlock from './components/MainBlock.js';
import AboutBlock from './components/AboutBlock.js';
import SkillsBlock from './components/SkillsBlock.js';
import BlogBlock from './components/BlogBlock.js';
import ProjectsBlock from './components/ProjectsBlock.js';
import SocialsBlock from './components/SocialsBlock.js';
import CallBlock from './components/CallBlock.js';
import FooterBlock from './components/FooterBlock.js';


class BodyContent extends React.Component {
  render(){
    return (
      <div className={this.props.className}>
        <ProgressBar/>
        <Preloader />
        <MenuHead />
        <MainBlock src="../images/110228.jpg"/>
        <AboutBlock />
        <SkillsBlock />
        <BlogBlock />
        <ProjectsBlock />
        <SocialsBlock />
        <CallBlock />
        <FooterBlock />
    </div>)
  }
}

ReactDOM.render(
  <Scrollbars style={{ height: "calc(100%)" }} renderThumbVertical={props => <div className="thumb-vertical"/>} >
    <BodyContent className="contentData" />
  </Scrollbars>,
  document.getElementById('root')
);
