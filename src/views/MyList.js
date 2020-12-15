import React, { Component } from 'react';
import AppModal from '../components/AppModal';
import ActivityForm from '../components/Forms/ActivityForm';
import { getUserActivities } from '../helpers/data/activityData';
import Filter from '../components/Filter';

class MyList extends Component {
  state = {
    uid: this.props.user.uid,
    activities: [],
    filteredActivities: [],
  }

  componentDidMount() {
    this.getActivities();
  }

  getActivities = () => {
    getUserActivities(this.state.uid).then((activitiesArray) => {
      this.setState({ activities: activitiesArray });
    });
  }

  filterActivities = (e, timeFiltersArray, categoryFiltersArray) => {
    if (e.target.id === 'apply-filters') {
      let activitiesFilteredByTime = [];
      let activitiesFilteredByCategory = [];

      if (timeFiltersArray.length === 0) {
        activitiesFilteredByTime = this.state.activities;
      } else {
        this.state.activities.map((activity) => {
          if (timeFiltersArray.includes(activity.time)) {
            activitiesFilteredByTime.push(activity);
          }
          return activitiesFilteredByTime;
        });
      }

      if (categoryFiltersArray.length === 0) {
        activitiesFilteredByCategory = activitiesFilteredByTime;
      } else {
        activitiesFilteredByTime.map((activity) => {
          if (categoryFiltersArray.includes(activity.category)) {
            activitiesFilteredByCategory.push(activity);
          }
          return activitiesFilteredByCategory;
        });
      }

      this.setState({ filteredActivities: activitiesFilteredByCategory });
    }
  }

  render() {
    const { activities, filteredActivities } = this.state;
    let useThisArray = [];

    if (filteredActivities.length === 0) {
      useThisArray = activities;
    } else {
      useThisArray = filteredActivities;
    }

    const showActivities = () => (
      useThisArray.map((activity) => (
        <AppModal key={activity.firebaseKey} id={activity.firebaseKey} modalTitle={'Activity Details'} buttonLabel={activity.title} className='activity-bubble'>
          <ActivityForm user={this.state.uid} activity={activity} onSave={this.getActivities} update={true}/>
        </AppModal>))
    );

    return (
      <>
        <h1 className='banner'>My List</h1>
        <div className='content-text'>
          <AppModal buttonLabel='Add an Activity' className='add-activity-btn' modalTitle='Add an Activity'>
            <ActivityForm user={this.state.uid} onSave={this.getActivities} update={false}/>
          </AppModal>
          <Filter filterActivities={this.filterActivities}/>
          <div className='bubble-container'>
            {showActivities()}
          </div>
        </div>
      </>
    );
  }
}

export default MyList;
