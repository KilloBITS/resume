import React from 'react';

class Pointer extends React.Component{
  render(){
    return <div className="pointer">
      {this.props.text}
    </div>
  }
}

export default Pointer
