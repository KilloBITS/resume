import './styles/preloader.css';
import './styles/index.css';
import './styles/index.adaptive.css';

import handleScroll from './scripts/index.js';
import functions from './scripts/functions.js';

import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Scrollbars } from 'react-custom-scrollbars';

import MenuHead from './components/includes/HeadMenu.js';
import NavigationBAR from './components/includes/NavigationBAR.js';
import Modal from './components/includes/modal.js';
import Preloader from './components/Preloader.js';
import MainBlock from './components/MainBlock.js';
import AboutBlock from './components/AboutBlock.js';
import SkillsBlock from './components/SkillsBlock.js';
import BlogBlock from './components/BlogBlock.js';
import ProjectsBlock from './components/ProjectsBlock.js';
import CallBlock from './components/CallBlock.js';
import FooterBlock from './components/FooterBlock.js';
import OtherBlock from './components/OtherBlock.js';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faHome , fas} from '@fortawesome/free-solid-svg-icons'
library.add(fab, faCheckSquare, faCoffee, fas)


const my_resume = require('./files/1.pdf')

class BodyContent extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      dataMenus: 0,
      socials: 0,
      contacts: {
        number: 0,
        email: 0,
        country: 0,
        city: 0
      },
      aboutText:0,
      blog:0,
      projects: 0
    }
  }
  componentDidMount() {
    axios.post('http://localhost:5000/getData').then(res => {
       this.setState(res.data.data);
       this.setState({blockLoad: functions.init});
       window.addEventListener('load', functions.init);
       window.addEventListener('resize', functions.init);
    });
  }

  render(){
     return (
       <div className={this.props.className}>
         <Preloader />
         <NavigationBAR functions={functions} resume={my_resume}/>
         <MenuHead menu={this.state.dataMenus} />
         <MainBlock socials={this.state.socials} id="yakor_main"/>
         <AboutBlock text={this.state.aboutText} resume={my_resume} id="yakor_about"/>
         <SkillsBlock id="yakor_skills"/>
         <BlogBlock blog={this.state.blog} id="yakor_block"/>
         <ProjectsBlock projects={this.state.projects} id="yakor_projects"/>
         <CallBlock socials={this.state.socials} contacts={this.state.contacts} id="yakor_call"/>
         <FooterBlock />
         <OtherBlock menu={this.state.dataMenus} contacts={this.state.contacts} socials={this.state.socials} />
         <Modal />
     </div>)
  }
}

ReactDOM.render(
  <Scrollbars onScroll={handleScroll}  style={{ height: "calc(100%)" }} renderThumbVertical={props => <div className="thumb-vertical"/>} id="scrollBlock" >
    <BodyContent className="contentData" />
  </Scrollbars>,
  document.getElementById('root')
);
