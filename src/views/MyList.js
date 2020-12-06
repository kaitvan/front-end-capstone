import React, { Component } from 'react';
import ActivityBubble from '../components/ActivityBubble';

class MyList extends Component {
  state = {
    activities: ['Go for a walk', 'Yoga', 'Dance it out', 'Write down three things you love about yourself'],
  }

  addActivity = () => {
    console.warn('add activity clicked');
  }

  render() {
    const { activities } = this.state;
    const showActivities = () => (
      activities.map((activity) => <ActivityBubble key={activity} activity={activity}/>)
    );

    return (
      <>
        <h1 className='banner'>My List</h1>
        <div className='content-text'>
          <button className='add-activity-btn' onClick={(e) => this.addActivity(e)}>Add an Activity</button>
          <div className='bubble-container'>
            {showActivities()}
          </div>
        </div>
      </>
    );
  }
}

export default MyList;
