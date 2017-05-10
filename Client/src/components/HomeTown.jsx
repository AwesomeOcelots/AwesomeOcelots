import React from 'react';
import Weather from './Weather.jsx'; 
import Traffic from './Traffic.jsx';
import Lunch from './Lunch.jsx';

class HomeTown extends React.Component {
  
  render() {

    return (
      <div className='hometown'>
        <h3>
          {this.props.cityName}
        </h3>
        <div>
          <Weather toggleWeather={this.props.toggleWeather}/>
        </div>
        <div>
          <Traffic toggleTraffic={this.props.toggleTraffic}/>
        </div>
        <div>
          <Lunch setLunch={this.props.setLunch}
                 getLunch={this.props.getLunch}
                 suggestionMade={this.props.suggestionMade}
                 toggleLunch={this.props.toggleLunch}/>
        </div>
      </div>
    )
  }
}

export default HomeTown