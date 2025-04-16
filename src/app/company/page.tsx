import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React from "react";

const companies = [
  {
    id: 100001,
    name: "Microsoft",
    address: "1 Microsoft Way, Redmond, WA",
    branches: 12,
  },
  {
    id: 100002,
    name: "Apple Inc.",
    address: "1 Apple Park Way, Cupertino, CA",
    branches: 9,
  },
  {
    id: 100003,
    name: "Google",
    address: "1600 Amphitheatre Parkway, Mountain View, CA",
    branches: 7,
  },
  {
    id: 100004,
    name: "Meta Platforms",
    address: "1 Hacker Way, Menlo Park, CA",
    branches: 5,
  },
  {
    id: 100005,
    name: "Wontech",
    address: "139 Pan Road, Bangkok",
    branches: 4,
  },
  {
    id: 100006,
    name: "ByteForge",
    address: "16 Wireless Road, Bangkok",
    branches: 6,
  },
  {
    id: 100007,
    name: "Zenbyte",
    address: "311 Ladprao Road, Bangkok",
    branches: 3,
  },
  {
    id: 100008,
    name: "DataHive",
    address: "54 Phahonyothin Road, Bangkok",
    branches: 2,
  },
  {
    id: 100009,
    name: "CloudSync",
    address: "65 Rama 9 Road, Bangkok",
    branches: 8,
  },
  {
    id: 100010,
    name: "TekNova",
    address: "29 Ekkamai Road, Bangkok",
    branches: 1,
  },
];

export default function Branches() {
  return (
    <main className="m-4">
      <Table>
        <TableCaption>A list of your branches.</TableCaption>
        <TableHeader>
          <TableRow className="bg-white dark:bg-gray-800 z-10">
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Address</TableHead>
            <TableHead className="text-left"># of Branches</TableHead>
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
