export async function GET() {
  const locations = [
    { id: 1, lat: 40.7128, lng: -74.006, title: "New York" },
    { id: 2, lat: 34.0522, lng: -118.2437, title: "Los Angeles" },
    { id: 3, lat: 41.8781, lng: -87.6298, title: "Chicago" },
  ];

  return new Response(JSON.stringify(locations), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
