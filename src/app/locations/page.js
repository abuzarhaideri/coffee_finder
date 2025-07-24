"use client";

import { useState } from "react";
import styles from "./locations.module.css";

export default function Locations() {
  const [query, setQuery] = useState("");
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchCoffeeShops(place) {
    setLoading(true);
    setError(null);
    try {
      const geoRes = await fetch(
        "https://nominatim.openstreetmap.org/search?format=json&q=" +
          encodeURIComponent(place)
      );
      const geoData = await geoRes.json();
      if (!geoData || geoData.length === 0) {
        setLocations([]);
        setError("No locations found for the place.");
        setLoading(false);
        return;
      }
      const firstResult = geoData[0];
      if (!firstResult) {
        setLocations([]);
        setError("No valid location data found.");
        setLoading(false);
        return;
      }
      const { lat, lon, display_name } = firstResult;

      if (!display_name || !display_name.toLowerCase().includes("india")) {
        setLocations([]);
        setError("Please search for locations within India only.");
        setLoading(false);
        return;
      }

      const overpassQuery =
        '[out:json];node["amenity"="cafe"](around:5000,' +
        lat +
        "," +
        lon +
        ");out;";
      const overpassRes = await fetch(
        "https://overpass-api.de/api/interpreter",
        {
          method: "POST",
          headers: {
            "Content-Type": "text/plain",
          },
          body: overpassQuery,
        }
      );
      const overpassData = await overpassRes.json();

      const shops = overpassData.elements.map((el, index) => ({
        id: el.id || index,
        name: el.tags.name || "Unnamed Cafe",
        lat: el.lat,
        lon: el.lon,
      }));
      setLocations(shops);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching coffee shops:", err);
      setError("Failed to fetch coffee shops.");
      setLoading(false);
    }
  }

  function handleInputChange(e) {
    setQuery(e.target.value);
  }

  function handleSearch(e) {
    e.preventDefault();
    if (!query) return;
    fetchCoffeeShops(query);
  }

  return (
    <div className={styles.locationsContainer}>
      <h1 className={styles.header}>
        <img src="/location.svg" alt="Location Icon" className={styles.locationIcon} />
        Find Coffee Shops Near You
      </h1>
      <form onSubmit={handleSearch} className={styles.searchForm}>
        <input
          type="text"
          placeholder="Enter a place name in India"
          value={query}
          onChange={handleInputChange}
          className={styles.searchInput}
        />
        <button type="submit" className={styles.searchButton}>
          Search
        </button>
      </form>
      {loading && <p className={styles.loading}>Loading coffee shops...</p>}
      {error && <p className={styles.error}>{error}</p>}
      <h2 className={styles.coffeeShopsTitle}>Coffee Shops</h2>
      <ul className={styles.coffeeShopsList}>
        {locations.length > 0 ? (
          locations.map((loc) => (
            <li key={loc.id} className={styles.coffeeShopItem}>
              {loc.name}
            </li>
          ))
        ) : (
          <li className={styles.noResults}>No coffee shops found.</li>
        )}
      </ul>
    </div>
  );
}
