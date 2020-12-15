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
    snapInProgress: false,
    optionsLoaded: 0,
    loaded: false,
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

  snapBack = () => {
    console.warn('spin finished');
    this.setState({ snapInProgress: false });
  }

  handleClick = (e) => {
    if (e.target.id === 'spin' && !this.state.snapInProgress) {
      clearTimeout(this.animId);
      const randomNumber = Math.floor(Math.random() * 30 + 10);
      this.tempTheta = randomNumber * (360 / this.state.activities.length);
      const time = this.tempTheta / 200;
      console.warn('this.tempTheta', this.tempTheta);
      console.warn('time', time);

      this.wheel.style.transform = `translate(-50%, -50%) rotate(${this.tempTheta}deg)`;
      this.wheel.style.transition = `all ${time}s`;

      for (let i = 0; i < this.wheel.children.length; i += 1) {
        this.wheel.children[i].style.transform = `translate(-50%, -50%) rotate(${-1 * this.tempTheta}deg)`;
        this.wheel.children[i].style.transition = `all ${time}s`;
      }

      this.animId = setTimeout(() => {
        this.setState({ theta: this.tempTheta, snapInProgress: true });
        this.snapBack();
      }, time);
    }
  }

  render() {
    return (
      <>
      <div ref={(refId) => { this.wheel = refId; }} className='wheel' style={styles.wheel}>
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
      <div id='spin' onClick={this.handleClick} className='wheel'>SPIN
        <div id='triangle-up'></div>
      </div>
      </>
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
    fontWeight: '500',
  },
};

export default Wheel;
