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
import companiesData from "@/data/companies.json";

export default function Branches() {
  const [companies, setCompanies] = useState(companiesData);
  const [sortConfig, setSortConfig] = useState<{
    key: string;
    direction: "asc" | "desc";
  } | null>(null);

  const handleSort = (key: keyof (typeof companies)[0]) => {
    let direction: "asc" | "desc" = "asc";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "asc"
    ) {
      direction = "desc";
    }

    const sortedCompanies = [...companies].sort((a, b) => {
      if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
      if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
      return 0;
    });

    setCompanies(sortedCompanies);
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
              className="text-left cursor-pointer"
              onClick={() => handleSort("branches")}
            >
              # of Branches{" "}
              {sortConfig?.key === "branches" &&
                (sortConfig.direction === "asc" ? "↑" : "↓")}
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {companies.map((company) => (
            <TableRow key={company.id}>
              <TableCell className="font-medium">{company.id}</TableCell>
              <TableCell>{company.name}</TableCell>
              <TableCell>{company.address}</TableCell>
              <TableCell className="text-left">{company.branches}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </main>
  );
}
