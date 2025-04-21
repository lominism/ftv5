"use client";

import React from "react";
import { ActivityGraph } from "../components/Dashboard//ActivityGraph";
import { StatCards2 } from "@/components/Dashboard/StatCards2";
import { TaskTypes } from "@/components/Dashboard/TaskTypes";
import { RecentTickets } from "@/components/Dashboard/RecentTickets";

export default function Home() {
  return (
    <div className="px-4 pt-4 grid gap-3 grid-cols-12">
      <StatCards2 />
      <ActivityGraph />
      <TaskTypes />
      <RecentTickets />
    </div>
  );
}
