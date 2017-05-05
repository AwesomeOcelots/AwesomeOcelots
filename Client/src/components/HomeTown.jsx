import React from 'react';
//import App from './App.jsx';
import Weather from './Weather.jsx'; 

class HomeTown extends React.Component {
  
  render() {

    return (
      <div className='hometown'>
        <h3>
          Your Home Town
        </h3>
        <Weather />
      </div>
    )
  }
}

export default HomeTown