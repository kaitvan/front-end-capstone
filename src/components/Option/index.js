import React, { Component } from 'react';

class Option extends Component {
  state = {}

  getMyCoordinates = (theta, radius) => ({
    x: Math.sin(theta) * radius,
    y: Math.cos(theta) * radius,
  })

  newCoordinates = this.getMyCoordinates(this.props.theta, this.props.radius);

  render() {
    return (
      <div className='option'
        style={ {
          ...styles.option,
          left: `${this.props.center.x + this.newCoordinates.x}px`,
          top: `${this.props.center.y - this.newCoordinates.y}px`,
        } }>{this.props.activity.title}</div>
    );
  }
}

const styles = {
  option: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    height: '100px',
    width: '100px',
    backgroundColor: '#C7974F',
    color: '#f5eedc',
    display: 'flex',
    textAlign: 'center',
    transform: 'translate(-50%, -50%)',
    borderRadius: '50%',
  },
};

export default React.memo(Option);
