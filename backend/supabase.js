import { createClient } from "@supabase/supabase-js";
const supabase = createClient("https://dcnoydvdhweymknnhhrz.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRjbm95ZHZkaHdleW1rbm5oaHJ6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc5MjYyNjIsImV4cCI6MjAzMzUwMjI2Mn0.v3mttsmF1Bmp1JbhlkwDfSUr_LRIm4gRbo2CxGJB5ng");
var datas;
export async function find(value){
    let {data:movies,error} = await supabase
    .from('movies')
    .select('*')
    .like('film',value);
    console.log(movies);
    return movies;
}
