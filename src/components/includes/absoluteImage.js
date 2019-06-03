import React from 'react';
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';

class AbsoluteImage extends React.Component {
  render(){
    if(this.props.typePosition === 'left'){
      return <img src={this.props.url}  style={{
        left: this.props.left,
        top: this.props.top,
        maxWidth: this.props.MW
      }} className={(this.props.dopClass === "rectAnimImg")?"absoluteImages rectAnimImg":"absoluteImages staticImg"}/>
    }else{
      return <img src={this.props.url}  style={{right: this.props.left, top: this.props.top, maxWidth: this.props.MW}} className={(this.props.dopClass === "rectAnimImg")?"absoluteImages rectAnimImg":"absoluteImages staticImg"}/>
    }
  }
}

export default AbsoluteImage;
