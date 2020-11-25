import React from "react"
import { Circle } from 'react-konva';

export const KonvaTest = () => {
  const shapeRef = React.useRef(null);
  React.useEffect(() => {
    // it will log `Konva.Circle` instance
    console.log(shapeRef.current);
  });
  return(
      <>
      <Circle ref={shapeRef} />;
      </>
      ) 
}