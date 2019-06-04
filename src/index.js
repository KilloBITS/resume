import './styles/index.css';
import handleScroll from './scripts/index.js';
import functions from './scripts/functions.js';

import React from 'react';
import ReactDOM from 'react-dom';
import { Scrollbars } from 'react-custom-scrollbars';
import MenuHead from './components/includes/HeadMenu.js';
import NavigationBAR from './components/includes/NavigationBAR.js';
import OpenedMenu from './components/includes/OpenedMenu.js';
import Preloader from './components/Preloader.js';
import MainBlock from './components/MainBlock.js';
import AboutBlock from './components/AboutBlock.js';
import SkillsBlock from './components/SkillsBlock.js';
import BlogBlock from './components/BlogBlock.js';
import ProjectsBlock from './components/ProjectsBlock.js';
import SocialsBlock from './components/SocialsBlock.js';
import CallBlock from './components/CallBlock.js';
import FooterBlock from './components/FooterBlock.js';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faHome , fas} from '@fortawesome/free-solid-svg-icons'
library.add(fab, faCheckSquare, faCoffee, fas)

class BodyContent extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      socials: {
        vk: 'https://vk.com/id203064133',
        insta: 'https://www.instagram.com/xx_kalinka_malinka_xx/',
        fb: '#',
        in: 'https://www.linkedin.com/in/ihor-kalinyuk-601613153/',
        git: 'https://github.com/KilloBITS'
      },
      aboutText:
      `I greet you on my page.

      I am very glad to see you and tell Hos a little about myself.
      And so let's start from the very beginning, my name is Kalenyuk Igor. I was born on June 26, 1997 in a town called Ivanichi. such as C #. In the first year of college, I discovered web development and realized that it was mine, I began to make the first simple websites, and after a while I already mastered Javascript and its various frameworks. Although timepieces are a topic that can be discussed for a very long time, I will clarify some of my favorites, despite their difficulties and differences, I believe that they all have their pros and cons ... The first will be React since it is one of the most popular and popular in world (this is my personal opinion), jQuery will go second because we all started with it and many continue to work with it, it is an indispensable part of what you see on the Internet. There are also many other classes with which I work, you can see them below in the block where my skills are described.

      You probably have a lot of questions? And how am I different from others?
      I will answer you:
      - I am a simple developer and do not differ much from others.
      But I have the advantage that others just do their job and for me web development is also a hobby / hobby, and most of my life is dedicated to her!

      Now the only thing I want to say is thanks for reading this article. More detailed information you will get by reading my site, believe me, everything is written there)`,
      blog: [
        {
          title: 'Created this site',
          date: '017.05.2019',
          image: 'myphoto.png',
          text: 'Good day, about a month ago, I decided to create my portfolio, but my hands did not reach, and it happened! I am glad to welcome everyone on my page, I hope you appreciate my efforts))'
        },
        {
          title: 'The birth of an idea',
          date: '03.06.2019',
          image: 'myphoto.png',
          text: 'Today came one idea that can make the life of many much more convenient. What an idea, I still will not say but believe it will be cool.'
        }
      ]
    }
  }

  render(){
    return (
      <div className={this.props.className}>
        <Preloader />
        <NavigationBAR />
        <OpenedMenu />
        <MenuHead />
        <MainBlock socials={this.state.socials} id="yakor_main"/>
        <AboutBlock text={this.state.aboutText} id="yakor_about"/>
        <SkillsBlock id="yakor_skills"/>
        <BlogBlock blog={this.state.blog} id="yakor_block"/>
        <ProjectsBlock id="yakor_projects"/>
        <SocialsBlock id="yakor_socials"/>
        <CallBlock id="yakor_call"/>
        <FooterBlock />
    </div>)
  }
}



ReactDOM.render(
  <Scrollbars onScroll={handleScroll} style={{ height: "calc(100%)" }} renderThumbVertical={props => <div className="thumb-vertical"/>} id="scrollBlock" >
    <BodyContent className="contentData" />
  </Scrollbars>,
  document.getElementById('root')
);
