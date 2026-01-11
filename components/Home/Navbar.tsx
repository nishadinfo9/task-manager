import React from "react";
import Logo from "../Logo/Logo";
import { Button } from "../ui/button";
import { ArrowUpRight } from "lucide-react";

const navItems = [
  {
    name: "Solution",
    path: "#solution",
  },
  {
    name: "Features",
    path: "#features",
  },
  {
    name: "Use Case",
    path: "#usecase",
  },
  {
    name: "Pricing",
    path: "#pricing",
  },
  {
    name: "Resources",
    path: "#resources",
  },
];

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between my-2 p-2 rounded-full bg-black/10">
      <Logo />
      <div className="flex items-center justify-center gap-8">
        {navItems.map((item, i) => (
          <a key={i} href={item.path}>
            {item.name}
          </a>
        ))}
      </div>
      <Button className="rounded-full">
        Start Today
        <ArrowUpRight />
      </Button>
    </nav>
  );
};

export default Navbar;
