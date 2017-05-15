import React from 'react';

class Lunch extends React.Component {

  render () {
    return (
      <div className='lunch'>
                                        
                                    <div id="middle">
                                      <img id="lunch" style={{"width" : "50px", "height" :"50px"}} src={require('url-loader?limit=10000!../../dist/styleresources/foods.png')} />
                                     </div> 
        {!this.props.suggestionMade ? <div id="middle">
                                        <div>
                                          <figcaption> What sounds good for lunch? </figcaption>
                                          <input type='text' onChange={this.props.setLunch} />
                                          <button onClick={this.props.getLunch}>Suggest a spot</button>
                                        </div>
                                      </div> : 
                                      <div id="middle">
                                        <div>
                                          Here Suggestion
                                          <div>
                                            <a href={this.props.suggestion.url} target="_blank">{this.props.suggestion.name}</a>
                                          </div>
                                        </div>
                                        <div>
                                          There Suggestion
                                          <div>
                                            <a href={this.props.thereSuggestion.url} target="_blank">{this.props.thereSuggestion.name}</a>
                                          </div>
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
