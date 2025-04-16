"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React, { useState } from "react";
import branchesData from "@/data/branches.json"; // Import the JSON file

export default function Branches() {
  const [branches, setBranches] = useState(branchesData);
  const [sortConfig, setSortConfig] = useState<{
    key: string;
    direction: "asc" | "desc";
  } | null>(null);

  const handleSort = (key: keyof (typeof branches)[0]) => {
    let direction: "asc" | "desc" = "asc";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "asc"
    ) {
      direction = "desc";
    }

    const sortedBranches = [...branches].sort((a, b) => {
      if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
      if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
      return 0;
    });

    setBranches(sortedBranches);
    setSortConfig({ key, direction });
  };

  return (
    <main className="m-4">
      <Table>
        <TableCaption>A list of your branches.</TableCaption>
        <TableHeader>
          <TableRow className="bg-white dark:bg-gray-800 z-10">
            <TableHead
              className="w-[100px] cursor-pointer"
              onClick={() => handleSort("id")}
            >
              ID{" "}
              {sortConfig?.key === "id" &&
                (sortConfig.direction === "asc" ? "↑" : "↓")}
            </TableHead>
            <TableHead
              className="cursor-pointer"
              onClick={() => handleSort("name")}
            >
              Name{" "}
              {sortConfig?.key === "name" &&
                (sortConfig.direction === "asc" ? "↑" : "↓")}
            </TableHead>
            <TableHead
              className="cursor-pointer"
              onClick={() => handleSort("address")}
            >
              Address{" "}
              {sortConfig?.key === "address" &&
                (sortConfig.direction === "asc" ? "↑" : "↓")}
            </TableHead>
            <TableHead
              className="cursor-pointer"
              onClick={() => handleSort("city")}
            >
              City{" "}
              {sortConfig?.key === "city" &&
                (sortConfig.direction === "asc" ? "↑" : "↓")}
            </TableHead>
            <TableHead
              className="text-left cursor-pointer"
              onClick={() => handleSort("items")}
            >
              # of Items{" "}
              {sortConfig?.key === "items" &&
                (sortConfig.direction === "asc" ? "↑" : "↓")}
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {branches.map((branch) => (
            <TableRow key={branch.id}>
              <TableCell className="font-medium">{branch.id}</TableCell>
              <TableCell>{branch.name}</TableCell>
              <TableCell>{branch.address}</TableCell>
              <TableCell>{branch.city}</TableCell>
              <TableCell className="text-left">{branch.items}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </main>
  );
}
