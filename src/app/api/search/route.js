export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("q") || "";

  if (!query) {
    return new Response(JSON.stringify([]), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  try {
    // Using a public English coffee API for demonstration
    // Replacing with a different API that returns English data
    // The previous API endpoint is not working, switching to a public coffee API with CORS support
    const externalApiUrl = `https://api.sampleapis.com/coffee/hot`;

    const res = await fetch(externalApiUrl);
    if (!res.ok) {
      throw new Error("Failed to fetch from external API");
    }
    const data = await res.json();

    // Filter results based on query
    const results = data.filter(item =>
      item.title.toLowerCase().includes(query.toLowerCase())
    ).map((item, index) => ({
      id: index + 1,
      name: item.title,
      description: item.description || "No description available."
    }));

    return new Response(JSON.stringify(results), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
