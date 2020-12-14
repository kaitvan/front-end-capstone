import React from 'react';

function getMyCoordinates(theta, radius) {
  return {
    x: Math.cos(theta) * radius,
    y: Math.sin(theta) * radius,
  };
}

function Option(props) {
  const newCoordinates = getMyCoordinates(props.theta, props.radius);

  return (
  <div className='option' style={ { ...styles.option, left: `${props.center.x + newCoordinates.x}px`, top: `${props.center.y - newCoordinates.y}px` } }>{props.activity.title}</div>
  );
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

// react.memo keeps those elements from re-rendering every time a parent renders
