import supabase from "./db_config.js";
export default async function auths(email,password){
    console.log(email);
    let { data, error } = await supabase.auth.signUp({
        email: 'someone@email.com',
        password: 'FQyvAcSEzPQxwMrFHJwp',
        options: {
          emailRedirectTo: 'http://localhost:5173/',
        }
      })
    console.log(error);
}