import React from 'react'

class EnterHome extends React.Component {
  render () {
    return (
      <div>  
        <h3>
        Home Address
        </h3>
        <div>
          Street:
          <input type='text' onChange={this.props.setHomeStreet}/>
        </div>
        <div>
          City:
          <input type='text' onChange={this.props.setHomeCity}/>
        </div>
        <div>
          Zip:
          <input type='text' onChange={this.props.setHomeZip}/>
        </div>
      </div>
    )
  }
}

export default EnterHome
