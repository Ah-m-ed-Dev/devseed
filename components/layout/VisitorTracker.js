"use client";

import { useEffect } from "react";
import { trackVisit } from "@/lib/supabase";

export default function VisitorTracker() {
  useEffect(() => {
    trackVisit(window.location.pathname);
  }, []);

  return null;
}