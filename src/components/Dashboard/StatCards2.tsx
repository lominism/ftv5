import React, { useState } from "react";
import { FaTasks } from "react-icons/fa";
import { FaFileCircleXmark } from "react-icons/fa6";
import { SiGoogletasks } from "react-icons/si";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export const StatCards2 = () => {
  return (
    <>
      <Card
        icon={<SiGoogletasks />}
        title="Total Tasks"
        value30={37}
        value60={50}
        value90={83}
        period="Previous 30 Days"
        color="text-black-500"
      />
      <Card
        icon={<FaFileCircleXmark />}
        title="Unfinished Tasks"
        value30={5}
        value60={10}
        value90={11}
        period="Previous 30 Days"
        color="text-red-500"
      />
      <Card
        icon={<FaTasks />}
        title="Completed Tasks"
        value30={30}
        value60={47}
        value90={52}
        period="Previous 30 Days"
        color="text-green-500"
      />
      <Card
        icon={<FaTasks />}
        title="Rejected Tasks"
        value30={3}
        value60={7}
        value90={10}
        period="Previous 30 Days"
        color="text-red-500"
      />
    </>
  );
};

const Card = ({
  icon,
  title,
  value30,
  value60,
  value90,
  period,
  color,
}: {
  icon: React.ReactNode;
  title: string;
  value30: number;
  value60: number;
  value90: number;
  period: string;
  color: string;
}) => {
  const [selectedValue, setSelectedValue] = useState(value30); // Default to value30
  const [selectedPeriod, setSelectedPeriod] = useState(period); // Default to the initial period

  const handleSelectChange = (selectedPeriod: string) => {
    setSelectedPeriod(selectedPeriod); // Update the selected period
    if (selectedPeriod === "Previous 30 Days") {
      setSelectedValue(value30);
    } else if (selectedPeriod === "Previous 60 Days") {
      setSelectedValue(value60);
    } else if (selectedPeriod === "Previous 90 Days") {
      setSelectedValue(value90);
    }
  };

  return (
    <div className="col-span-3 h-48 p-4 rounded border border-stone-300 flex flex-col items-center justify-between text-center">
      <h3 className="flex items-center gap-2 text-stone-500 mb-2 text-sm">
        <span className={color}>{icon}</span> {/* Apply color to the icon */}
        {title}
      </h3>
      <div className="flex items-center justify-center">
        <p className="text-4xl font-semibold">{selectedValue}</p>{" "}
        {/* Dynamic value */}
      </div>
      <div className="text-xs text-stone-500">
        <Select onValueChange={handleSelectChange}>
          <SelectTrigger className="border-none shadow-none focus-visible:border-none focus-visible:ring-0 text-xs">
            <SelectValue placeholder={selectedPeriod} /> {/* Dynamic period */}
          </SelectTrigger>
          <SelectContent className="text-xs">
            <SelectGroup>
              <SelectItem value="Previous 30 Days">Previous 30 Days</SelectItem>
              <SelectItem value="Previous 60 Days">Previous 60 Days</SelectItem>
              <SelectItem value="Previous 90 Days">Previous 90 Days</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};
