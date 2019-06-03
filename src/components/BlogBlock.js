import videoPlayerScript from '../scripts/videoPlayer.js';
import React from 'react';
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const myVideo = require('../video/video.mp4');

let parseImageReq = (url) => {
  return require('../images/'+url)
}

class BlogContent extends React.Component{
  render(){
    if(this.props.blog.length > 0){
      let dataArr = [];
      this.props.blog.forEach((blogData, key) => {
        dataArr.push(
          <Fade bottom key={key}>
          <div className={( key & 1 )?"blogBlockData floatLeftData":"blogBlockData floatRightData"}>
            <div className="blogMinImage">
              <img src={parseImageReq(blogData.image)} className={( key & 1 )?"repeatHorizontal":""}/>
            </div>
            <div className="blodContentText">
              <div className="blogMinTitle">
                {blogData.title}
              </div>
              <div className="blofMinText">
              {blogData.text}
              </div>
            </div>
          </div>
          </Fade>
        )
      });
      return dataArr
    }else{
      return <div className="noneData">Not data found!</div>
    }
  }
}

class BlogBlock extends React.Component {
  render() {
    return <div className="block blogBlock">
    <div className="block_title">
      <Bounce>
        <h1 style={{color: "white"}} className="whiteBefore">Блог</h1>
      </Bounce>
      <div className="shadowTitle">Блог</div>
    </div>
    <div className="blogData">
      <BlogContent blog={this.props.blog}/>
      <Fade bottom>
      <div className="videoBlock">
        <div className="playVideo" onClick={ videoPlayerScript.play }></div>
        <div className="pauseVideo" onClick={ videoPlayerScript.pause }></div>
        <video src={myVideo} id="videoPlayerDOM"></video>
      </div>
      </Fade>
    </div>
    </div>
  }
}

export default BlogBlock;
