import React from "react";
import { StatCards } from "../components/Dashboard/StatCards";
import { ActivityGraph } from "../components/Dashboard//ActivityGraph";
import { UsageRadar } from "../components/Dashboard//UsageRadar";
import { RecentTransactions } from "../components/Dashboard//RecentTransactions";

export default function Home() {
  return (
    <div className="px-4 pt-4 grid gap-3 grid-cols-12">
      <StatCards />
      <ActivityGraph />
      <UsageRadar />
      <RecentTransactions />
    </div>
  );
}
