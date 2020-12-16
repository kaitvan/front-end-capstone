import React, { Component } from 'react';
import { getUserActivities } from '../helpers/data/activityData';
import Wheel from '../components/Wheel';
import Filter from '../components/Filter';

class Spin extends Component {
  state = {
    uid: this.props.user.uid,
    activities: [],
    showActivity: false,
    filteredActivities: [],
  }

  componentDidMount() {
    this.getActivities();
  }

  getActivities = () => {
    getUserActivities(this.state.uid).then((activitiesArray) => {
      const activities = [];
      activitiesArray.map((activity) => activities.push(activity.title));
      this.setState({ activities });
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
    return (
      <>
      <h1 className='banner'>Spin</h1>
      <div className='content-text'>
        <Filter filterActivities={this.filterActivities}/>
        <Wheel uid={this.state.uid}/>
      </div>
      </>
    );
  }
}

export default Spin;
