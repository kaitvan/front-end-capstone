import React, { Component } from 'react';
import { getUserActivities } from '../helpers/data/activityData';
import Wheel from '../components/Wheel';
import Filter from '../components/Filter';

class Spin extends Component {
  state = {
    uid: this.props.user.uid,
    activities: [],
    filteredActivities: [],
    nothingFound: false,
  }

  componentDidMount() {
    this.getActivities();
  }

  getActivities = () => {
    getUserActivities(this.state.uid).then((activitiesArray) => {
      const activities = [];
      activitiesArray.map((activity) => activities.push(activity));

      this.setState({ activities });
    });
  }

  filterActivities = (e, timeFiltersArray, categoryFiltersArray) => {
    if (e.target.id === 'apply-filters') {
      let filteredActivities = [];

      if (timeFiltersArray.length === 0 && categoryFiltersArray.length === 0) {
        filteredActivities = this.state.activities;
        this.setState({ nothingFound: false });
      } else if (timeFiltersArray.length > 0 && categoryFiltersArray.length > 0) {
        filteredActivities = this.state.activities.filter((activity) => timeFiltersArray.includes(activity.time) && categoryFiltersArray.includes(activity.category));
        filteredActivities.length === 0 ? this.setState({ nothingFound: true }) : this.setState({ nothingFound: false });
      } else if (timeFiltersArray.length === 0) {
        filteredActivities = this.state.activities.filter((activity) => categoryFiltersArray.includes(activity.category));
        filteredActivities.length === 0 ? this.setState({ nothingFound: true }) : this.setState({ nothingFound: false });
      } else if (categoryFiltersArray.length === 0) {
        filteredActivities = this.state.activities.filter((activity) => timeFiltersArray.includes(activity.time));
        filteredActivities.length === 0 ? this.setState({ nothingFound: true }) : this.setState({ nothingFound: false });
      }

      this.setState({ filteredActivities });
    }
  }

  render() {
    const { activities, filteredActivities, nothingFound } = this.state;
    let useThisArray = [];

    if (filteredActivities.length === 0 && nothingFound) {
      useThisArray = filteredActivities;
    } else if (filteredActivities.length === 0 && !nothingFound) {
      useThisArray = activities;
    } else {
      useThisArray = filteredActivities;
    }

    if (useThisArray.length > 12) {
      const lastIndex = useThisArray.length - 1;
      useThisArray = useThisArray.slice(lastIndex - 12, lastIndex);
    }

    return (
      <>
      <h1 className='banner'>Spin</h1>
      <div className='content-text'>
        <Filter filterActivities={this.filterActivities}/>
        <div className='wheel'>
          <Wheel uid={this.state.uid} activities={useThisArray}/>
        </div>
      </div>
      </>
    );
  }
}

export default Spin;
