import React from "react";
import Chartbar from "./Chartbar";
import "./Chart.css";
const Chart = (props) => {
  const datapointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const maxValue = Math.max(...datapointValues);

  return (
    <div className='chart'>
      {props.dataPoints.map((dataPoint) => {
        return (
          <Chartbar
            key={dataPoint.label}
            value={dataPoint.value}
            max={maxValue}
            label={dataPoint.label}
          />
        );
      })}
    </div>
  );
};

export default Chart;
