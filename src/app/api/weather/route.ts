import { fetchData } from "@/utils/utils";

export async function GET(request: any) {
  const { searchParams } = new URL(request.url);
  const city = searchParams.get('city');

  if (!city) {
    return new Response(JSON.stringify({ error: "City is required" }), {
      headers: { 'Content-Type': 'application/json' },
      status: 400,
    });
  }


  const apiUrl = `http://api.weatherstack.com/current?access_key=6e2c322af135808741980494c619e695&query=${city}`;

  try {
    const data = await fetchData(apiUrl);

    return new Response(JSON.stringify(data), {
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {

    console.error("Error fetching data", error);
    return new Response(JSON.stringify({ error: "Failed to fetch data" }), {
      headers: { 'Content-Type': 'application/json' },
      status: 500,
    });
  }
}
