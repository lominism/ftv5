import { EmployeeCard } from "@/components/employee-card";

const roles = [
  {
    name: "Lom Seunbane",
    title: "Chief Strategy Officer",
    image: "/images/lom.jpg",
  },
  {
    name: "Rick Sanchez",
    title: "Chief Technology Officer",
    image: "/images/rick.webp",
  },
  {
    name: "Mortimer 'Morty' Smith",
    title: "Junior Reality Bender",
    image: "/images/morty.png",
  },
  {
    name: "Summer Smith",
    title: "Vibe Optimization Specialist",
    image: "/images/summer.png",
  },
  {
    name: "Beth Smith",
    title: "Horse Surgeon-in-Chief",
    image: "/images/beth.avif",
  },
  {
    name: "Jerry Smith",
    title: "Executive of Unnecessary Input",
    image: "/images/jerry.avif",
  },
  {
    name: "Squanchy",
    title: "Senior Party Architect",
    image: "/images/squanchy.webp",
  },
  {
    name: "Evil Morty",
    title: "Shadow Board Advisor",
    image: "/images/evil-morty.avif",
  },
];

export default function Roles() {
  return (
    <div className="m-4 grid grid-cols-[repeat(auto-fill,250px)] justify-center gap-4">
      {roles.map((role, index) => (
        <EmployeeCard
          key={index} // Use a unique key for each item
          name={role.name}
          title={role.title}
          image={role.image}
        />
      ))}
    </div>
  );
}
