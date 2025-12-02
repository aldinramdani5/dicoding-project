const BASE_URL = "https://jrkqcbmjknzgpbtrupxh.supabase.co/rest/v1";
const API_KEY = "sb_publishable_h889CjrPIGwCMA9I4oTTaA_2L22Y__R";

export async function fetchAPI(endpoint) {
  try {
    const res = await fetch(`${BASE_URL}/${endpoint}`, {
      headers: {
        apikey: API_KEY,
        Authorization: `Bearer ${API_KEY}`,
      },
    });

    return await res.json();
  } catch (err) {
    console.error("API ERROR:", err);
    return null;
  }
}
