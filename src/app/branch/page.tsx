import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import branches from "@/data/branches.json"; // Import the JSON file

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
            <TableHead>City</TableHead>
            <TableHead className="text-left"># of Items</TableHead>
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
