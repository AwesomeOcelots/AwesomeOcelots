import React from 'react';

class Lunch extends React.Component {

  render () {
    return (
      <div className='lunch' onMouseEnter={this.props.toggleLunch}
                             onMouseLeave={this.props.toggleLunch}>
                                        
                                    <div id="middle">
                                      <img id="lunch" style={{"width" : "50px", "height" :"50px"}} src={require('url-loader?limit=10000!../../dist/styleresources/foods.png')} />
                                     </div> 
        {!this.props.suggestionMade ? <div>
                                     <div>
                                      <figcaption> What sounds good for lunch? </figcaption>
                                        <input type='text' onChange={this.props.setLunch} />
                                        <button onClick={this.props.getLunch}>Suggest a spot</button>
                                        </div>
                                      </div> : 
                                      <div>
                                        <div>
                                          Try {this.props.suggestion.name}
                                        </div>
                                        <div>
                                          At {this.props.suggestion.location.address1}
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
