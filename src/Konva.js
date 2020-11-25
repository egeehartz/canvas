import React, { useEffect, useRef } from "react"
import { Stage } from 'react-konva';
import { Circle, Line, Layer } from "konva";

export const KonvaTest = () => {

    const layerRef = useRef(null)
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

    const drawCircle = () => {
        console.log('hear hear')

        const shapeLayer = new Layer()

        const circle = new Circle({
            x: 100,
            y: 100,
            radius: 70,
            fill: 'red',
            stroke: 'black',
            strokeWidth: 4
        })

        shapeLayer.add(circle)
        shapeLayer.draw()

        stageRef.current.add(shapeLayer)
    }

    return (
        <Stage width={window.innerWidth} height={window.innerHeight}
            onClick={() => drawCircle()} ref={stageRef}>
            {/* <Layer ref={layerRef} >
            </Layer> */}
        </Stage>
    );
}