import { fetchData } from "@/utils";

const API_BASE_URL = "http://api.weatherstack.com"
const API_KEY = "6e2c322af135808741980494c619e695"

export async function GET(request: any) {
  const { searchParams } = new URL(request.url);
  const city = searchParams.get("city");

  if (!city) {
    return new Response(JSON.stringify({ error: "City is required" }), {
      headers: { "Content-Type": "application/json" },
      status: 400,
    });
  }

  const currentUrl = `${API_BASE_URL}/current?access_key=${API_KEY}&query=${city}`;

  try {
    const data = await fetchData(currentUrl);

    return new Response(JSON.stringify(data), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to fetch data" }), {
      headers: { "Content-Type": "application/json" },
      status: 500,
    });
  }
}
