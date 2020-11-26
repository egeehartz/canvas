import React, { useEffect, useRef } from "react"
import { Stage } from 'react-konva';
import { Line, Layer, Rect } from "konva";

export const KonvaTest = () => {

    const stageRef = useRef(null)

    useEffect(() => {
      //creates the grid
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
    
    //create a new layer
    const shapeLayer = new Layer({id:"shapes"})

    const drawRectangle = () => {
        console.log(shapeLayer.attrs)
        const blockSnapSize = 30;

        //get the x, y positions of the click
        const coordinates = stageRef.current.getPointerPosition()

        let arr = []
        let arr2 = []
        const clickX = coordinates.x
        const clickY = coordinates.y

        //finds the closest x coordinate (without going over)
        for(let i = 0; i < clickX ; i += 30){
          if (i > clickX) {
            break;
          } else {
            arr.push(i)
          }
        }

        //finds the closest y coordinate (without going over)
        for(let i = 0; i < clickY ; i += 30){
          if (i > clickY) {
            break;
          } else {
            arr2.push(i)
          }
        }

        //together, they make the top left corner of the Konva Rect
        const newX = arr.slice(-1)
        const newY = arr2.slice(-1)
        

        //create a rectangle 
        const rectangle = new Rect({
            x: newX[0],
            y: newY[0],
            height: blockSnapSize,
            width: blockSnapSize,
            fill: 'red',
            stroke: 'black',
            strokeWidth: 4,
            draggable: true
        })

        //add the rectangle to the layer then draw
        shapeLayer.add(rectangle)
        shapeLayer.draw()

        //add the layer to the stage
        stageRef.current.add(shapeLayer)
    }

    return (
        <Stage width={window.innerWidth} height={window.innerHeight}
            onClick={() => drawRectangle()} ref={stageRef}
            style={{cursor:"crosshair"}}>
        </Stage>
    );
}