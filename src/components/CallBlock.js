import React from 'react';
import Bounce from 'react-reveal/Bounce';

class CallBlock extends React.Component {
  render() {
    return <div className="block">
    <div className="block_title">
      <Bounce>
        <h1 style={{color: "white"}} className="whiteBefore">Связь</h1>
      </Bounce>
      <div className="shadowTitle">Связь</div>
    </div>
    </div>
  }
}

export default CallBlock;
