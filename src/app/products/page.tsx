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
import productsData from "@/data/products.json";

export default function Items() {
  const [products, setProducts] = useState(productsData);
  const [sortConfig, setSortConfig] = useState<{
    key: string;
    direction: "asc" | "desc";
  } | null>(null);

  const handleSort = (key: keyof (typeof products)[0]) => {
    let direction: "asc" | "desc" = "asc";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "asc"
    ) {
      direction = "desc";
    }

    const sortedProducts = [...products].sort((a, b) => {
      if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
      if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
      return 0;
    });

    setProducts(sortedProducts);
    setSortConfig({ key, direction });
  };

  return (
    <div>
      <Table>
        <TableCaption>A list of your items.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Image</TableHead>
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
              onClick={() => handleSort("description")}
            >
              Description{" "}
              {sortConfig?.key === "description" &&
                (sortConfig.direction === "asc" ? "↑" : "↓")}
            </TableHead>
            <TableHead
              className="text-left cursor-pointer"
              onClick={() => handleSort("inventory")}
            >
              Inventory #{" "}
              {sortConfig?.key === "inventory" &&
                (sortConfig.direction === "asc" ? "↑" : "↓")}
            </TableHead>
            <TableHead
              className="cursor-pointer"
              onClick={() => handleSort("branch")}
            >
              Branch Location{" "}
              {sortConfig?.key === "branch" &&
                (sortConfig.direction === "asc" ? "↑" : "↓")}
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.id} className="h-[80px]">
              <TableCell>
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-16 w-16 object-cover rounded"
                />
              </TableCell>
              <TableCell className="font-medium">{product.id}</TableCell>
              <TableCell>{product.name}</TableCell>
              <TableCell>{product.description}</TableCell>
              <TableCell className="text-left">{product.inventory}</TableCell>
              <TableCell>{product.branch}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
