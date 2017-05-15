import React from 'react';
import Weather from './Weather.jsx'; 
import Traffic from './Traffic.jsx';
import Lunch from './Lunch.jsx';
import Greener from './Greener.jsx'
class HomeTown extends React.Component {
  
  render() {

    return (
      <div>
        <div id="wrap">
        <img id='hometown' src="https://i.ytimg.com/vi/_fnYFqHJ-fE/maxresdefault.jpg"></img>
        <p id="weatherd"> HERP DERP DERP </p>
        <p id="trafficd"> 1232314435342 </p>
        <p id="lunchd"> foods </p>
        </div>
      <div className='widgets'>
        <div>
          <Weather toggleWeather={this.props.toggleWeather}/>
        </div>
        <br/>
        <div>
          <Traffic toggleTraffic={this.props.toggleTraffic}/>
        </div>
        <br/>
        <div>
          <Lunch setLunch={this.props.setLunch}
                 toggleLunch={this.props.toggleLunch}/>
        </div> 
        <div>
          {this.props.choiceMade ? <div>Thanks For The Input</div> :
                                   <Greener chooseHome={this.props.chooseHome}
                                            chooseOtherCity={this.props.chooseOtherCity} />}
        </div>
        </div>
        
      </div>
    )
  }
}

export default HomeTown
