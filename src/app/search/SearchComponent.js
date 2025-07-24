"use client";

import { useState } from "react";

export default function SearchComponent() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [coffeeShops, setCoffeeShops] = useState([]);
  const [mapUrl, setMapUrl] = useState("");

  async function handleSearch(e) {
    e.preventDefault();
    if (!query) return;

    // Fetch coffee data from existing API
    const res = await fetch("/api/search?q=" + encodeURIComponent(query));
    const data = await res.json();
    setResults(data);

    // Fetch coffee shops nearby using Nominatim and Overpass API
    try {
      // Get coordinates for the place name
      const geoRes = await fetch("https://nominatim.openstreetmap.org/search?format=json&q=" + encodeURIComponent(query));
      const geoData = await geoRes.json();
      if (geoData.length === 0) {
        setCoffeeShops([]);
        setMapUrl("");
        return;
      }
      const { lat, lon } = geoData[0];

      // Query Overpass API for coffee shops near the coordinates (within 1km)
      const overpassQuery = `
        [out:json];
        node["amenity"="cafe"](around:1000,${lat},${lon});
        out;
      `;
      const overpassRes = await fetch("https://overpass-api.de/api/interpreter", {
        method: "POST",
        body: overpassQuery,
      });
      const overpassData = await overpassRes.json();

      const shops = overpassData.elements.map((el, index) => ({
        id: el.id || index,
        name: el.tags.name || "Unnamed Cafe",
        lat: el.lat,
        lon: el.lon,
      }));
      setCoffeeShops(shops);

      // Generate static map URL with markers using OpenStreetMap Static Maps service
      const markers = shops.map(shop => shop.lat + "," + shop.lon + ",lightblue1").join("|");
      const staticMapUrl = "https://staticmap.openstreetmap.de/staticmap.php?center=" + lat + "," + lon + "&zoom=14&size=600x300&markers=" + markers;
      setMapUrl(staticMapUrl);
    } catch (error) {
      setCoffeeShops([]);
      setMapUrl("");
    }
  }

  async function handleInputChange(e) {
    const value = e.target.value;
    setQuery(value);
    if (!value) {
      setResults([]);
      setCoffeeShops([]);
      setMapUrl("");
      return;
    }
    const res = await fetch("/api/search?q=" + encodeURIComponent(value));
    const data = await res.json();
    setResults(data);
  }

  return (
    <div>
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search coffee or place..."
          value={query}
          onChange={handleInputChange}
          className="search-input"
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      <ul className="search-results">
        {results.length > 0 && results.map((item) => (
          <li key={item.id} className="search-result-item">
            <strong>{item.name}</strong>: {item.description}
          </li>
        ))}
      </ul>

      {mapUrl && (
        <div style={{ marginTop: "1rem" }}>
          <img src={mapUrl} alt="Map of nearby coffee shops" style={{ width: "100%", maxWidth: "600px", borderRadius: "8px" }} />
        </div>
      )}

      <ul className="coffee-shops">
        {coffeeShops.length > 0 ? coffeeShops.map((shop) => (
          <li key={shop.id} className="coffee-shop-item">
            {shop.name}
          </li>
        )) : null}
      </ul>
    </div>
  );
}
