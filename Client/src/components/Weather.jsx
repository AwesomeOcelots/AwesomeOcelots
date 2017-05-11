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
        {this.props.weather}
      </div>
    )
  } 
}

export default Weather
