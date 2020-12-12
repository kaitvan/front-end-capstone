import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { getUserActivities } from '../helpers/data/activityData';

class Spin extends Component {
  state = {
    uid: this.props.user.uid,
    activities: [],
    chosenActivity: '',
    chosenColor: '',
    showActivity: false,
    // ctx: {},
    // canvas: document.getElementById('canvas'),
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

  getColor = () => {
    const colors = ['$lightpink', '$camel', '$warmpink', '$brown', '$redwood'];
    return colors[Math.floor(Math.random() * colors.length)];
  }

  spin = () => {
    const { activities } = this.state;
    this.setState({ showActivity: false });
    console.warn(activities);
    let i = 0;
    const mySpinner = () => {
      if (i >= activities.length) {
        i = 0;
        this.setState({ chosenActivity: activities[i] });
        i += 1;
      } else {
        this.setState({ chosenActivity: activities[i] });
        i += 1;
      }
    };
    const rotate = setInterval(mySpinner, 2000);
    const stopRotation = () => {
      clearInterval(rotate);
      this.setState({ showActivity: true });
    };
    const totalTime = Math.random() * 10000 + 3000;
    setTimeout(stopRotation, totalTime);
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
  // }

  render() {
    return (
      <>
      <h1 className='banner'>Spin</h1>
      <div className='content-text'>
        <Button type='button' className='spin-btn' id='spin' onClick={this.spin}>Spin</Button>
          {/* <canvas id='canvas' width='500' height='500'>{this.drawSpinner()}</canvas> */}
        <div className='spinner'>{this.state.chosenActivity}</div>
        { this.state.showActivity ? (<div className='chosenActivity'>{this.state.chosenActivity}</div>) : ('') }
      </div>
      </>
    );
  }
}

export default Spin;
