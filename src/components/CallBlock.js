import React from 'react';
import Bounce from 'react-reveal/Bounce';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class CallBackForm extends React.Component{
  constructor(props) {
      super(props);
      this.state = {
          firstName: '',
          lastName: '',
          phone: '',
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
          phone: phone
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
      this.hideFormInput();
      this.setState({
          userData: {
              firstName: (this.inputIsEmpty(this.state.firstName) ? '' : this.state.firstName),
              lastName: (this.inputIsEmpty(this.state.lastName) ? '' : this.state.lastName),
              phoneNumber: (this.inputIsEmpty(this.state.phone) ? '' : this.state.phone),
              email: (this.inputIsEmpty(this.state.email) ? '' : this.state.email),
              text: (this.inputIsEmpty(this.state.text) ? '' : this.state.text),
          }
      })

      console.log(this.state);
      event.preventDefault();
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
    return <div className="contactMessageForm">
      <form onSubmit={this.handleFormSubmit.bind(this)}>
        <input className="form-control" type="text" name="first_name" value={this.state.firstName} onChange={this.handleFirstNameChange.bind(this)} placeholder="First Name"/>
        <input className="form-control" type="text" name="last_name" value={this.state.lastName} onChange={this.handleLastNameChange.bind(this)} placeholder="Last Name"/>
        <input className="form-control" type="text" name="phone_number" value={this.state.phone} onChange={this.handlePhoneNumberChange.bind(this)} placeholder="Phone Number"/>
        <input className="form-control" type="text" name="email" value={this.state.email} onChange={this.handleEmailChange.bind(this)} placeholder="Email"/>
        <textarea className="form-control" name="text_callback" value={this.state.text} placeholder="Text message" onChange={this.handleTextChange.bind(this)} ></textarea>
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
          <a href={"mailto:" + this.props.contacts.email}> {this.props.contacts.email} </a>
        </div>
        <div className="contactsLineData">
          <a href={"tel:" + this.props.contacts.number}> {this.props.contacts.number} </a>
        </div>

        <div className="contactsLineData">
          {this.props.contacts.country},{this.props.contacts.city}
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
        <h1 style={{color: "white"}} className="whiteBefore">Связь</h1>
      </Bounce>
      <div className="shadowTitle">Связь</div>
    </div>
    <CallsData socials={this.props.socials} contacts={this.props.contacts}/>
    </div>
  }
}

export default CallBlock;
