import React from 'react';
import Bounce from 'react-reveal/Bounce';
import * as EmailValidator from 'email-validator';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

let messageStatus = (a) => {
    let defClass = "messageStatus ";
    let statusText = "";
    switch (a){
      case 1: defClass += "sending"; statusText = 'Sending message'; break;
      case 2: defClass += "success"; statusText = 'Message succesfull'; break;
      case 3: defClass += "fail"; statusText = 'Message fail'; break;
    }
  return <div className={defClass}><span>{statusText}</span></div>
}


class CallBackForm extends React.Component{
  constructor(props) {
      super(props);
      this.state = {
          messagestatus: false,
          firstName: '',
          lastName: '',
          phoneNumber: '',
          email: '',
          text: '',
          userData: {
              firstName: '',
              lastName: '',
              phoneNumber: '',
              email: '',
              text: ''
          },
          showFormInput: false
      };
  }
  handleFirstNameChange(event) {
      var firstName = event.target.value;
      this.setState({
          firstName: firstName
      });
  }
  handleLastNameChange(event) {
      var lastName = event.target.value;
      this.setState({
          lastName: lastName
      });
  }
  handlePhoneNumberChange(event) {
      var phone = event.target.value;
      this.setState({
          phoneNumber: phone
      });
  }
  handleEmailChange(event) {
      var email = event.target.value;
      this.setState({
          email: email
      });
  }
  handleTextChange(event){
    var text = event.target.value;
    this.setState({
        text: text
    });
  }
  handleFormSubmit(event) {
      event.preventDefault();

      this.setState({
        messageStatusNumber: 1,
        messagestatus: true
      });

      if(EmailValidator.validate(this.state.email)){
        document.getElementById('emailValidator').className = 'form-control remScript'
        axios.post('http://134.249.117.218:5000/postMessage', {text: this.state}).then(res => {
          setTimeout(() => {
            this.setState({
              messageStatusNumber: 2,
              messagestatus: true
            });

            setTimeout(() => {
              this.setState({
                  userData: {
                      firstName: "",
                      lastName: "",
                      phoneNumber: "",
                      email: "",
                      text: ""
                  }
              })
              this.setState({
                messagestatus: false
              });
            }, 2000);
          },2000)
          return false
        });
      }else{
        this.setState({
          messageStatusNumber: 3,
          messagestatus: false
        });
        document.getElementById('emailValidator').className = 'form-control remScript errorBorder'
      }

  }
  inputIsEmpty(input) {
      return input === '';
  }
  displayFormInput() {
      this.setState({
          showFormInput: true
      });
  }
  hideFormInput() {
      this.setState({
          showFormInput: false
      });
  }
  render(){
    let appendedDOM;
    if (this.state.messagestatus) {
        appendedDOM = messageStatus(this.state.messageStatusNumber);
    } else {
        appendedDOM = "";
    }
    return <div className="contactMessageForm" id="contactMessageForm">
      {appendedDOM}
      <form onSubmit={this.handleFormSubmit.bind(this)}>
        <input className="form-control remScript" type="text" name="first_name" value={this.state.firstName} onChange={this.handleFirstNameChange.bind(this)} placeholder="First Name"/>
        <input className="form-control remScript" type="text" name="last_name" value={this.state.lastName} onChange={this.handleLastNameChange.bind(this)} placeholder="Last Name"/>
        <input className="form-control remScript" type="text" name="phone_number" value={this.state.phoneNumber} onChange={this.handlePhoneNumberChange.bind(this)} placeholder="Phone Number"/>
        <input className="form-control remScript" type="text" id="emailValidator" name="email" value={this.state.email} onChange={this.handleEmailChange.bind(this)} placeholder="Email"/>
        <textarea className="form-control remScript" name="text_callback" value={this.state.text} placeholder="Text message" onChange={this.handleTextChange.bind(this)} ></textarea>
        <div className="form-group">
          <input className="submitBtn" type="submit" value="Submit"/>
          <input className="clearBtn" type="button" value="Clear"/>
        </div>
      </form>
    </div>
  }
}

class CallsContacts extends React.Component{
  render(){
    return <div className="getContacts">
      <div className="contactsLines">
        <div className="contactsLineData text">
        If you wanna get in touch, talk to me about a project collaboration or just say hi,
        fill up the awesome form below or send an email to
        <a href={"mailto:" + this.props.contacts.email}> {this.props.contacts.email} </a>
        and ~let's talk.
        </div>
        <div className="contactsLineData">
          <a href={"mailto:" + this.props.contacts.email}> Email: {this.props.contacts.email} </a>
        </div>
        <div className="contactsLineData">
          <a href={"tel:" + this.props.contacts.number}> Phone number: {this.props.contacts.number} </a>
        </div>
        <div className="contactsLineData">
          Address: {this.props.contacts.country},{this.props.contacts.city}
        </div>
      </div>
      <div className="socialsContacts">
        <Bounce><div className="socials_mini_icon"><a href={this.props.socials.vk}><FontAwesomeIcon icon={['fab', 'vk']} /></a></div></Bounce>
        <Bounce><div className="socials_mini_icon"><a href={this.props.socials.insta}><FontAwesomeIcon icon={['fab', 'instagram']} /></a></div></Bounce>
        <Bounce><div className="socials_mini_icon"><a href={this.props.socials.fb}><FontAwesomeIcon icon={['fab', 'facebook']} /></a></div></Bounce>
        <Bounce><div className="socials_mini_icon"><a href={this.props.socials.in}><FontAwesomeIcon icon={['fab', 'linkedin']} /></a></div></Bounce>
        <Bounce><div className="socials_mini_icon"><a href={this.props.socials.git}><FontAwesomeIcon icon={['fab', 'github']} /></a></div></Bounce>
      </div>
    </div>
  }
}

class CallsData extends React.Component{
  render(){
    return <div className="callData">
      <div className="callDataBlock">
        <CallsContacts socials={this.props.socials} contacts={this.props.contacts}/>
      </div>
      <div className="callDataBlock">
        <CallBackForm />
      </div>
    </div>
  }
}

class CallBlock extends React.Component {
  render() {
    return <div className="block callbackBlock" id={this.props.id}>
    <div className="block_title">
      <Bounce>
        <h1 style={{color: "white"}} className="whiteBefore">Contacts</h1>
      </Bounce>
      <div className="shadowTitle">Contacts</div>
    </div>
    <CallsData socials={this.props.socials} contacts={this.props.contacts}/>
    </div>
  }
}

export default CallBlock;
