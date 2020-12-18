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
    nothingFound: false,
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
