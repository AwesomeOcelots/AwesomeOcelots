import React from 'react';

class LunchThere extends React.Component {

  render () {
    return (
      <div className='lunch there' >
       {this.props.suggestionMade ? 
       <div>
          If you were here I'd say try'
          <div>
            Try {this.props.suggestion.name}
          </div>         
       </div> :
       <div>
         Wonder what's good here?'
       </div>}
       
      </div>
    )
  }
}

export default LunchThere
