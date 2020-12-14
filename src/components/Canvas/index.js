import React, { useEffect, useRef } from 'react';

const Canvas = (props) => {
  const { draw, ...rest } = props;
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    let frameCount = 0;
    let animationFrameId = null;

    const render = () => {
      frameCount += 1;
      draw(context, frameCount);
      animationFrameId = window.requestAnimationFrame(render);
    };
    render();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [draw]);
  // may need to add draw in the array above

  return <canvas ref={canvasRef} {...rest}/>;
};

export default Canvas;
