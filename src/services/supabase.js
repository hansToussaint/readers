import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://nfafnpfezjjknvgpsqcs.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5mYWZucGZlempqa252Z3BzcWNzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkwMjc2NzMsImV4cCI6MjAxNDYwMzY3M30.VvjpTQtcXR8De-SvDJfv9m7fk1DBAWOHuT7-KoI1F1w";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
