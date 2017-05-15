import React from 'react';

class Welcome extends React.Component {
  render() {
    return (
      <div>
        <span id="welcome">
         <h2> Welcome {this.props.user}! </h2>
        </span>
        <hr></hr>
      </div>
    )
  }
}

export default Welcome
