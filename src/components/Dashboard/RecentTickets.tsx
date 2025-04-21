import React from "react";
import { FiArrowUpRight, FiMoreHorizontal } from "react-icons/fi";
import { IoTicketSharp } from "react-icons/io5";

export const RecentTickets = () => {
  return (
    <div className="col-span-12 p-4 rounded border border-stone-300">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="flex items-center gap-1.5 font-medium">
          <IoTicketSharp /> Recent Tickets
        </h3>
        <button className="text-sm text-red-500 hover:underline">
          See all
        </button>
      </div>
      <table className="w-full table-auto">
        <TableHead />
        <tbody>
          <TableRow
            tickId="#48149"
            description="Repair broken kitchen exhaust fan"
            date="Aug 2nd"
            status="Repair"
            order={1}
          />
          <TableRow
            tickId="#1942s"
            description="Install new ceiling light fixture"
            date="Aug 2nd"
            status="Install"
            order={2}
          />
          <TableRow
            tickId="#4192"
            description="Replace worn-out bathroom tiles"
            date="Aug 1st"
            status="Replace"
            order={3}
          />
          <TableRow
            tickId="#99481"
            description="Return incorrect TV stand parts"
            date="Aug 1st"
            status="Return"
            order={4}
          />
          <TableRow
            tickId="#1304"
            description="Repair malfunctioning door lock"
            date="Aug 1st"
            status="Repair"
            order={5}
          />
          <TableRow
            tickId="#1304"
            description="Install new washer and dryer"
            date="Jul 31st"
            status="Install"
            order={6}
          />
          <TableRow
            tickId="#58421"
            description="Replace broken living room light"
            date="Jul 30th"
            status="Replace"
            order={7}
          />
          <TableRow
            tickId="#93211"
            description="Install ceiling fan in bedroom"
            date="Jul 30th"
            status="Install"
            order={8}
          />
          <TableRow
            tickId="#84722"
            description="Repair washing machine drain pump"
            date="Jul 29th"
            status="Repair"
            order={9}
          />
          <TableRow
            tickId="#74108"
            description="Return scratched oven door glass"
            date="Jul 29th"
            status="Return"
            order={10}
          />
          <TableRow
            tickId="#65219"
            description="Install security system control panel"
            date="Jul 28th"
            status="Install"
            order={11}
          />
          <TableRow
            tickId="#78355"
            description="Repair water heater thermostat issue"
            date="Jul 28th"
            status="Repair"
            order={12}
          />
          <TableRow
            tickId="#39215"
            description="Replace cracked bathroom mirror"
            date="Jul 27th"
            status="Replace"
            order={13}
          />
          <TableRow
            tickId="#92834"
            description="Return unused doorbell camera"
            date="Jul 27th"
            status="Return"
            order={14}
          />
          <TableRow
            tickId="#38501"
            description="Repair broken sliding door track"
            date="Jul 26th"
            status="Repair"
            order={15}
          />
          <TableRow
            tickId="#10284"
            description="Install kitchen cabinet handles"
            date="Jul 26th"
            status="Install"
            order={16}
          />
          <TableRow
            tickId="#81237"
            description="Replace damaged bedroom drawer slides"
            date="Jul 25th"
            status="Replace"
            order={17}
          />
          <TableRow
            tickId="#47392"
            description="Return unopened filter cartridge pack"
            date="Jul 25th"
            status="Return"
            order={18}
          />
          <TableRow
            tickId="#20384"
            description="Install wall-mounted TV bracket"
            date="Jul 24th"
            status="Install"
            order={19}
          />
          <TableRow
            tickId="#67413"
            description="Repair faulty garden sprinkler system"
            date="Jul 24th"
            status="Repair"
            order={20}
          />
          <TableRow
            tickId="#91843"
            description="Replace fridge door seal strip"
            date="Jul 23rd"
            status="Replace"
            order={21}
          />
        </tbody>
      </table>
    </div>
  );
};

const TableHead = () => {
  return (
    <thead>
      <tr className="text-sm font-normal text-stone-500">
        <th className="text-start p-1.5">Ticket ID</th>
        <th className="text-start p-1.5">Activity</th>
        <th className="text-start p-1.5">Date</th>
        <th className="text-start p-1.5">Status</th>
        <th className="w-8"></th>
      </tr>
    </thead>
  );
};

const TableRow = ({
  tickId,
  description,
  date,
  status,
  order,
}: {
  tickId: string;
  description: string;
  date: string;
  status: string;
  order: number;
}) => {
  // Define a mapping of status to color classes
  const statusColors: { [key: string]: string } = {
    Repair: "bg-blue-100 text-blue-600",
    Replace: "bg-yellow-100 text-yellow-600",
    Install: "bg-green-100 text-green-600",
    Return: "bg-red-100 text-red-600",
  };

  return (
    <tr className={order % 2 ? "bg-stone-100 text-sm" : "text-sm"}>
      <td className="p-1.5">
        <a href="#" className="text-red-600 underline flex items-center gap-1">
          {tickId} <FiArrowUpRight />
        </a>
      </td>
      <td className="p-1.5">{description}</td>
      <td className="p-1.5">{date}</td>
      <td className="p-1.5">
        {/* Render the status as a button with dynamic colors */}
        <span
          className={`px-2 py-1 rounded text-xs font-medium ${
            statusColors[status] || "bg-gray-100 text-gray-600"
          }`}
        >
          {status}
        </span>
      </td>
      <td className="w-8">
        <button className="hover:bg-stone-200 transition-colors grid place-content-center rounded text-sm size-8">
          <FiMoreHorizontal />
        </button>
      </td>
    </tr>
  );
};
