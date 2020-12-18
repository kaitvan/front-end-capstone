import React, { Component } from 'react';

class Option extends Component {
  state = {
    coordinates: {
      x: '',
      y: '',
    },
  }

  componentDidMount() {
    this.setCoordinates();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.activities !== this.props.activities) {
      this.setCoordinates();
    }
  }

  getMyCoordinates = (radius) => ({
    x: Math.sin((Math.PI / (this.props.numberOfActivities / 2)) * this.props.i) * radius,
    y: Math.cos((Math.PI / (this.props.numberOfActivities / 2)) * this.props.i) * radius,
  })

  setCoordinates = () => {
    const newCoordinates = this.getMyCoordinates(this.props.radius);
    this.setState({ coordinates: newCoordinates });
  }

  render() {
    return (
      <div className='option'
        style={ {
          ...styles.option,
          left: `${this.props.center.x + this.state.coordinates.x}px`,
          top: `${this.props.center.y - this.state.coordinates.y}px`,
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
