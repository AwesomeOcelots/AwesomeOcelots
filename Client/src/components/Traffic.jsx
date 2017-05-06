import React from 'react';

class Traffic extends React.Component {
  render() {
    return (
      <div className='traffic' onMouseEnter={this.props.toggleTraffic} 
                               onMouseLeave={this.props.toggleTraffic}>
        Traffic conditions
      </div>
    )
  }
}

export default Traffic
