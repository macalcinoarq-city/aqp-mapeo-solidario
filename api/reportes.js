export default async function handler(req, res) {
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

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Type", "application/json");
  res.status(200).send(JSON.stringify(data));

}
