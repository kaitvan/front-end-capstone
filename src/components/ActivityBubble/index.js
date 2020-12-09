import React, { Component } from 'react';

class ActivityBubble extends Component {
  render() {
    const { activity, showActivityDetails } = this.props;
    return (
      <>
      <div className='activity-bubble' id={activity.firebaseKey} onClick={(e) => showActivityDetails(e)}>{activity.title}</div>
      </>
    );
  }
}

export default ActivityBubble;
