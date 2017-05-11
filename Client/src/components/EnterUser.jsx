import React from 'react'

class EnterUser extends React.Component {
  render() {
    return (
      <div>
        Name:
        <input type='text' onChange={this.props.setUser}/>
      </div>
    )
  }
}

export default EnterUser
