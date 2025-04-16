import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const products = [
  {
    id: "NKBSMUS9W",
    name: "Macbook Pro 2024",
    description: "Macbook Laptop featuring M3 chips - black color",
    inventory: 4,
    branch: "Orbital Labs",
    image: "/images/macbook.webp",
  },
  {
    id: "XPS13PLAT",
    name: "Dell XPS 13",
    description: "Dell XPS 13 Laptop with Intel i7 processor",
    inventory: 10,
    branch: "Orbital Labs",
    image: "/images/xps13.webp",
  },
  {
    id: "IPADPRO11",
    name: "iPad Pro 11",
    description: "Apple iPad Pro 11-inch with M2 chip",
    inventory: 7,
    branch: "CloudSync",
    image: "/images/ipad11.jpg",
  },
];

export default function Items() {
  return (
    <div>
      <Table>
        <TableCaption>A list of your items.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Image</TableHead>
            <TableHead className="w-[100px]">ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Description</TableHead>
            <TableHead className="text-left">Inventory #</TableHead>
            <TableHead>Branch Location</TableHead>
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
