"use client";

import * as React from "react";
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavProjects } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

// This is sample data.
const data = {
  user: {
    name: "Lom",
    email: "lom@magicboxsolution.com",
    avatar: "/images/lom.jpg",
  },
  teams: [
    {
      name: "Magic Box Solutions",
      logo: "/images/mbs-logo.png",
      plan: "Enterprise",
    },
    {
      name: "Magic Box Digital",
      logo: "/images/mbd-logo.png",
      plan: "Startup",
    },
    {
      name: "Lombomb Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Dashboard",
      url: "/",
      icon: SquareTerminal,
      isActive: true,
    },
    {
      title: "Company MGMT",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Company",
          url: "/company",
        },
        {
          title: "Branch",
          url: "/branch",
        },
        {
          title: "Products",
          url: "/products",
        },
        {
          title: "Product Details Example",
          url: "/product-details-example",
        },
      ],
    },
    {
      title: "Workflow",
      url: "#",
      icon: Bot,
      isActive: true,
      items: [
        {
          title: "Tasks",
          url: "/tasks",
        },
        {
          title: "Technicians",
          url: "/technicians",
        },
        {
          title: "Roles",
          url: "/roles",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      isActive: false,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
  ],
  // projects: [
  //   {
  //     name: "Design Engineering",
  //     url: "#",
  //     icon: Frame,
  //   },
  //   {
  //     name: "Sales & Marketing",
  //     url: "#",
  //     icon: PieChart,
  //   },
  //   {
  //     name: "Travel",
  //     url: "#",
  //     icon: Map,
  //   },
  // ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader className="shadow">
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
