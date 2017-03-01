import React, {Component, PropTypes} from 'react'
import ScaledGrid from './ScaledGrid'
import './success-message.scss'

class SuccessMessage extends Component {
  render() {
    return (
      <ScaledGrid>
        <div className='success-message'>
          <div className='inner'>{this.props.message}</div>
        </div>
      </ScaledGrid>
    )
  }
}

SuccessMessage.propTypes = {
  message: PropTypes.string.isRequired
}

export default SuccessMessage
