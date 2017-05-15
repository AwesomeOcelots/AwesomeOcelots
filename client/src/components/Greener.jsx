import React from 'react'

class Greener extends React.Component {
  render() {
    return (
      <div id="middle">
        So what do you think, would you rather be here?
        <button onClick={this.props.chooseOtherCity}>Yup, the grass looks greener over there <i class="arrow right"></i> </button>
        <button onClick={this.props.chooseHome}><i class="arrow left"></i>Nope, I'm good where I am</button>
      </div>
    )
  }
}

export default Greener