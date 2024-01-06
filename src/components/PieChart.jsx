import React from "react";
import { Chart } from "react-google-charts";

const PieChart = () => {
    const data = [
        ['Income', 'Amount'],
        ['Total Income',     11],
        ['Profit',      4],
        ['Loss',  2],
      ];

        return (
          <Chart
            chartType="PieChart"
            data={data}
            width="400"
            height="400"
            options={{
                title: 'Next Month Income Prediction',
                colors: ['grey', 'cyan', 'lightgrey'],
                is3D: true,
              }}
          />
        )
};

export default PieChart;
