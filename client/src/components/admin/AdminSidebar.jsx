import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  FileText,
  Calendar,
  ChevronDown,
  Menu,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const menuItems = [
  {
    icon: LayoutDashboard,
    label: "Dashboard",
    path: "/admin/dashboard",
  },
  {
    icon: FileText,
    label: "Blogs",
    path: "/admin/blogs",
  },
  {
    icon: Calendar,
    label: "Events",
    path: "/admin/events",
  },
];

const SidebarContent = ({ className }) => {
  const location = useLocation();

  return (
    <div className={cn("pb-12", className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <div className="space-y-1">
            {menuItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  cn(
                    "flex items-center gap-x-2 text-sm font-medium px-3 py-2 rounded-lg transition-colors",
                    isActive
                      ? "bg-[#009a8d] text-white"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                  )
                }>
                <item.icon className="h-5 w-5" />
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const AdminSidebar = () => {
  return (
    <>
      {/* Mobile Sidebar */}
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            className="lg:hidden fixed left-4 top-3 z-40"
            size="icon">
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-72 p-0">
          <SidebarContent className="w-full" />
        </SheetContent>
      </Sheet>

      {/* Desktop Sidebar */}
      <div className="hidden lg:block fixed inset-y-0 z-50 w-72 border-r bg-white">
        <SidebarContent />
      </div>
    </>
  );
};

export default AdminSidebar;
