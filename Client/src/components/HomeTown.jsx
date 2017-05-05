import React from 'react';
import Weather from './Weather.jsx'; 
import Traffic from './Traffic.jsx';
import Lunch from './Lunch.jsx';

class HomeTown extends React.Component {
  
  render() {

    return (
      <div className='hometown'>
        <h3>
          Your Home Town
        </h3>
        <div>
          <Weather />
        </div>
        <div>
          <Traffic />
        </div>
        <div>
          <Lunch setLunch={this.props.setLunch}/>
        </div>
      </div>
    )
  }
}

export default HomeTown