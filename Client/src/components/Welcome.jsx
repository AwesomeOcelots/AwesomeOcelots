import React from 'react';

class Welcome extends React.Component {
  render() {
    return (
      <div>
        <h1>
          Welcome {this.props.user}!
        </h1>
        <hr></hr>
      </div>
    )
  }
}

export default Welcome
