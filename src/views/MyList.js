import React, { Component } from 'react';
// import ActivityBubble from '../components/ActivityBubble';
import AppModal from '../components/AppModal';
import ActivityForm from '../components/Forms/ActivityForm';
import { getUserActivities } from '../helpers/data/activityData';

class MyList extends Component {
  state = {
    uid: this.props.user.uid,
    activities: [],
  }

  componentDidMount() {
    this.getActivities();
  }

  getActivities = () => {
    getUserActivities(this.state.uid).then((activitiesArray) => {
      this.setState({ activities: activitiesArray });
    });
  }

  // showActivityDetails = (e) => {
  //   const firebaseKey = e.target.id;
  //   console.warn('activity clicked key', firebaseKey);
  // }

  render() {
    const { activities } = this.state;
    const showActivities = () => (
      activities.map((activity) => (
        <AppModal key={activity.firebaseKey} id={activity.firebaseKey} modalTitle={'Activity Details'} buttonLabel={activity.title} className='activity-bubble'>
          <ActivityForm user={this.state.uid} activity={activity} onSave={this.getActivities} update={true}/>
        </AppModal>))
    );
      // activities.map((activity) => <ActivityBubble key={activity.firebaseKey} activity={activity} showActivityDetails={this.showActivityDetails}/>)

    return (
      <>
        <h1 className='banner'>My List</h1>
        <div className='content-text'>
          <AppModal buttonLabel='Add an Activity' className='add-activity-btn' modalTitle='Add an Activity'>
            <ActivityForm user={this.state.uid} onSave={this.getActivities} update={false}/>
          </AppModal>
          <div className='bubble-container'>
            {showActivities()}
          </div>
        </div>
      </>
    );
  }
}

export default MyList;
