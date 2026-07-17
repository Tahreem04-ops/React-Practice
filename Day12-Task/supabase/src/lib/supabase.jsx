import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://nniphwkevzovbhqsjnzv.supabase.co";

const supabaseKey = "sb_publishable_71ZcEXZBOwRnuY7Vm_1nGQ_CsvMsowc";

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);