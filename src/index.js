import './styles/index.css';
import handleScroll from './scripts/index.js';

import React from 'react';
import ReactDOM from 'react-dom';
import { Scrollbars } from 'react-custom-scrollbars';
import MenuHead from './components/includes/HeadMenu.js';
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
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
library.add(fab, faCheckSquare, faCoffee)

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
      aboutText: 'Web developers on the job market are typically best served by professional resumes that emphasize both their strong tech skills and their creative design talents. Thus, the format of a web developer resume can be more “artistic” than that which would be utilized for more conservative career fields. It should also include a tech table that lists all of the software and tools that the candidate is experienced in using for web design. Common software and web development tools include: NetSuite, Node.js, HTML, CSS, C#, JavaScript, Git Hub, Bootstrap, Gulp, Handlebars, Bit Bucket, Drupal, SEO, UI/UX, and Python. Web developer resumes also need to incorporate as many industry-specific keywords as possible in order to be ranked highly by the sophisticated applicant tracking systems that companies often now employ to review incoming job applications. If a resume and its accompanying cover letter fail to use the keywords that these systems are programmed to identify, it may be well be doomed never to reach the human eye of a hiring manager. The best guide to knowing which keywords to use is the language used in the job advertisement to which one is applying. Keyword phrases that are frequently used in postings for web developers include: “LAMP development,” “working with command lines,” “writing modules,” “version control systems,” “continuous integration,” “DevOps practices,” “responsive design,” “agile software development,” “front-end systems,” “debugging,” “server-side scripting,” “writing application code,” and “object-oriented design.”A tech table, as previously mentioned, is a great place to insert keywords. So is an opening resume summary statement (also known as a summary of qualifications). By beginning your web developer resume with a qualifications profile enriched with keywords, you’ll ensure that you both “pass” the scoring algorithms of the applicant tracking systems and immediately catch the attention of hiring managers. It is also an effective strategy, in addition to the use of a tech table, to mention the different technologies you’ve utilized in each of the jobs you’ve held.'
    }
  }

  render(){
    return (
      <div className={this.props.className}>
        <Preloader />
        <MenuHead />
        <MainBlock socials={this.state.socials}/>
        <AboutBlock text={this.state.aboutText}/>
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
  <Scrollbars onScroll={handleScroll} style={{ height: "calc(100%)" }} renderThumbVertical={props => <div className="thumb-vertical"/>} id="scrollBlock" >
    <BodyContent className="contentData" />
  </Scrollbars>,
  document.getElementById('root')
);
