import React from 'react';
import { Circle } from 'react-preloaders';
import '../styles/preloader.css';

class Preloader extends React.Component {
  render() {
    return <Circle color={'#f7f7f7'} bgColor={'#222'} time={1400}/>
  }
}

export default Preloader;
