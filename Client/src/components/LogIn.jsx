import React from 'react';

class LogIn extends React.Component {
  render() {
    return (
      <div>
        <div>
          Name:
          <input type='text' onChange={this.props.setUser}/>
        </div>
        <div>
          Home Address:
          <input type='text' onChange={this.props.setHome}/>
        </div>
        <div>
          Work Address: 
          <input type='text' onChange={this.props.setWork}/>
        </div>
        <button onClick={this.props.logIn}>Submit</button>
      </div>
    )
  }
}

export default LogIn
