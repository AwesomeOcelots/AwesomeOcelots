import React from 'react';

class Lunch extends React.Component {

  render () {
    return (
      <div className='lunch' onMouseEnter={this.props.toggleLunch}
                             onMouseLeave={this.props.toggleLunch}>
        {!this.props.suggestionMade ? <div>
                                        What sounds good for lunch?
                                        <input type='text' onChange={this.props.setLunch} />
                                        <button onClick={this.props.getLunch}>Suggest a spot</button>
                                      </div> : 
                                      <div>
                                        <div>
                                          Try {this.props.suggestion.name}
                                        </div>
                                        <div>
                                          At {this.props.suggestion.address}
                                        </div>
                                      </div>}
      </div>
    )
  }
}

export default Lunch;
