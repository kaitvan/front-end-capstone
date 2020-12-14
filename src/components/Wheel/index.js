import React, { Component } from 'react';
import Option from '../Option';
import { getUserActivities } from '../../helpers/data/activityData';

class Wheel extends Component {
  state = {
    radius: 200,
    options: [],
    theta: 0.0,
    activities: [],
    uid: this.props.uid,
    centerOfWheel: {},
  }

  tempTheta = 0.0;

  animId = null;

  componentDidMount() {
    this.getActivities();

    const centerOfWheel = {
      x: parseFloat(this.wheel.style.width) / 2,
      y: parseFloat(this.wheel.style.height) / 2,
    };

    this.setState({ centerOfWheel });
  }

  getActivities = () => {
    getUserActivities(this.state.uid).then((activitiesArray) => {
      this.setState({ activities: activitiesArray });
    });
  }

  handleScroll = (e) => {
    clearTimeout(this.animId);
    const scrollSpeed = (e.deltaY / 360) * 20;
    this.tempTheta += scrollSpeed;

    this.wheel.style.transform = `translate(-50%, -50%) rotate(${this.tempTheta}deg)`;

    for (let i = 0; i < this.wheel.children.length; i += 1) {
      this.wheel.children[i].style.transform = `translate(-50%, -50%) rotate(${-1 * this.tempTheta}deg)`;
    }

    this.animId = setTimeout(() => {
      this.setState({ theta: this.tempTheta });
    }, 150);
  }

  startAngle = 0;

  spinTimeout = null;

  // handleClick = (e) => {
  //   if (e.target.id === 'spin') {
  //     const spinAngleStart = Math.random() * 10 + 10;
  //     let spinTime = 0;
  //     const spinTimeTotal = Math.random() * 3 + 4 * 1000;

  //     const stopRotateWheel = () => {
  //       clearTimeout(this.spinTimeout);
  //     };

  //     const easeOut = (t, b, c, d) => {
  //       const ts = (t / d) * t;
  //       const tc = ts * t;
  //       return b + c * (tc + -3 * ts + 3 * t);
  //     };

  //     const rotateWheel = () => {
  //       spinTime += 30;
  //       if (spinTime >= spinTimeTotal) {
  //         stopRotateWheel();
  //       }
  //       const spinAngle = spinAngleStart - easeOut(spinTime, 0, spinAngleStart, spinTimeTotal);
  //       this.startAngle += (spinAngle * Math.PI / 180);
  //       this.spinTimeout = setTimeout(rotateWheel(), 30);
  //     };

  //     rotateWheel();
  //   }
  // }

  render() {
    return (
      <div onWheel={this.handleScroll} id='spin' onClick={this.handleClick} ref={(refId) => { this.wheel = refId; }} className='wheel' style={styles.wheel}>SPIN
        {this.state.activities.map((activity, i) => (
        <Option
          key={activity.firebaseKey}
          activity={activity}
          theta={(Math.PI / (this.state.activities.length / 2)) * i}
          radius={this.state.radius}
          center={this.state.centerOfWheel}
          style={{ transform: `rotate(-${this.state.theta * 0.07}deg)` }}
        />))}
      </div>
    );
  }
}

const styles = {
  wheel: {
    position: 'absolute',
    top: '50%',
    left: '60%',
    height: '200px',
    width: '200px',
    backgroundColor: '#A66255',
    transform: 'translate(-50%, -50%)',
    borderRadius: '50%',
  },
};

export default Wheel;
