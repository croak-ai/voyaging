import { createClient } from "@supabase/supabase-js";
import { Database } from "./functions/_lib/database.ts";

const supabaseUrl = Deno.env.get("NEXT_PUBLIC_SUPABASE_URL");
const supabaseAnonKey = Deno.env.get("SUPABASE_ANON_KEY");

let supabase = null;

if (supabaseUrl && supabaseAnonKey) {
  supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);
} else {
  console.error("Supabase URL or anonymous key is missing.");
}

export { supabase };
