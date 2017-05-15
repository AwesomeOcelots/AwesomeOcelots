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
          <Weather toggleWeather={this.props.toggleWeather}
                   weather={this.props.weather}/>
        </div>
        <div>
          <Traffic toggleTraffic={this.props.toggleTraffic}
                   traffic={this.props.traffic}/>
        </div>
        <div>
          <Lunch setLunch={this.props.setLunch}
                 getLunch={this.props.getLunch}
                 resetLunch={this.props.resetLunch}
                 suggestionMade={this.props.suggestionMade}
                 suggestion={this.props.suggestion}
                 thereSuggestion={this.props.thereSuggestion}
                 toggleLunch={this.props.toggleLunch}/>
        </div>
      </div>
    )
  }
}

export default HomeTown
