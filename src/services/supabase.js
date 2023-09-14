import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://ddbndtvkdrtbzolevbwm.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRkYm5kdHZrZHJ0YnpvbGV2YndtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTM1MTE2NDksImV4cCI6MjAwOTA4NzY0OX0.ulGEANFy4oNGH5K26yYhZw0fNTGFw-5RmQv8nFAa08A";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
