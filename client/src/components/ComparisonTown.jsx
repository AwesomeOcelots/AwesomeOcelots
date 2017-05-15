import React from 'react'
import App from './App'
import LunchThere from './LunchThere.jsx'
import TrafficThere from './TrafficThere.jsx'
import WeatherThere from './WeatherThere.jsx'

class ComparisonTown extends React.Component {
  render() {

    return (
      <div>
        <div>
          <img id='othertown' src="https://res.cloudinary.com/simpleview/image/upload/c_fill,f_auto,h_767,q_65,w_1663/v1/clients/columbus/meetings_skyline_08ac1260-445a-47ce-9655-3039e6a8d6b7.jpg"></img>
        <p id="cweatherd"> sdfgfdsgsdg </p>
        <p id="ctrafficd"> sdfgdsgdfg </p>
        <div id="clunchd"> 
          {this.props.suggestionMade ? 
          <div>
            If You Were Here I'd Say
            <div>
              Try {this.props.suggestion.name}
            </div>
            <div>
              at {this.props.suggestion.location.address1}
            </div>
          </div>: <div></div>}
        </div>
        </div>
        <div id="footer"></div>
      </div>
    )
  }
}

export default ComparisonTown
