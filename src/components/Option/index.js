import React, { Component } from 'react';

class Option extends Component {
  state = {}

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.activities !== this.props.activities) {
      this.getMyCoordinates(this.props.radius);
    }
  }

  getMyCoordinates = (radius) => ({
    x: Math.sin((Math.PI / (this.props.activities.length / 2)) * this.props.i) * radius,
    y: Math.cos((Math.PI / (this.props.activities.length / 2)) * this.props.i) * radius,
  })

  newCoordinates = this.getMyCoordinates(this.props.radius);

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

export default Option;
