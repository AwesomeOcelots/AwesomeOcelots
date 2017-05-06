import React from 'react';

class Weather extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className='weather' onMouseEnter={this.props.toggleWeather} 
                               onMouseLeave={this.props.toggleWeather}>
        Todays Weather
      </div>
    )
  } 
}

export default Weather
