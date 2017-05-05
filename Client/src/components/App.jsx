import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header.jsx';
import HomeTown from './Hometown.jsx';
import ComparisonTown from './ComparisonTown.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        <Header/>
        <hr></hr>
        <HomeTown />
        <ComparisonTown />
    </div>
    )
  }
}

export default App
