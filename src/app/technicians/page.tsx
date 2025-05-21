"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";

// Assign a color to each technician (Tailwind colors)
const techColors: Record<number, string> = {
  1: "bg-blue-500",
  2: "bg-green-500",
  3: "bg-pink-500",
};

const technicians = [
  { id: 1, name: "Alice Johnson" },
  { id: 2, name: "Bob Smith" },
  { id: 3, name: "Charlie Lee" },
];

const mockSchedules: Record<
  number,
  { day: string; start: number; end: number }[]
> = {
  1: [
    { day: "Monday", start: 8, end: 16 },
    { day: "Tuesday", start: 10, end: 18 },
    { day: "Wednesday", start: 8, end: 16 },
    { day: "Thursday", start: 0, end: 0 },
    { day: "Friday", start: 8, end: 16 },
    { day: "Saturday", start: 9, end: 15 },
    { day: "Sunday", start: 0, end: 0 },
  ],
  2: [
    { day: "Monday", start: 0, end: 0 },
    { day: "Tuesday", start: 8, end: 16 },
    { day: "Wednesday", start: 8, end: 16 },
    { day: "Thursday", start: 10, end: 18 },
    { day: "Friday", start: 8, end: 16 },
    { day: "Saturday", start: 12, end: 19 },
    { day: "Sunday", start: 8, end: 12 },
  ],
  3: [
    { day: "Monday", start: 8, end: 16 },
    { day: "Tuesday", start: 0, end: 0 },
    { day: "Wednesday", start: 10, end: 18 },
    { day: "Thursday", start: 8, end: 16 },
    { day: "Friday", start: 8, end: 16 },
    { day: "Saturday", start: 8, end: 13 },
    { day: "Sunday", start: 14, end: 19 },
  ],
};

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
const hours = Array.from({ length: 12 }, (_, i) => i + 8);

export default function Technicians() {
  const [selected, setSelected] = useState<number[]>([technicians[0].id]);

  const toggleTechnician = (id: number) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((tid) => tid !== id) : [...prev, id]
    );
  };

  // Get all selected techs scheduled at a given day/hour
  const scheduledTechs = (day: string, hour: number) =>
    selected.filter((tid) => {
      const shifts = mockSchedules[tid];
      const shift = shifts.find((s) => s.day === day);
      return shift && hour >= shift.start && hour < shift.end;
    });

  return (
    <div className="flex gap-6 p-6">
      {/* Calendar */}
      <Card className="flex-1 p-4 overflow-auto">
        <h2 className="text-xl font-semibold mb-4">Weekly Schedule</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse">
            <thead>
              <tr>
                <th className="w-16 text-right pr-2"></th>
                {days.map((day) => (
                  <th key={day} className="px-2 py-1 text-center font-medium">
                    {day}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {hours.map((hour) => (
                <tr key={hour}>
                  <td className="text-right pr-2 align-top text-xs text-muted-foreground">
                    {hour < 12
                      ? `${hour}am`
                      : hour === 12
                      ? "12pm"
                      : `${hour - 12}pm`}
                  </td>
                  {days.map((day) => {
                    const techs = scheduledTechs(day, hour);
                    return (
                      <td
                        key={day}
                        className="h-10 w-32 border border-muted-foreground/10 relative"
                      >
                        {techs.length > 0 && (
                          <div className="flex h-full w-full absolute inset-0">
                            {techs.map((tid) => (
                              <div
                                key={tid}
                                className={`${techColors[tid]} flex-1 h-full rounded-sm mx-[1px]`}
                                title={
                                  technicians.find((t) => t.id === tid)?.name
                                }
                              />
                            ))}
                          </div>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
      {/* Technician List */}
      <Card className="w-64 p-6 flex-shrink-0">
        <h3 className="text-lg font-semibold mb-4">Technicians</h3>
        <ul className="space-y-4">
          {technicians.map((tech) => (
            <li key={tech.id} className="flex items-center gap-3">
              <span
                className={`inline-block w-3 h-3 rounded-full ${
                  techColors[tech.id]
                }`}
                aria-label="color"
              />
              <Checkbox
                checked={selected.includes(tech.id)}
                onCheckedChange={() => toggleTechnician(tech.id)}
                id={`tech-${tech.id}`}
              />
              <label htmlFor={`tech-${tech.id}`} className="cursor-pointer">
                {tech.name}
              </label>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
}
