import React from 'react';
import Bounce from 'react-reveal/Bounce';

class ProjectsBlock extends React.Component {
  render() {
    return <div className="block projectsBlock">
    <div className="block_title">
      <Bounce><h1 style={{color: "white"}} className="whiteBefore">Проекты</h1></Bounce>
    </div>
    </div>
  }
}

export default ProjectsBlock;
