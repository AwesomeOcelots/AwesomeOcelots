import React from 'react'
import $ from 'jquery'
import Header from './Header.jsx'
import HomeTown from './Hometown.jsx'
import ComparisonTown from './ComparisonTown.jsx'
import LogIn from './LogIn.jsx'
import Welcome from './Welcome.jsx'
import { yelpSearch, greener } from '../Helpers.js'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: '',
      userId: '',
      home: {},
      work: {},
      otherCity: '',
      lunch: '',
      homeSuggestion: {},
      otherCitySuggestion: {},
      weatherHere: '',
      weatherThere: '',
      trafficHere: '',
      trafficThere: '',
      showWeather: false,
      showTraffic: true,
      showLunch: false,
      suggestionMade: false,
      choiceMade: false,
      session: false
    };

    $.ajax({
      method: 'GET', 
      url: 'http://127.0.0.1:3002/setUser',
      dataType: 'json',
      contentType: 'application/json',
      success: (data) => {
        this.setState({
          user: data.userName,
          userId: data.userId,
          home: data.homeObj,
          work: data.workObj,
          otherCity: data.otherCity,
          weatherHere: data.weatherHere,
          weatherThere: data.weatherThere,
          trafficHere: data.trafficHere,
          trafficThere: data.trafficThere,
          session: data.session
        });
      }
    });

  }

  setNewUser(userObj) {
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

  chooseHome() {
    this.setState({
      choiceMade: true
    });
  }

  chooseOtherCity() {
    var likeObj = {
      userId: this.state.userId,
      otherCity: this.state.otherCity
    };
    this.chooseHome();
    greener(likeObj);
  }

  render() {
    return (
      <div>
        <Header/>
        <div>
          {this.state.session ? <div><Welcome user={this.state.user}/>
                                <HomeTown cityName={this.state.home.city}
                                          weather={this.state.weatherHere}
                                          traffic={this.state.trafficHere}
                                          setLunch={this.setLunch.bind(this)}
                                          getLunch={this.getLunch.bind(this)}
                                          suggestion={this.state.homeSuggestion}
                                          suggestionMade={this.state.suggestionMade}
                                          toggleWeather={this.toggleWeather.bind(this)}
                                          toggleTraffic={this.toggleTraffic.bind(this)}
                                          toggleLunch={this.toggleLunch.bind(this)}/>
                                <ComparisonTown cityName={this.state.otherCity}
                                                weather={this.state.weatherThere}
                                                traffic={this.state.trafficThere}
                                                showWeather={this.state.showWeather}
                                                showTraffic={this.state.showTraffic}
                                                suggestion={this.state.otherCitySuggestion}
                                                showLunch={this.state.showLunch}
                                                chooseHome={this.chooseHome.bind(this)}
                                                chooseOtherCity={this.chooseOtherCity.bind(this)}
                                                choiceMade={this.state.choiceMade}/></div> :
                                <LogIn setNewUser={this.setNewUser.bind(this)}/> }
        </div>                         
      </div>
    )
  }
}

export default App
