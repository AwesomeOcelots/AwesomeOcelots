import React from 'react';

class Header extends React.Component {
  render() {

    return (
      <div>
        <div>
          <img id="logo" src={require('url-loader?limit=10000!../../dist/styleresources/Logowhite.png')} />
          <figcaption id="quote"> Get to know awesome new places, maybe be reminded of the things you love about where you are,
          and finally answer the age old question "is the grass always greener on the other side...?" </figcaption>
          <br />
        </div>
        
        <div id="bg">
          <div>
          <video loop muted autoPlay id="bgvideo">
              <source src={require('url-loader?limit=10000!../../dist/styleresources/Background.mp4')}/>
           </video>
           </div>
           <div id="bglayer">
           </div>
          </div>
      </div>
    )
  }
}

export default Header
