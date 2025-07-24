"use client";

import Link from "next/link";
import SearchComponent from "./search/SearchComponent";
import Location from "./locations/page";

import colombianSupremoImg from "./images/Colombian Supremo cp2.jpg";
import ethiopianYirgacheffeImg from "./images/Ethiopian Yirgacheffe cp2.jpeg";
import sumatraMandhelingImg from "./images/Sumatra Mandheling cp2.webp";

export default function Home() {
  return (
    <div>
  
      <main>
        <section className="hero" style={{
          background: "linear-gradient(135deg, #6f4e37 0%, #d2b48c 100%)",
          color: "#fff8f0",
          padding: "6rem 2rem",
          textAlign: "center",
          animation: "fadeIn 2s ease-in-out"
        }}>
          <h1 style={{ fontSize: "3.5rem", marginBottom: "1rem", textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}>
            Welcome to Coffee Finder
          </h1>
          <p style={{ fontSize: "1.5rem", maxWidth: "600px", margin: "0 auto", textShadow: "1px 1px 3px rgba(0,0,0,0.3)" }}>
            Your guide to the best coffee beans, stories, and locations.
          </p>
        </section>

        {/* <SearchComponent /> */}
        <Location/>

        <section className="featured-coffees" style={{ animation: "slideUp 1s ease forwards", opacity: 0 }}>
          <h2>Featured Coffee Beans</h2>
          <div className="coffee-list">
            <article className="coffee-item">
              <Link href="/coffee-beans">
                <img
                  src={colombianSupremoImg.src}
                  alt="Colombian Supremo"
                  className="coffee-img"
                />
                <h3>Colombian Supremo</h3>
                <p>Rich and smooth with a hint of chocolate.</p>
              </Link>
            </article>
            <article className="coffee-item">
              <Link href="/coffee-beans">
                <img
                  src={ethiopianYirgacheffeImg.src}
                  alt="Ethiopian Yirgacheffe"
                  className="coffee-img"
                />
                <h3>Ethiopian Yirgacheffe</h3>
                <p>Floral aroma with bright citrus notes.</p>
              </Link>
            </article>
            <article className="coffee-item">
              <Link href="/coffee-beans">
                <img
                  src={sumatraMandhelingImg.src}
                  alt="Sumatra Mandheling"
                  className="coffee-img"
                />
                <h3>Sumatra Mandheling</h3>
                <p>Full-bodied with earthy undertones.</p>
              </Link>
            </article>
          </div>
        </section>

        <section className="coffee-stories" style={{ animation: "slideUp 1.2s ease forwards", opacity: 0 }}>
          <h2>Coffee Stories</h2>
          <p>Discover the journey of coffee from farm to cup.</p>
        </section>

        <section className="locations" style={{ animation: "slideUp 1.4s ease forwards", opacity: 0 }}>
          <h2>Locations</h2>
          <p>Find coffee shops and roasters near you.</p>
          <div className="location-icons">
            <img
              src="/location.svg"
              alt="Location Icon"
              className="location-icon"
            />
            <img
              src="/location.svg"
              alt="Location Icon"
              className="location-icon"
            />
            <img
              src="/location.svg"
              alt="Location Icon"
              className="location-icon"
            />
          </div>
        </section>
      </main>

      <style jsx>{`
     
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
