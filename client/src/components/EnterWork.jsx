import React from 'react'

class EnterWork extends React.Component {
  render () {
    return (
      <div>  
        <h3>
        Work Address
        </h3>
        <div>
          Street:
          <input type='text' onChange={this.props.setWorkStreet}/>
        </div>
        <div>
          City:
          <input type='text' onChange={this.props.setWorkCity}/>
        </div>
        <div>
          Zip:
          <input type='text' onChange={this.props.setWorkZip}/>
        </div>
      </div>
    )
  }
}

export default EnterWork
