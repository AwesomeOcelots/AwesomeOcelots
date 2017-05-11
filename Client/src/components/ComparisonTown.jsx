import React from 'react'
import App from './App'
import Greener from './Greener.jsx'
import LunchThere from './LunchThere.jsx'
import TrafficThere from './TrafficThere.jsx'
import WeatherThere from './WeatherThere.jsx'

class ComparisonTown extends React.Component {
  render() {

    return (
      <div className='othertown'>
        <h3>
          {this.props.cityName}
        </h3>
        <div>
          {this.props.showWeather ? <WeatherThere weather={this.props.weather}/> : <div></div> }
        </div>
        <div>
          {this.props.showTraffic ? <TrafficThere traffic={this.props.traffic}/> : <div></div> }
        </div>
        <div>
          {this.props.showLunch ? <LunchThere suggestion={this.props.suggestion}/> : <div></div> }
        </div>
        <div>
          {this.props.choiceMade ? <div>Thanks For The Input</div> :
                                   <Greener chooseHome={this.props.chooseHome}
                                            chooseOtherCity={this.props.chooseOtherCity} />}
        </div>
      </div>
    )
  }
}

export default ComparisonTown
