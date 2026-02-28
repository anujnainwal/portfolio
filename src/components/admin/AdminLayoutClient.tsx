"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  FolderKanban,
  MessageSquareQuote,
  ArrowLeft,
} from "lucide-react";
import { logout } from "@/actions/auth";

interface AdminLayoutClientProps {
  children: React.ReactNode;
}

export default function AdminLayoutClient({
  children,
}: AdminLayoutClientProps) {
  const pathname = usePathname();

  const navigation = [
    { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
    { name: "Projects", href: "/admin/projects", icon: FolderKanban },
    { name: "Reviews", href: "/admin/reviews", icon: MessageSquareQuote },
  ];

  if (pathname === "/admin/login") {
    return <div className="min-h-screen bg-gray-50">{children}</div>;
  }

  const handleLogout = async () => {
    await logout();
    window.location.href = "/";
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 flex-col hidden md:flex fixed h-full z-10">
        <div className="h-20 flex items-center px-6">
          <Link
            href="/admin"
            className="font-extrabold text-[#1a1f36] text-xl tracking-tight"
          >
            Admin Panel
          </Link>
        </div>

        <nav className="flex-1 px-4 py-4 space-y-2">
          {navigation.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/admin" && pathname.startsWith(`${item.href}`));
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all font-medium text-[15px] ${
                  isActive
                    ? "bg-[#161c2d] text-white shadow-md shadow-gray-200/50"
                    : "text-gray-600 hover:bg-gray-100/80 hover:text-gray-900"
                }`}
              >
                <item.icon
                  className="w-[18px] h-[18px]"
                  strokeWidth={isActive ? 2.5 : 2}
                />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-gray-100 flex flex-col gap-2">
          <Link
            href="/"
            className="flex items-center gap-3 w-full px-4 py-2.5 rounded-lg text-gray-500 hover:bg-gray-50 hover:text-gray-900 transition-colors text-sm font-medium"
          >
            <ArrowLeft className="w-[18px] h-[18px]" />
            Back to Site
          </Link>
          <div className="flex items-center gap-3 px-2 py-2 mt-2">
            <div className="w-8 h-8 rounded-full bg-[#1a1f36] flex items-center justify-center text-white text-xs font-medium shrink-0">
              N
            </div>
            <button
              onClick={handleLogout}
              className="text-red-500 hover:text-red-600 text-sm font-medium text-left transition-colors"
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 md:ml-64 flex flex-col min-h-screen">
        <main className="flex-1 p-6 md:p-8 pt-20 md:pt-10 bg-gray-50">
          {children}
        </main>
      </div>

      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 w-full h-16 bg-white border-b border-gray-200 flex items-center px-4 z-20 justify-between">
        <span className="font-bold text-lg">Admin Pannel</span>
        <button
          onClick={handleLogout}
          className="text-sm text-red-600 font-medium px-3 py-1 bg-red-50 rounded-md"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
