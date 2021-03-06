import React from 'react';
import Bounce from 'react-reveal/Bounce';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

let parseImageReq = (url) => {
  return require('../images/projects/'+url)
}

class ProjTech extends React.Component {
  render(){
    const ptData = this.props.pt.map((comp, key) => <div key={key} className="projTech">{this.props.pt[key]}</div>);
    return ptData
  }
}

class ProjectsContainer extends React.Component {
  render(){
    let projectsArray = [];
    for(let i = 0; i < this.props.projects.length; i++){
      projectsArray.push(
        <Bounce key={i}>
          <div className="projectsContainer">
            <div className="projectsBackground">
              <img src={(this.props.projects[i].image !== null)?parseImageReq(this.props.projects[i].image):parseImageReq('no-image-found-360x260.png')} />
            </div>
            <div className={(this.props.projects[i].status)?"OnlineProjectsTrue":"hiden"}></div>
            <div className="projectsTitle">
              <div className="projectsTitleRotate">
                <div className="nameProject">{this.props.projects[i].title}</div>
                <div className="descProject">[{this.props.projects[i].desc}]</div>
                <div className="projectsDate">{this.props.projects[i].date}</div>
                <a href={this.props.projects[i].link} target="_blank">Open</a>
              </div>
              <div className={(this.props.projects[i].git === null)?"projectsGit hiden":"projectsGit" }><a href={this.props.projects[i].git}><FontAwesomeIcon icon={['fab', 'github']} /></a></div>
            </div>

            <div className="projectsTechnologies">
              <ProjTech pt={this.props.projects[i].tech} />
            </div>
          </div>
        </Bounce>
      )
    }
    return projectsArray
  }
}

class ProjectsBlock extends React.Component {
  render() {
    return <div className="block projectsBlock" id={this.props.id}>
    <div className="block_title">
      <Bounce>
        <h1 style={{color: "white"}} className="whiteBefore">Projects</h1>
      </Bounce>
      <div className="shadowTitle">Projects</div>
    </div>
    <div className="projectsBigBlock">
      <div className="projectsTypeBlock">
        <div className="projTypeBtn activeTypeProj">All</div>
        <div className="projTypeBtn">React</div>
        <div className="projTypeBtn">Node.js</div>
        <div className="projTypeBtn">jQuery</div>
      </div>
      <div className="projectsContainerData">
        <ProjectsContainer projects={this.props.projects} />
      </div>
      <a href={'https://github.com/KilloBITS'} target="_blank" className="gitHub_button"><FontAwesomeIcon icon={['fab', 'github']} /> My GitHub</a>
    </div>
    </div>
  }
}

export default ProjectsBlock;
