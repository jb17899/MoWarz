import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://uyjdrufqstausaxtzrgo.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV5amRydWZxc3RhdXNheHR6cmdvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY5MTQzMzYsImV4cCI6MjAzMjQ5MDMzNn0.pNPUA_fxQ6RHMxHzmUBeuP8uKQWL6y8k7PXx-_rrupA";

const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;