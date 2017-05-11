import React from 'react';

class Traffic extends React.Component {
  render() {
    return (
      <div className='traffic' onMouseEnter={this.props.toggleTraffic} 
                               onMouseLeave={this.props.toggleTraffic}>
        Your Commute Today Looks Like:
        {this.props.traffic}
      </div>
    )
  }
}

export default Traffic
