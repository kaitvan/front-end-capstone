import React, { Component } from 'react';
import { getExploreActivities } from '../helpers/data/activityData';
import AppModal from '../components/AppModal';
import Filter from '../components/Filter';
import AddActivityForm from '../components/Forms/AddActivityForm';

class Explore extends Component {
  state = {
    uid: this.props.user.uid,
    activities: [],
    filteredActivities: [],
  }

  componentDidMount() {
    this.getExploreActivities();
  }

  getExploreActivities = () => {
    getExploreActivities(this.state.uid).then((activitiesArray) => {
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

    const showExploreActivities = () => (
      useThisArray.map((activity) => (
        <AppModal key={activity.firebaseKey} id={activity.firebaseKey} modalTitle={'Activity Details'} buttonLabel={activity.title} className='activity-bubble'>
          <AddActivityForm user={this.state.uid} activity={activity} onSave={this.getExploreActivities} update={true}/>
        </AppModal>))
    );
    return (
      <>
        <h1 className='banner'>Explore</h1>
        <div className='content-text'>
          <Filter filterActivities={this.filterActivities}/>
          <div className='bubble-container'>
              {showExploreActivities()}
            </div>
        </div>
      </>
    );
  }
}

export default Explore;
