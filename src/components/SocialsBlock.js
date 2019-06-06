import React from 'react';
import Bounce from 'react-reveal/Bounce';
import BlockAnim from './includes/rocketBackgroundAnimate.js';

class SocialsBlock extends React.Component {
  render() {
    return <div className="block socialsBlock" id={this.props.id}>
    <div className="block_title">
      <Bounce>
        <h1 style={{color: "white"}} className="whiteBefore">Социальные сети</h1>
      </Bounce>
      <div className="shadowTitle">Социальные сети</div>
    </div>
    <BlockAnim />
    </div>
  }
}

export default SocialsBlock;
