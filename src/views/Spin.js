import React, { Component } from 'react';
import { Button } from 'reactstrap';
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

  spin = () => {
    const { activities } = this.state;
    this.setState({ showActivity: false });
    // let i = 0;
    const chosenActivity = activities[Math.floor(Math.random() * activities.length)];
    console.warn('chosen', chosenActivity);
    // const mySpinner = () => {
    //   if (i >= activities.length) {
    //     i = 0;
    //     this.setState({ chosenActivity: activities[i] });
    //     i += 1;
    //   } else {
    //     this.setState({ chosenActivity: activities[i] });
    //     i += 1;
    //   }
    // };

    // const totalTime = Math.random() * 3000 + 1000;

    // const setTimer = (intervalFunction, timeoutFunction, time) => {
    //   const interval = setInterval(intervalFunction, speed);

    //   const slowRotation = () => {
    //     clearInterval(interval);
    //     setTimer(mySpinner, 'slower', speed + 1000, totalTime);
    //   };

    //   const slowerRotation = () => {
    //     clearInterval(interval);
    //     setTimer(mySpinner, 'slowest', speed + 1000, totalTime);
    //   };

    //   const slowestRotation = () => {
    //     clearInterval(interval);
    //     setTimer(mySpinner, 'stop', speed + 1000, totalTime);
    //   };

    //   const stopRotation = () => {
    //     clearInterval(interval);
    //     this.setState({ showActivity: true, chosenActivity });
    //   };

    //   if (timeoutFunction === 'slow') {
    //     setTimeout(slowRotation, time);
    //   } else if (timeoutFunction === 'slower') {
    //     setTimeout(slowerRotation, time);
    //   } else if (timeoutFunction === 'slowest') {
    //     setTimeout(slowestRotation, time);
    //   } else if (timeoutFunction === 'stop') {
    //     setTimeout(stopRotation, time);
    //   }
    // };

    // setTimer(mySpinner, 'slow', totalTime);
  }

  render() {
    return (
      <>
      <h1 className='banner'>Spin</h1>
      <div className='content-text'>
        { this.state.activities.length && <Button type='button' className='spin-btn' id='spin' onClick={this.spin}>Spin</Button>}
          <Wheel uid={this.state.uid}/>
      </div>
      </>
    );
  }
}

export default Spin;
