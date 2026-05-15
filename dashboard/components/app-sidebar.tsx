"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  useSidebar,
} from "@/components/ui/sidebar";

import {
  IconHome,
  IconUser,
  IconSettings,
  IconNews,
  IconX,
} from "@tabler/icons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";
const links = [
  { label: "Home", href: "/", icon: IconHome },
  { label: "Friends", href: "/dashboard/users", icon: IconUser },
  { label: "Posts", href: "/posts", icon: IconNews },
  { label: "Settings", href: "/settings", icon: IconSettings },
];

export function AppSidebar() {
  const { open } = useSidebar();
  const pathname = usePathname();
  return (
    <Sidebar collapsible="icon">
      {/* Header */}
      <SidebarHeader className="flex items-center gap-2 px-2 py-2">
        {/* Logo */}
        <div className="h-8 w-8 rounded-lg bg-black dark:bg-white shrink-0" />

        {/* Text (desktop + expanded only) */}
        <span
          className="overflow-hidden whitespace-nowrap transition-all duration-200 hidden md:inline"
          style={{
            width: open ? "auto" : 0,
            opacity: open ? 1 : 0,
          }}
        >
          Social Dashboard
        </span>
      </SidebarHeader>

      {/* Content */}
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>

          <SidebarMenu>
            {links.map((link) => (
              <SidebarMenuItem key={link.href}>
                <SidebarMenuButton asChild>
                  <Link
                    href={link.href}
                    data-active={pathname === link.href}
                    className="flex items-center gap-2"
                  >
                    <link.icon className="h-5 w-5 shrink-0" />
                    <span>{link.label}</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      {/* Footer */}
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <a
                href="/logout"
                className="flex items-center gap-2 text-red-500 hover:text-red-600"
              >
                <IconSettings className="h-5 w-5" />
                <span>Logout</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
