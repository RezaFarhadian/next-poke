"use client"

import { useState } from "react"
import Chart from "react-apexcharts"

export default function StatsChart() {
  const [props, setProps] = useState<any>({
    options: {
      chart: {
        id: "basic-bar"
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
      }
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 45, 50, 49, 60, 70, 91]
      }
    ],
    theme: { 
      mode: 'light'
    },
  })

  return (
    <Chart
      options={props.options}
      series={props.series}
      type="bar"
      width="500"
    />
  )
}