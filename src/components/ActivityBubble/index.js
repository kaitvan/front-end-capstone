import React, { Component } from 'react';

class ActivityBubble extends Component {
  render() {
    const { activity } = this.props;
    return (
      <>
      <div className='activity-bubble' id={activity.firebaseKey}>{activity.title}</div>
      </>
    );
  }
}

export default ActivityBubble;
