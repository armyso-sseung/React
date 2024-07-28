"use server";

import { CookieOptions, createServerClient } from "@supabase/ssr";
import { Database } from "../../../types_db";
import * as process from "node:process";
import { cookies } from "next/headers";

export const createServerSupabaseClient = async (
  cookieStore: ReturnType<typeof cookies> = cookies(),
  admin: boolean = false,
) => {
  return createServerClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    admin
      ? process.env.NEXT_SUPABASE_SERVICE_ROLE!
      : process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get: (name: string) => cookieStore.get(name)?.value,
        set: (name: string, value: string, options?: CookieOptions) => {
          try {
            cookieStore.set({ name, value, ...options });
          } catch (e) {
            console.error(e);
          }
        },
        remove: (name: string, options: CookieOptions) => {
          try {
            cookieStore.set({ name, value: "", ...options });
          } catch (e) {
            console.error(e);
          }
        },
      },
    },
  );
};

export const createServerSupabaseAdminClient = async (
  cookieStore: ReturnType<typeof cookies> = cookies(),
) => createServerSupabaseClient(cookieStore, true);
