import React, { useEffect, useRef } from "react"
import { Stage } from 'react-konva';
import { Circle, Line, Layer, Rect } from "konva";

export const KonvaTest = () => {

    const stageRef = useRef(null)

    useEffect(() => {
        const blockSnapSize = 30;
        const padding = blockSnapSize;
        const width = window.innerWidth;
        const height = window.innerHeight;
    
        const gridLayer = new Layer()
    
        for (let i = 0; i < width / padding; i++) {
            gridLayer.add(new Line({
              points: [Math.round(i * padding) + 0.5, 0, Math.round(i * padding) + 0.5, height],
              stroke: '#ddd',
              strokeWidth: 1,
            }));
          }
          
          gridLayer.add(new Line({points: [0,0,10,10]}));
    
          for (let j = 0; j < height / padding; j++) {
            gridLayer.add(new Line({
              points: [0, Math.round(j * padding), width, Math.round(j * padding)],
              stroke: '#ddd',
              strokeWidth: 0.5,
            }));
          }

        stageRef.current.add(gridLayer)
    },[])
    
    const shapeLayer = new Layer()

    const drawCircle = () => {
        const blockSnapSize = 30;
        //get the x, y positions of the click
        const coordinates = stageRef.current.getPointerPosition()

        console.log(Math.round(coordinates.y / blockSnapSize) * blockSnapSize)

        //create a new layer

        //create a circle 
        const circle = new Rect({
            x: Math.round(coordinates.x / blockSnapSize) * blockSnapSize,
            y: Math.round(coordinates.y / blockSnapSize) * blockSnapSize,
            height: blockSnapSize,
            width: blockSnapSize,
            fill: 'red',
            stroke: 'black',
            strokeWidth: 4,
            draggable: true
        })

        //add the circle to the layer then draw
        shapeLayer.add(circle)
        shapeLayer.draw()

        //add the layer to the stage
        stageRef.current.add(shapeLayer)
    }

    return (
        <Stage width={window.innerWidth} height={window.innerHeight}
            onClick={() => drawCircle()} ref={stageRef}
            style={{cursor:"crosshair"}}>
        </Stage>
    );
}