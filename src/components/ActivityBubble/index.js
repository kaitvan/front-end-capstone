import React, { Component } from 'react';

class ActivityBubble extends Component {
  render() {
    const { activity } = this.props;
    return (
      <>
      <div className='activity-bubble'>{activity}</div>
      </>
    );
  }
}

export default ActivityBubble;
