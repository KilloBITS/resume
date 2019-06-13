import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  
class Modal extends React.Component{
  constructor(props){
    super(props);
    this.closeModal = () => {
      document.getElementById('modalBackground').className = 'modalBackground'
    }
  }
  render(){
    return <div className={(this.props.showModal)?"modalBackground openedModal":"modalBackground"} id="modalBackground">
      <div className="modalContent">
        <div className="modalContentBack"></div>
        <div className="modalBlock modalTop">
          <div className="modalTitle">{this.props.title}</div>
          <div className="modalCloseBtn" onClick={this.closeModal}>
            <FontAwesomeIcon icon={['fas', 'times']} />
          </div>
        </div>
        <div className="modalBlock modalCenter">
        {this.props.text}
        </div>
        <div className="modalBlock modalBottom"></div>
      </div>
    </div>
  }
}

export default Modal;
