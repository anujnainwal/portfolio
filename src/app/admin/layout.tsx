import React from "react";
import { redirect } from "next/navigation";
import { verifySession } from "@/lib/session";
import AdminLayoutClient from "@/components/admin/AdminLayoutClient";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await verifySession();

  // If session doesn't exist or is invalid in DB (Phase 4)
  if (!session) {
    redirect("/admin/login");
  }

  return <AdminLayoutClient>{children}</AdminLayoutClient>;
}
