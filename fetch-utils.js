const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzOTUwODY5NSwiZXhwIjoxOTU1MDg0Njk1fQ._JsLr3VMD8auyxCxM9Ua1nAGqcplV6eKZNzk8mg9nbg';


const SUPABASE_URL = 'https://hsstlxeevquipwyiestv.supabase.co';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getHeroes() {
    const response = await client 
        .from('heroes')
        .select();
    console.log(response.data);
    return response.data;
}

export async function getHero(id) {
    const response = await client
        .from('heroes')
        .select()
        .match({ id: id })
        .single();

    return response.data;
}