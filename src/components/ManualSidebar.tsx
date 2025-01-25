import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Book, Home, Search, Settings, Smartphone, Dice } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRollDiceModal } from "@/components/DiceRoller";

const items = [
  { title: "Overview", url: "#overview", icon: Home },
  { title: "Getting Started", url: "#getting-started", icon: Book },
  { title: "Features", url: "#features", icon: Smartphone },
  { title: "Troubleshooting", url: "#troubleshooting", icon: Settings },
];

export function ManualSidebar() {
  const { openModal } = useRollDiceModal();

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Product Manual</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
              <SidebarMenuItem>
                <SidebarMenuButton onClick={openModal}>
                  <Dice className="h-4 w-4" />
                  <span>Roll Dice</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}