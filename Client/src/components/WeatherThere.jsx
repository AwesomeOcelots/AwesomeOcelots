import React from 'react';

class WeatherThere extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className='weather there' >
        The Weather Here is
        {this.props.weather}
      </div>
    )
  } 
}

export default WeatherThere
