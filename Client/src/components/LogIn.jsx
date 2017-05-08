import React from 'react';
import EnterUser from './EnterUser.jsx'
import EnterHome from './EnterHome.jsx'
import EnterWork from './EnterWork.jsx'

class LogIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: '',
      homeStreet: '',
      homeCity: '',
      homeZip: '', 
      workStreet: '',
      workCity: '',
      workZip: ''
    };
  }

  setUser(e) {
    this.setState({
      user: e.target.value
    });
  }
  
  setHomeStreet(e) {
    this.setState({
      homeStreet: e.target.value
    });
  }

  setHomeCity(e) {
    this.setState({
      homeCity: e.target.value
    });
  }

  setHomeZip(e) {
    this.setState({
      homeZip: e.target.value
    });
  }

  setWorkStreet(e) {
    this.setState({
      workStreet: e.target.value
    });
  }

  setWorkCity(e) {
    this.setState({
      workCity: e.target.value
    });
  }

  setWorkZip(e) {
    this.setState({
      workZip: e.target.value
    });
  }

  setUserInfo() {
    var homeObj = {
      street: this.state.homeStreet,
      city: this.state.homeCity,
      zip: this.state.homeZip
    }
    var workObj = {
      street: this.state.workStreet,
      city: this.state.workCity,
      zip: this.state.workZip
    }
    this.props.logIn(this.state.user, homeObj, workObj)
  }

  render() {
    return (
      <div>
        <EnterUser setUser={this.setUser.bind(this)} />
        <div>
          <EnterHome setHomeStreet={this.setHomeStreet.bind(this)}
                     setHomeCity={this.setHomeCity.bind(this)}
                     setHomeZip={this.setHomeZip.bind(this)} />
        </div>
        <div>
          <EnterWork setWorkStreet={this.setWorkStreet.bind(this)}
                     setWorkCity={this.setWorkCity.bind(this)}
                     setWorkZip={this.setWorkZip.bind(this)} />
        </div>
        <button onClick={this.setUserInfo.bind(this)}>Submit</button>
      </div>
    )
  }
}

export default LogIn
