import React from "react";
import Chart from "react-apexcharts";

export const data = {
  series: [
    {
      name: "Current",
      data: [31, 40, 28, 51, 42],
    },
    {
      name: "Previous",
      data: [11, 45, 60, 20, 34],
    },
  ],
  options: {
    chart: {
      type: "area",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    // xaxis: {
    //   type: "datetime",
    //   categories: [
    //     "2018-09-19T00:00:00.000Z",
    //     "2018-09-19T01:30:00.000Z",
    //     "2018-09-19T02:30:00.000Z",
    //     "2018-09-19T03:30:00.000Z",
    //     "2018-09-19T04:30:00.000Z",
    //     "2018-09-19T05:30:00.000Z",
    //     "2018-09-19T06:30:00.000Z",
    //   ],
    // },
    // tooltip: {
    //   x: {
    //     format: "dd/MM/yy HH:mm",
    //   },
    // },
  },
};

const LineChart = () => {
  return (
    <>
      <Chart
        options={data.options}
        series={data.series}
        type="area"
        height={200}
        style={{ overflow: "hidden", marginTop: "-1rem" }}
      />
      ;
    </>
  );
};

export default LineChart;
