import React from 'react';

class Lunch extends React.Component {

  render () {
    return (
      <div className='lunch' onMouseEnter={this.props.toggleLunch}
                             onMouseLeave={this.props.toggleLunch}>
        What sounds good for lunch?
        <input type='text' onChange={this.props.setLunch} />
        <button>Suggest a spot</button>
      </div>
    )
  }
}

export default Lunch;
