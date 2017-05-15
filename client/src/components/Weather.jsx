import React from 'react';

class Weather extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className='weather' onMouseEnter={this.props.toggleWeather} 
                               onMouseLeave={this.props.toggleWeather}>
       <div id="middle" class="morph">
          <img id="weather" style={{ "width": "50px", "height": "50px" }} src={require("url-loader?limit=10000!../../dist/styleresources/weather.png")} />
        <figcaption>Weather</figcaption>
        </div>
      </div>
    )
  } 
}

export default Weather
