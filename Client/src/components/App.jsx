import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header.jsx';
import HomeTown from './Hometown.jsx';
import ComparisonTown from './ComparisonTown.jsx';
import LogIn from './LogIn.jsx';
import Welcome from './Welcome.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: '',
      home: '',
      work: '',
      lunch: '',
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
    console.log(this.state.lunch)
  }


  render() {
    return (
      <div>
        <Header/>
        {this.state.session ? <div>
                                <Welcome user={this.state.user}/>
                                <HomeTown setLunch={this.setLunch.bind(this)}/>
                                <ComparisonTown />
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
