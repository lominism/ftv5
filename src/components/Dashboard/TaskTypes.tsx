"use client";

import React from "react";
import { FaPeopleCarryBox } from "react-icons/fa6";
import {
  Radar,
  RadarChart,
  PolarGrid,
  Legend,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip,
  TooltipProps,
} from "recharts";

const data = [
  {
    feature: "Installation",
    number: 140,
    max: 150,
  },
  {
    feature: "Repair",
    number: 130,
    max: 150,
  },
  {
    feature: "New Parts",
    number: 85,
    max: 150,
  },
  {
    feature: "Replacement",
    number: 125,
    max: 150,
  },
  {
    feature: "Return",
    number: 70,
    max: 150,
  },
];

const CustomTooltip = ({ active, payload }: TooltipProps<any, any>) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-2 rounded shadow text-xs text-stone-500">
        <p className="font-semibold text-black">{payload[0].payload.feature}</p>{" "}
        {/* Feature label */}
        <p>{payload[0].value}</p> {/* Number */}
      </div>
    );
  }
  return null;
};

export const TaskTypes = () => {
  return (
    <div className="col-span-4 overflow-hidden rounded border border-stone-300">
      <div className="p-4">
        <h3 className="flex items-center gap-1.5 font-medium">
          <FaPeopleCarryBox /> Task Types
        </h3>
      </div>

      <div className="h-64 px-4">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
            <PolarGrid />
            <PolarAngleAxis className="text-xs font-bold" dataKey="feature" />
            <PolarRadiusAxis angle={30} domain={[0, 150]} tick={false} />
            <Radar
              name="Task Types"
              dataKey="number"
              stroke="#E53935"
              fill="#E53935"
              fillOpacity={0.2}
            />
            <Tooltip content={<CustomTooltip />} /> {/* Use custom tooltip */}
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
