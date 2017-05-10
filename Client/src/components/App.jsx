import React from 'react'
import $ from 'jquery'
import Header from './Header.jsx'
import HomeTown from './Hometown.jsx'
import ComparisonTown from './ComparisonTown.jsx'
import LogIn from './LogIn.jsx'
import Welcome from './Welcome.jsx'
import {yelpSearch} from '../Helpers.js'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: '',
      home: {},
      work: {},
      otherCity: '',
      lunch: '',
      homeSuggestion: {},
      otherCitySuggestion: {},
      showWeather: false,
      showTraffic: true,
      showLunch: false,
      suggestionMade: false,
      session: false
    };

    // $.ajax({
    //   method: 'GET', 
    //   url: 'http://127.0.0.1:3002/setUser',
    //   dataType: 'json',
    //   contentType: 'application/json',
    //   success: (data) => {
    //     this.setState({
    //       user: data.userName,
    //       home: data.homeObj,
    //       work: data.workObj,
    //       session: data.session
    //     });
    //   }
    // });

  }

  setNewUser(userObj) {
    console.log('HAPPENING')
    this.setState({
      user: userObj.userName,
      home: userObj.home,
      work: userObj.work,
      session: !this.state.session
    });
  }

  setLunch(e) {
    this.setState({
      lunch: e.target.value
    });
  }

  getLunch() {
    var hereOptions = {
      term: this.state.lunch,
      location: this.state.work
    };
    yelpSearch(hereOptions, function(suggestion) {
      this.setState({
        homeSuggestion: suggestion
      });
    });
    var thereOptions = {
      term: this.state.lunch,
      location: this.state.otherCity
    };
    yelpSearch(thereOptions, function(suggestion) {
      this.setState({
        otherCitySuggestion: suggestion
      });
    });
    this.setState({
      suggestionMade: true     
    });
  }

  toggleWeather() {
    this.setState({
      showWeather: !this.state.showWeather
    });
  }

  toggleTraffic() {
    this.setState({
      showTraffic: !this.state.showTraffic
    });
  }

  toggleLunch() {
    this.setState({
      showLunch: !this.state.showLunch
    });
  }

  render() {
    return (
      <div>
        <Header/>
        <div>
          {this.state.session ? <div><Welcome user={this.state.user}/>
                                <HomeTown cityName={this.state.home.city}
                                          setLunch={this.setLunch.bind(this)}
                                          getLunch={this.getLunch.bind(this)}
                                          suggestion={this.state.homeSuggestion}
                                          suggestionMade={this.state.suggestionMade}
                                          toggleWeather={this.toggleWeather.bind(this)}
                                          toggleTraffic={this.toggleTraffic.bind(this)}
                                          toggleLunch={this.toggleLunch.bind(this)}/>
                                <ComparisonTown cityName={this.state.otherCity}
                                                showWeather={this.state.showWeather}
                                                showTraffic={this.state.showTraffic}
                                                showLunch={this.state.showLunch}/></div> :
                                <LogIn setNewUser={this.setNewUser.bind(this)}/> }
        </div>                         
      </div>
    )
  }
}

export default App
