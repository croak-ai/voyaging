import { createClient } from "@supabase/supabase-js";
import { Database } from "./functions/_lib/database.ts";

const supabaseUrl = Deno.env.get("NEXT_PUBLIC_SUPABASE_URL");
const supabaseAnonKey = Deno.env.get("SUPABASE_ANON_KEY");

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Supabase URL or anonymous key is missing.");
}

const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);

export { supabase };
