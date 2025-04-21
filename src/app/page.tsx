"use client";

import React from "react";
import { ActivityGraph } from "../components/Dashboard//ActivityGraph";
import { UsageRadar } from "../components/Dashboard//UsageRadar";
import { RecentTransactions } from "../components/Dashboard//RecentTransactions";
import { StatCards2 } from "@/components/Dashboard/StatCards2";

export default function Home() {
  return (
    <div className="px-4 pt-4 grid gap-3 grid-cols-12">
      <StatCards2 />
      <ActivityGraph />
      <UsageRadar />
      <RecentTransactions />
    </div>
  );
}
