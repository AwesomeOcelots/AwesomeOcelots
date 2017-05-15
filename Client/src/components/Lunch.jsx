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
                                          At {this.props.suggestion.location.address1}
                                        </div>
                                        <div>
                                          <a href={this.props.suggestion.url} target="_blank">Check out this place</a>
                                        </div>
                                        <div>
                                          <a href={this.props.thereSuggestion} target="_blank">Check out that place</a>
                                        </div>
                                        <div>
                                          <button onClick={this.props.resetLunch}>Try Something Else</button>
                                        </div>
                                      </div>}
      </div>
    )
  }
}

export default Lunch;
