import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header.jsx';
import HomeTown from './Hometown.jsx';
import ComparisonTown from './ComparisonTown.jsx';
import LogIn from './LogIn.jsx';
import Welcome from './Welcome.jsx';
import {yelpSearch} from '../Helpers.js'


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: '',
      home: '',
      otherCity: '',
      work: '',
      lunch: '',
      homeSuggestion: {},
      otherCitySuggestion: {},
      showWeather: false,
      showTraffic: false,
      showLunch: false,
      suggestionMade: false, 
      session: false
    };
  }

  setUser(e) {
    this.setState({
      user: e.target.value
    });
  }
  
  setHome(e) {
    this.setState({
      home: e.target.value
    })
  }

  setWork(e) {
    this.setState({
      work: e.target.value
    })
  }

  logIn() {
    this.setState({
      session: !this.state.session
    })
  }

  setLunch(e) {
    this.setState({
      lunch: e.target.value
    })
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
  }

  toggleWeather() {
    this.setState({
      showWeather: !this.state.showWeather
    })
  }

  toggleTraffic() {
    this.setState({
      showTraffic: !this.state.showTraffic
    })
  }

  toggleLunch() {
    this.setState({
      showLunch: !this.state.showLunch
    })
  }

  render() {
    return (
      <div>
        <Header/>
        {this.state.session ? <div>
                                <Welcome user={this.state.user}/>
                                <HomeTown setLunch={this.setLunch.bind(this)}
                                          suggestion={this.state.homeSuggestion}
                                          suggestionMade={this.state.suggestionMade}
                                          toggleWeather={this.toggleWeather.bind(this)}
                                          toggleTraffic={this.toggleTraffic.bind(this)}
                                          toggleLunch={this.toggleLunch.bind(this)}/>
                                <ComparisonTown showWeather={this.state.showWeather}
                                                showTraffic={this.state.showTraffic}
                                                showLunch={this.state.showLunch}/>
                              </div>:
                                <LogIn setUser={this.setUser.bind(this)}
                                       setHome={this.setHome.bind(this)}
                                       setWork={this.setWork.bind(this)}
                                       logIn={this.logIn.bind(this)}/>}   
    </div>
    )
  }
}

export default App
