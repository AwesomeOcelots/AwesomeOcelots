import React from 'react';

class Traffic extends React.Component {
  render() {
    return (
      <div className='traffic' onMouseEnter={this.props.toggleTraffic} 
                               onMouseLeave={this.props.toggleTraffic}>
                                <div id="middle">
        <img id= "traffic" style={{"width" : "50px", "height" :"50px"}} src={require('url-loader?limit=10000!../../dist/styleresources/traffic.png')} />
        <figcaption> Traffic </figcaption>
        </div>
      </div>
    )
  }
}

export default Traffic
