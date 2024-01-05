import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import React from "react";

const data = [
  { name: "January", Total: 1200 },
  { name: "February", Total: 2100 },
  { name: "March", Total: 800 },
  { name: "April", Total: 1600 },
  { name: "May", Total: 900 },
  { name: "June", Total: 1700 },
  { name: "July", Total: 1500 },
  { name: "August", Total: 1000 },
  { name: "September", Total: 1400 },
  { name: "October", Total: 1600 },
  { name: "November", Total: 2000 },
  { name: "December", Total: 1800 }
];

const AreaChart1 = () => {
  return (
    <div className="chart">
      <div className="title">Revenue</div>
      <ResponsiveContainer width="100%" aspect={2/1}>
        <AreaChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="courseVisit" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="courseSale" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" stroke="gray" />
          <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Course Visit"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#courseVisit)"
          />
          <Area
            type="monotone"
            dataKey="Course Sale"
            stroke="#82ca9d"
            fillOpacity={1}
            fill="url(#courseSale)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AreaChart1;