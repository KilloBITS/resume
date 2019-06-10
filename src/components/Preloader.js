import React from 'react';
import { Circle } from 'react-preloaders';
import '../styles/preloader.css';

//<Circle color={'#f7f7f7'} bgColor={'#222'} time={1400}/>
class Preloader extends React.Component {
  constructor(props){
    super(props);
    this.state = {show: false};
  }

  componentDidMount () {
    this.timeoutId = setTimeout(function () {
        this.setState({show: true});
        setTimeout(() => {
          document.getElementById("loaderLogoBack").style.opacity = 1;
          setTimeout(() => {
            document.getElementById("loaderLogoBack").style.width = "100%";
            document.getElementById("loaderLogoBack").style.height = "100%";
            document.getElementById("loaderLogoBack").style.borderRadius = "0px";
            setTimeout(() => {
              document.getElementById("loaderLogoBack").style.opacity = "0";
              setTimeout(() => {
                document.getElementById("preloader_by_kalinuk").style.display = "none";
              }, 50);
            }, 300);
          }, 300);
        }, 500);
    }.bind(this), 300);
  }

  render() {
    return <div className={this.state.show ? "preloader_data loadedDataClass" : "preloader_data"} id="preloader_by_kalinuk">
      <div className="loaderLogoBack" id="loaderLogoBack">
        {this.props.content}
      </div>
    </div>
  }
}

export default Preloader;
