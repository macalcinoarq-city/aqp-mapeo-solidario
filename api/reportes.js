export default async function handler(req, res) {

  // Permitir CORS completo
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization, apikey");

  // Manejar preflight
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  try {
    const SUPABASE_URL = "https://esgprjbtkykdkzhpkjie.supabase.co/rest/v1/rpc/reportes_geojson_fc";
    const SUPABASE_KEY = process.env.SUPABASE_ANON_KEY;

    const response = await fetch(SUPABASE_URL, {
      method: "POST",
      headers: {
        "apikey": SUPABASE_KEY,
        "Authorization": `Bearer ${SUPABASE_KEY}`,
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({})
    });

    const data = await response.json();

    res.setHeader("Content-Type", "application/json");
    res.status(200).send(JSON.stringify(data));

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

