import React, { useEffect, useRef } from "react"




export const Canvas = () => {
const canvasRef = useRef(null)
const contextRef = useRef(null)

    useEffect(() => {
        // Box width
        const bw = 400;
        // Box height
        const bh = 400;
        // Padding
        const p = 10;
        
        const canvas = canvasRef.current
        const context = canvas.getContext("2d");

            for (let x = 0; x <= bw; x += 40) {
                context.moveTo(0.5 + x + p, p);
                context.lineTo(0.5 + x + p, bh + p);
            }
        
            for (let x = 0; x <= bh; x += 40) {
                context.moveTo(p, 0.5 + x + p);
                context.lineTo(bw + p, 0.5 + x + p);
            }
            context.strokeStyle = "black";
            context.stroke();

    },[])

    const drawX = (e) => {
        const canvas = canvasRef.current;

        const ctx = canvas.getContext("2d");
        contextRef.current = ctx;
    
        const x = e.nativeEvent.offsetX;
        const y = e.nativeEvent.offsetY;
        const r = 20;
    
        ctx.beginPath();
        ctx.arc(x, y, r, Math.PI * 2, false);
        ctx.strokeStyle = "#FF0000";
        ctx.lineWidth = 4;
        ctx.stroke();
    }

    return (
        <>
        <h1>TEST</h1>
            <canvas ref={canvasRef} width="420px" height="420px" 
            onClick={drawX}></canvas>
        </>
    )
}