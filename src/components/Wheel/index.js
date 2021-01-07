import React, { Component } from 'react';
import Option from '../Option';

class Wheel extends Component {
  state = {
    radius: 200,
    theta: 0.0,
    activities: this.props.activities,
    uid: this.props.uid,
    centerOfWheel: {},
    spinInProgress: false,
  }

  tempTheta = 0.0;

  animId = null;

  componentDidMount() {
    const centerOfWheel = {
      x: parseFloat(this.wheel.style.width) / 2,
      y: parseFloat(this.wheel.style.height) / 2,
    };

    this.setState({ centerOfWheel });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.activities !== this.props.activities) {
      this.setState({ activities: this.props.activities, theta: 0.0 });
      this.tempTheta = 0.0;
      this.wheel.style.transform = 'translate(-50%, -50%) rotate(0deg)';
      this.wheel.style.transition = 'all 0s';
      for (let i = 0; i < this.wheel.children.length; i += 1) {
        this.wheel.children[i].style.transform = 'translate(-50%, -50%) rotate(0deg)';
        this.wheel.children[i].style.transition = 'all 0s';
      }
    }
  }

  stopSpin = () => {
    this.setState({ spinInProgress: false, theta: 0.0 });
  }

  handleClick = (e) => {
    if (e.target.id === 'spin' && !this.state.spinInProgress) {
      clearTimeout(this.animId);
      const randomNumber = Math.floor(Math.random() * this.state.activities.length + 20);
      this.tempTheta += randomNumber * (360 / this.state.activities.length);
      const time = randomNumber / 8;

      this.wheel.style.transform = `translate(-50%, -50%) rotate(${this.tempTheta}deg)`;
      this.wheel.style.transition = `all ${time}s`;

      for (let i = 0; i < this.wheel.children.length; i += 1) {
        this.wheel.children[i].style.transform = `translate(-50%, -50%) rotate(${-1 * this.tempTheta}deg)`;
        this.wheel.children[i].style.transition = `all ${time}s`;
      }

      this.animId = setTimeout(() => {
        this.setState({ spinInProgress: true, theta: this.tempTheta });
        this.stopSpin();
      }, time);
    }
  }

  render() {
    const showActivities = () => this.state.activities.map((activity, i) => (
        <Option
          key={activity.firebaseKey}
          activity={activity}
          i={i}
          numberOfActivities={this.state.activities.length}
          activities={this.state.activities}
          radius={this.state.radius}
          center={this.state.centerOfWheel}
          style={{ transform: `rotate(-${this.state.theta}deg)` }}
        />));

    return (
      <>
      <div ref={(refId) => { this.wheel = refId; }} className='wheel' style={styles.wheel}>
        {showActivities()}
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
    top: '60%',
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
