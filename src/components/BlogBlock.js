import videoPlayerScript from '../scripts/videoPlayer.js';
import React from 'react';
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const myVideo = require('../video/video.mp4');
const VIDEO_BANNER = require('../images/VIDEO_BANNER.png')
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
  constructor(props) {
    super(props);
    this.handleLoad = videoPlayerScript.init;
  }

  componentDidMount() {
    window.addEventListener('load', this.handleLoad);
  }
  render() {
    return <div className="block blogBlock" id={this.props.id}>
              <div className="block_title">
                <Bounce>
                  <h1 style={{color: "white"}} className="whiteBefore">Блог</h1>
                </Bounce>
                <div className="shadowTitle">Блог</div>
              </div>
              <div className="blogData">
                <BlogContent blog={this.props.blog}/>
                <Bounce bottom>
                <div className="myVideoBlog">
                  <div className="videoBlock">
                    <div className="playVideo" onClick={ videoPlayerScript.play }><FontAwesomeIcon icon={['fas', 'play']} /></div>
                    <div className="pauseVideo" onClick={ videoPlayerScript.pause }><FontAwesomeIcon icon={['fas', 'pause']} /></div>
                    <div className="videoInfoLine">
                      <div className="minVideoPlay" onClick={ videoPlayerScript.play }><FontAwesomeIcon icon={['fas', 'play']} /></div>
                      <div className="minVideoPause" onClick={ videoPlayerScript.pause }><FontAwesomeIcon icon={['fas', 'pause']} /></div>
                      <div className="videoTrackLine" id="videoTrackLine">
                        <div className="videoTrackProcent" id="videoTrackProcent"></div>
                      </div>
                      <div className="fullvideoDisplay" onClick={videoPlayerScript.fullScreenVideo}><FontAwesomeIcon icon={['fas', 'arrows-alt']} /></div>
                      <div className="othersVideo"><FontAwesomeIcon icon={['fas', 'bars']} /></div>
                    </div>
                    <video src={myVideo} id="videoPlayerDOM" poster={VIDEO_BANNER}></video>
                    <div className="selevtVideo prewVideo"></div>
                    <div className="selevtVideo nextVideo"></div>
                  </div>
                </div>
                </Bounce>
                <div className="youTubeChannelBtn"><FontAwesomeIcon icon={['fab', 'youtube']} /> MY YOUTUBE CHANNEL</div>
              </div>
            </div>
  }
}

export default BlogBlock;
