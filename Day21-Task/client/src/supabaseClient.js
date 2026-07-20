import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Name of the storage bucket used for file sharing.
// Create this bucket in Supabase Dashboard -> Storage -> New bucket -> "files"
export const BUCKET_NAME = "files";
