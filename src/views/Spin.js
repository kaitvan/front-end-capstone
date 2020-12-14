import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { getUserActivities } from '../helpers/data/activityData';
// import Canvas from '../components/Canvas';
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

  // draw = (ctx, frameCount) => {
  //   const { activities } = this.state;

  //   const startAngle = 0;
  //   const arc = Math.PI / (activities.length / 2);
  //   const outsideRadius = 200;
  //   const textRadius = 160;
  //   const insideRadius = 125;
  //   // ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  //   // ctx.fillStyle = '#000000';
  //   // ctx.beginPath();
  //   // ctx.arc(50, 100, 20 * Math.sin(frameCount * 0.05) ** 2, 0, 2 * Math.PI);
  //   // ctx.fill();

  //   ctx.strokeStyle = 'black';
  //   ctx.lineWidth = 2;

  //   ctx.font = '12px Poppins, sans-serif';

  //   for (let i = 0; i < activities.length; i += 1) {
  //     const angle = startAngle + i * arc;

  //     ctx.fillStyle = '#C7974F';

  //     ctx.beginPath();
  //     ctx.arc(250, 250, outsideRadius, angle, angle + arc, false);
  //     ctx.arc(250, 250, insideRadius, angle + arc, angle, true);
  //     ctx.stroke();
  //     ctx.fill();

  //     ctx.save();
  //     ctx.fillStyle = 'black';
  //     ctx.translate(250 + Math.cos(angle + arc / 2) * textRadius, 250 + Math.sin(angle + arc / 2) * textRadius);
  //     ctx.rotate(angle + arc / 2 + Math.PI / 2);

  //     const text = activities[i];

  //     ctx.fillText(text, -ctx.measureText(text).width / 2, 0);
  //     ctx.restore();
  //   }

  //   // arrow
  // };

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

  // drawSpinner = () => {
  //   const { canvas, ctx, activities } = this.state;
  //   const startAngle = 0;
  //   const arc = Math.PI / (activities.length / 2);
  //   const spinTimeout = null;
  //   const spinArcStart = 10;
  //   const spinTime = 0;
  //   const spinTimeTotal = 0;

  //   if (canvas.getContext()) {
  //     const outsideRadius = 200;
  //     const textRadius = 160;
  //     const insideRadius = 125;

  //     this.setState({ ctx: canvas.getContext('2d') });
  //     ctx.clearRect(0, 0, 500, 500);
  //     ctx.strokeStyle = 'black';
  //     ctx.lineWidth = 2;
  //     ctx.font = 'bold 12px Poppins, sans-serif';

  //     for (let i = 0; i < activities.length; i += 1) {
  //       const angle = (startAngle + i) * arc;
  //       ctx.fillStyle = this.getColor()[i];

  //       ctx.beginPath();
  //       ctx.arc(250, 250, outsideRadius, angle, angle + arc, false);
  //       ctx.arc(250, 250, insideRadius, angle + arc, angle, true);
  //       ctx.stroke();
  //       ctx.fill();

  //       ctx.save();
  //       ctx.fillStyle = 'black';
  //       ctx.translate(250 + Math.cos(angle + arc / 2) * textRadius, 250 + Math.sin(angle + arc / 2) * textRadius);
  //       ctx.rotate(angle + arc / 2 + Math.PI / 2);
  //       ctx.restore();

  //       ctx.fillStyle = 'black';
  //       ctx.beginPath();
  //       ctx.moveTo(250 - 4, 250 - (outsideRadius + 5));
  //       ctx.lineTo(250 + 4, 250 - (outsideRadius + 5));
  //       ctx.lineTo(250 + 4, 250 - (outsideRadius - 5));
  //       ctx.lineTo(250 + 9, 250 - (outsideRadius - 5));
  //       ctx.lineTo(250 + 0, 250 - (outsideRadius - 13));
  //       ctx.lineTo(250 - 9, 250 - (outsideRadius - 5));
  //       ctx.lineTo(250 - 4, 250 - (outsideRadius - 5));
  //       ctx.lineTo(250 - 4, 250 - (outsideRadius + 5));
  //       ctx.fill();
  //     }
  //   }

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
