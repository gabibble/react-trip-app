import React from "react";
import { LineChart, Line, ComposedChart, XAxis, YAxis, Bar, Area, CartesianGrid, Legend, Tooltip, ResponsiveContainer, Label } from 'recharts';


let months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ]
interface Props {
    temps: any,
    prcps: any
}

export const WeatherChart = (props: Props) => {

    let temps = props.temps
    let prcps = props.prcps

    const data = [
      {
        month: months[0],
        temp: temps[0],
        rainfall: prcps[0],
      },
      {
        month: months[1],
        temp: temps[1],
        rainfall: prcps[1],
      },
      {
        month: months[2],
        temp: temps[2],
        rainfall: prcps[2],
      },
      {
        month: months[3],
        temp: temps[3],
        rainfall: prcps[3],
      },
      {
        month: months[4],
        temp: temps[4],
        rainfall: prcps[4],
      },
      {
        month: months[5],
        temp: temps[5],
        rainfall: prcps[5],
      },
      {
        month: months[6],
        temp: temps[6],
        rainfall: prcps[6],
      },
      {
        month: months[7],
        temp: temps[7],
        rainfall: prcps[7],
      },
      {
        month: months[8],
        temp: temps[8],
        rainfall: prcps[8],
      },
      {
        month: months[9],
        temp: temps[9],
        rainfall: prcps[9],
      },
      {
        month: months[10],
        temp: temps[10],
        rainfall: prcps[10],
      },
      {
        month: months[11],
        temp: temps[11],
        rainfall: prcps[11],
      },
    ];

  return (
    <ResponsiveContainer height={200}>
      <ComposedChart
        data={data}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
      >
        <XAxis
          dataKey="month"
          style={{
            fontSize: "9px",
          }}
        />
        <YAxis
          yAxisId="left"
          fontSize="8px"
          label={{
            value: "Rainfall in Inches",
            angle: -90,
            position: "insideBottomLeft",
            fontSize: "12px",
            offset: 30,
          }}
        />
        <YAxis
          yAxisId="right"
          orientation="right"
          fontSize="8px"
          label={{
            value: "Temperature in F",
            angle: 90,
            position: "insideBottomRight",
            fontSize: "12px",
            offset: 30,
          }}
        />
        <Tooltip />
        {/* <Legend
          style={{
            fontSize: "10px",
          }}
        /> */}
        <CartesianGrid stroke="#f5f5f5" />
        <Bar
          yAxisId="left"
          type="monotone"
          dataKey="rainfall"
          fill="rgba(4, 59, 84, 0.5)"
          barSize={30}
        />
        <Area
          yAxisId="right"
          type="monotone"
          dataKey="temp"
          stroke="#ff730080"
          fill="#eee0"
          strokeWidth={2}
        ></Area>
      </ComposedChart>
    </ResponsiveContainer>
  );
};




