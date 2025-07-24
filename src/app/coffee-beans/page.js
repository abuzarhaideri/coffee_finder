"use client";

export default function CoffeeBeans() {
  const coffeeBeans = [
    {
      id: 1,
      name: "Colombian Supremo",
      description: "Rich and smooth with a hint of chocolate.",
      image: "/coffee-bean.svg",
      origin: "Colombia",
      roast: "Medium",
      flavorNotes: "Chocolate, Nutty, Sweet",
    },
    {
      id: 2,
      name: "Ethiopian Yirgacheffe",
      description: "Floral aroma with bright citrus notes.",
      image: "/coffee-bean.svg",
      origin: "Ethiopia",
      roast: "Light",
      flavorNotes: "Floral, Citrus, Bright",
    },
    {
      id: 3,
      name: "Sumatra Mandheling",
      description: "Full-bodied with earthy undertones.",
      image: "/coffee-bean.svg",
      origin: "Indonesia",
      roast: "Dark",
      flavorNotes: "Earthy, Spicy, Bold",
    },
  ];

  return (
    <div style={{ padding: "2rem", backgroundColor: "#fff8f0", animation: "fadeIn 1s ease forwards", opacity: 0 }}>
      <h1 style={{ animation: "slideUp 1.2s ease forwards", opacity: 0 }}>Coffee Beans</h1>
      <p>Explore a variety of coffee beans from around the world.</p>
      <div className="coffee-list">
        {coffeeBeans.map((bean) => (
          <article key={bean.id} className="coffee-item">
            <img src={bean.image} alt={bean.name} className="coffee-img" />
            <h3>{bean.name}</h3>
            <p>{bean.description}</p>
            <ul>
              <li><strong>Origin:</strong> {bean.origin}</li>
              <li><strong>Roast:</strong> {bean.roast}</li>
              <li><strong>Flavor Notes:</strong> {bean.flavorNotes}</li>
            </ul>
          </article>
        ))}
      </div>
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
