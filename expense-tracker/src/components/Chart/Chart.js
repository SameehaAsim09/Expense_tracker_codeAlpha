import React from 'react'
import ChartBar from './ChartBar';
import "./Chart.css";


export default function Chart(props) {
    const maxDataPoints = props.newDataPoints.map((datapoints) => datapoints.value);
    const maxValue = Math.max(...maxDataPoints);
  return (
    <div className='chart'>
      {props.newDataPoints.map((newdatapoints) => (
        <ChartBar 
            key={newdatapoints.label}
            label={newdatapoints.label}
            value={newdatapoints.value}
            maxValue={maxValue}    
        />))}
    </div>
  )
}
