"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

// Admin Dashboard is temporarily commented out / disabled so no user or developer can access it
export default function AdminOverviewPage() {
  const router = useRouter();

  useEffect(() => {
    // Automatically redirect to home if anyone attempts to access /dashboard/admin
    router.replace("/");
  }, [router]);

  return null;
}
