import React from 'react';

class Lunch extends React.Component {

  render () {
    return (
      <div>
        What sounds good for lunch?
        <input type='text' onChange={this.props.setLunch} />
        <button>Suggest a spot</button>
      </div>
    )
  }
}

export default Lunch;
