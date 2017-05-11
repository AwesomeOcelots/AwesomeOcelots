import React from 'react';

class TrafficThere extends React.Component {
  render() {
    return (
      <div className='traffic there' >
        Traffic conditions here are
        <div>
          {this.props.traffic}
        </div>
      </div>
    )
  }
}

export default TrafficThere
