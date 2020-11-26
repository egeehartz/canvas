import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Canvas } from './Canvas';
import { KonvaTest } from './Konva';
//import { GridTest } from "./Grid";

ReactDOM.render(
  <React.StrictMode>
    {/* <Canvas /> */}
    <KonvaTest />
    {/* <GridTest /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
