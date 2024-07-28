"use server";

import { createServerSupabaseClient } from "../utils/supabase/server";
import * as process from "node:process";

const handleError = (error: Error) => {
  console.error(error);
  throw new Error(error.message);
};

export const uploadFile = async (formData: FormData) => {
  const supabase = await createServerSupabaseClient();
  const files = Array.from(formData.entries()).map(
    ([name, file]) => file as File,
  );

  const result = await Promise.all(
    files.map((file) =>
      supabase.storage
        .from(process.env.NEXT_PUBLIC_STORAGE_BUCKET)
        .upload(file.name, file, { upsert: true }),
    ),
  );

  return result;
};

export const searchFiles = async (search: string) => {
  const supabase = await createServerSupabaseClient();
  const { data, error } = await supabase.storage
    .from(process.env.NEXT_PUBLIC_STORAGE_BUCKET)
    .list(null, {
      search,
    });

  if (error) handleError(error);
  console.log(data);
  return data;
};

export const deleteFile = async (fileName: string) => {
  const supabase = await createServerSupabaseClient();
  const { data, error } = await supabase.storage
    .from(process.env.NEXT_PUBLIC_STORAGE_BUCKET)
    .remove([fileName]);

  if (error) handleError(error);

  return data;
};
