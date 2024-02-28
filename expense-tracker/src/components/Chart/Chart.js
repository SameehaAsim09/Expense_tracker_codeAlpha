import React from "react";
import ChartBar from "./ChartBar";
import './Chart.css'

const Chart = (props) => {
  if(!props.newdatapoints || props.newdatapoints.length === 0) {
    return <div>No data available</div>
  }
  const maxDataPoints = props.newdatapoints.map(
    (dataPoints) => dataPoints.value
  );
  const maxValue = Math.max(...maxDataPoints);
  return (
    <div className="chart">
      {props.newdatapoints.map((Points) => (
        <ChartBar
          key={Points.label}
          label={Points.label}
          value={Points.value}
          maxValue={maxValue}
        />
      ))}
    </div>
  );
};

export default Chart;