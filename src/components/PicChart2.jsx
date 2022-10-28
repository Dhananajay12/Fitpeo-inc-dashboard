import React from "react";
import Chart from "react-apexcharts";

export const data = {
  series: [44, 55, 13],

  options: {
    chart: {
      width: 380,
      type: "donut",
    },
    dataLabels: {
      enabled: false,
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            show: true,
          },
        },
      },
    ],
    legend: {
      position: "bottom",
      offsetY: 1,
      height: 0,
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
          },
        },
      },
    },
  },
};

const PicChart2 = () => {
  return (
    <div>
      <Chart
        options={data.options}
        series={data.series}
        chartOptions={data.chartOptions}
        type="donut"
        width={380}
      />
    </div>
  );
};

export default PicChart2;
