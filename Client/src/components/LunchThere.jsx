import React from 'react';

class LunchThere extends React.Component {

  render () {
    return (
      <div className='lunch there' >
        If you were here I'd say try'
        <div>
          Try {this.props.suggestion.name}
        </div>
        <div>
          {this.props.suggestion.description}
        </div>                             
      </div>
    )
  }
}

export default LunchThere
