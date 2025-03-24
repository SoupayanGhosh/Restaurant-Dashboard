"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

const data = [
  {
    name: "1",
    total: 1420,
  },
  {
    name: "2",
    total: 1620,
  },
  {
    name: "3",
    total: 1820,
  },
  {
    name: "4",
    total: 1270,
  },
  {
    name: "5",
    total: 1390,
  },
  {
    name: "6",
    total: 1590,
  },
  {
    name: "7",
    total: 1890,
  },
  {
    name: "8",
    total: 2090,
  },
  {
    name: "9",
    total: 1890,
  },
  {
    name: "10",
    total: 1790,
  },
  {
    name: "11",
    total: 1690,
  },
  {
    name: "12",
    total: 1890,
  },
  {
    name: "13",
    total: 2190,
  },
  {
    name: "14",
    total: 2390,
  },
  {
    name: "15",
    total: 2190,
  },
  {
    name: "16",
    total: 1990,
  },
  {
    name: "17",
    total: 1790,
  },
  {
    name: "18",
    total: 1690,
  },
  {
    name: "19",
    total: 1890,
  },
  {
    name: "20",
    total: 2090,
  },
  {
    name: "21",
    total: 2290,
  },
  {
    name: "22",
    total: 2090,
  },
  {
    name: "23",
    total: 1890,
  },
  {
    name: "24",
    total: 1690,
  },
  {
    name: "25",
    total: 1590,
  },
  {
    name: "26",
    total: 1790,
  },
  {
    name: "27",
    total: 1990,
  },
  {
    name: "28",
    total: 2190,
  },
  {
    name: "29",
    total: 1990,
  },
  {
    name: "30",
    total: 1790,
  },
]

export function Overview() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `$${value}`}
        />
        <Bar dataKey="total" fill="#adfa1d" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}

