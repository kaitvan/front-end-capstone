import React, { Component } from 'react';
import { getUserActivities } from '../helpers/data/activityData';
import Wheel from '../components/Wheel';

class Spin extends Component {
  state = {
    uid: this.props.user.uid,
    activities: [],
    chosenActivity: '',
    chosenColor: '',
    showActivity: false,
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

  render() {
    return (
      <>
      <h1 className='banner'>Spin</h1>
      <div className='content-text'>
          <Wheel uid={this.state.uid}/>
      </div>
      </>
    );
  }
}

export default Spin;
