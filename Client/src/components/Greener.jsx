import React from 'react'

class Greener extends React.Component {
  render() {
    return (
      <div>
        So what do you think, would you rather be here?
        <button onClick={this.props.chooseOtherCity}>Yup, the grass looks greener over there</button>
        <button onClick={this.props.chooseHome}>Nope, I'm good where I am</button>
      </div>
    )
  }
}

export default Greener