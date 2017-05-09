import React from 'react'
import App from './App'
import Lunch from './Lunch'
import Traffic from './Traffic.jsx'
import Weather from './Weather'

class ComparisonTown extends React.Component {
  render() {

    return (
      <div className='othertown'>
        <h3>
          {this.props.cityName}
        </h3>
        <div>
          {this.props.showWeather ? <Weather /> : <div></div> }
        </div>
        <div>
          {this.props.showTraffic ? <Traffic /> : <div></div> }
        </div>
        <div>
          {this.props.showLunch ? <Lunch /> : <div></div> }
        </div>
      </div>
    )
  }
}

export default ComparisonTown
