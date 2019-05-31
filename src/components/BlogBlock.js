import React from 'react';
import Bounce from 'react-reveal/Bounce';

class BlogBlock extends React.Component {
  render() {
    return <div className="block blogBlock">
    <div className="block_title">
      <Bounce><h1 style={{color: "white"}} className="whiteBefore">Блог</h1></Bounce>
    </div>
    </div>
  }
}

export default BlogBlock;
