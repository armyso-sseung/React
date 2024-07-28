"use client";

import { createBrowserClient } from "@supabase/ssr";
import * as process from "node:process";

const createBrowserSupabaseClient = () => {
  createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  );
};

export default createBrowserSupabaseClient;
