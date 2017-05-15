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
      otherCity: 'Los Angeles',
      lunch: '',
      homeSuggestion: {},
      otherCitySuggestion: {},
      weatherHere: '',
      weatherThere: '',
      trafficHere: '',
      trafficThere: '',
      showWeather: false,
      showTraffic: false,
      showLunch: false,
      suggestionMade: false,
      choiceMade: false,
      session: false
    };

    $.ajax({
      method: 'GET', 
      url: 'http://127.0.0.1:3002/api/setUser',
      dataType: 'json',
      contentType: 'application/json',
      success: (data) => {
        this.setState({
          user: data.user,
          userId: data.userId,
          home: data.home,
          work: data.work,
          //otherCity: data.otherCity,
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
    var thisHere = this
    var hereOptions = {
      term: this.state.lunch,
      location: this.state.work.street + ', ' + this.state.work.city + ' ' + this.state.work.zip
    };
    var thereOptions = {
      term: this.state.lunch,
      location: this.state.otherCity
    };
    yelpSearch(hereOptions, function(hereSuggestion) {
      thisHere.setState({
        homeSuggestion: hereSuggestion
      });
      console.log(thisHere.state.homeSuggestion)
    });
    yelpSearch(thereOptions, function(thereSuggestion) {
      thisHere.setState({
        otherCitySuggestion: thereSuggestion
      });
      console.log(thisHere.state.otherCitySuggestion)
    });
    setTimeout(function() {
      thisHere.setState({
      suggestionMade: true     
      });
    }, 2000);
  }

  resetLunch() {
    this.setState({
      suggestionMade: !this.state.suggestionMade
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
                                          resetLunch={this.resetLunch.bind(this)}
                                          suggestion={this.state.homeSuggestion}
                                          thereSuggestion={this.state.otherCitySuggestion.url}
                                          suggestionMade={this.state.suggestionMade}
                                          toggleWeather={this.toggleWeather.bind(this)}
                                          toggleTraffic={this.toggleTraffic.bind(this)}
                                          toggleLunch={this.toggleLunch.bind(this)}
                                          chooseHome={this.chooseHome.bind(this)}
                                          chooseOtherCity={this.chooseOtherCity.bind(this)}
                                          choiceMade={this.state.choiceMade}/>
                                <ComparisonTown cityName={this.state.otherCity}
                                                weather={this.state.weatherThere}
                                                traffic={this.state.trafficThere}
                                                showWeather={this.state.showWeather}
                                                showTraffic={this.state.showTraffic}
                                                suggestionMade={this.state.suggestionMade}
                                                suggestion={this.state.otherCitySuggestion}
                                                showLunch={this.state.showLunch}/></div> :
                                <LogIn setNewUser={this.setNewUser.bind(this)}/> }
        </div>                         
      </div>
    )
  }
}

export default App
