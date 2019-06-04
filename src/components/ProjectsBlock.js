import React from 'react';
import Bounce from 'react-reveal/Bounce';

class ProjectsBlock extends React.Component {
  render() {
    return <div className="block projectsBlock" id={this.props.id}>
    <div className="block_title">
      <Bounce>
        <h1 style={{color: "white"}} className="whiteBefore">Проекты</h1>
      </Bounce>
      <div className="shadowTitle">Проекты</div>
    </div>
    </div>
  }
}

export default ProjectsBlock;
