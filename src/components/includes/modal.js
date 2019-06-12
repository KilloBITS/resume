import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



class Modal extends React.Component{
  constructor(props){
    super(props);
    this.modalOpened = false;
    this.closeModal = () => {
      document.getElementById('modalBackground').style.display = 'none'
    }
  }
  render(){
    return <div className="modalBackground" id="modalBackground">
      <div className="modalContent">
        <div className="modalContentBack"></div>
        <div className="modalBlock modalTop">
          <div className="modalTitle">Attention</div>
          <div className="modalCloseBtn" onClick={this.closeModal}>
            <FontAwesomeIcon icon={['fas', 'times']} />
          </div>
        </div>
        <div className="modalBlock modalCenter">
        Greetings, visitor!
        <br/>
        If you came here it means you are interested in looking at my works, but I want to say something before you start looking.
          <br/>
        This is only a BETA version of my portfolio and I have not had time to add much information yet.
        <br/>
        I will be very grateful if you do not strictly judge the errors and shortcomings in a short time I will correct them.
        <br/>
        Thanks for attention!
        </div>
        <div className="modalBlock modalBottom"></div>
      </div>
    </div>
  }
}

export default Modal;
