"use client";

import Image from "next/image";

export default function CoffeeStories() {
  return (
    <div style={{ padding: "3rem", backgroundColor: "#fff8f0", animation: "fadeIn 1s ease forwards", opacity: 0 }}>
      <h1 style={{ animation: "slideUp 1.2s ease forwards", opacity: 0, color: "#6f4e37" }}>Coffee Stories</h1>
      <p style={{ maxWidth: "700px", margin: "1rem auto", fontSize: "1.1rem", lineHeight: "1.6", color: "#4b3b2b" }}>
        Dive deep into the rich history and culture of coffee. Discover inspiring stories from farmers, roasters, and baristas who bring coffee to life with passion and dedication.
      </p>
      <section style={{ marginTop: "2rem", maxWidth: "700px", marginLeft: "auto", marginRight: "auto", textAlign: "left" }}>
        <h2 style={{ color: "#6f4e37", animation: "fadeInLeft 1.5s ease forwards", opacity: 0 }}>From Farm to Cup</h2>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginTop: "1rem" }}>
          <img src="https://media.istockphoto.com/id/880720550/photo/coffee-cup-coffee-beans.jpg?s=612x612&w=0&k=20&c=Hys1kwquSclobkzG_vUpPg2k9p2xzAsVY8-YaxzstBo=" alt="Coffee Bean" width={80} height={80} style={{ animation: "zoomIn 2s ease forwards", opacity: 0 }} />
          <p style={{ fontSize: "1rem", lineHeight: "1.6", color: "#4b3b2b" }}>
            Learn about the journey of coffee beans from the farms where they are grown to the cups enjoyed worldwide. Understand the care and craftsmanship involved in every step.
          </p>
        </div>
      </section>
      <section style={{ marginTop: "2rem", maxWidth: "700px", marginLeft: "auto", marginRight: "auto", textAlign: "left" }}>
        <h2 style={{ color: "#6f4e37", animation: "fadeInRight 1.5s ease forwards", opacity: 0 }}>Barista Highlights</h2>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginTop: "1rem" }}>
          <img src="https://images.stockcake.com/public/3/e/3/3e39816a-f4e3-4905-b724-7079ec32053e_large/busy-coffee-barista-stockcake.jpg" alt="Barista" width={80} height={80} style={{ borderRadius: "8px", animation: "zoomIn 2s ease forwards", opacity: 0 }} />
          <p style={{ fontSize: "1rem", lineHeight: "1.6", color: "#4b3b2b" }}>
            Meet the skilled baristas who craft your favorite coffee drinks with passion and precision. Their stories reveal the artistry behind every cup.
          </p>
        </div>
      </section>
      <section style={{ marginTop: "2rem", maxWidth: "700px", marginLeft: "auto", marginRight: "auto", textAlign: "left" }}>
        <h2 style={{ color: "#6f4e37", animation: "fadeInUp 1.5s ease forwards", opacity: 0 }}>Community Stories</h2>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginTop: "1rem" }}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR70AfYSRpatqCxrz5rRPT4FGraSDEXjPdoQQ&s" alt="Community" width={80} height={80} style={{ animation: "zoomIn 2s ease forwards", opacity: 0 }} />
          <p style={{ fontSize: "1rem", lineHeight: "1.6", color: "#4b3b2b" }}>
            Explore how coffee brings communities together and supports local economies. These stories highlight the social impact of coffee culture worldwide.
          </p>
        </div>
      </section>
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes zoomIn {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
}
