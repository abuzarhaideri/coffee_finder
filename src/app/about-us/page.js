"use client";

export default function AboutUs() {
  return (
    <div style={{ padding: "3rem", backgroundColor: "#fff8f0", animation: "fadeIn 1s ease forwards", opacity: 0 }}>
      <h1 style={{ animation: "slideUp 1.2s ease forwards", opacity: 0, color: "#6f4e37" }}>About Us</h1>
      <p style={{ maxWidth: "700px", margin: "1rem auto", fontSize: "1.1rem", lineHeight: "1.6", color: "#4b3b2b" }}>
        Coffee Finder is your trusted companion in the world of coffee. We are passionate about connecting coffee lovers with the finest beans, sharing inspiring stories, and highlighting local coffee culture. Our mission is to celebrate the art, science, and community behind every cup.
      </p>
      <section style={{ marginTop: "2rem", maxWidth: "700px", marginLeft: "auto", marginRight: "auto" }}>
        <h2 style={{ color: "#6f4e37", animation: "fadeInLeft 1.5s ease forwards", opacity: 0 }}>Our Story</h2>
        <p style={{ fontSize: "1rem", lineHeight: "1.6", color: "#4b3b2b" }}>
          Founded in 2025 by a group of coffee enthusiasts, Coffee Finder was born out of a desire to educate and inspire. We believe in quality, sustainability, and community, striving to bring transparency to the coffee supply chain and support ethical sourcing.
        </p>
      </section>
      <section style={{ marginTop: "2rem", maxWidth: "700px", marginLeft: "auto", marginRight: "auto" }}>
        <h2 style={{ color: "#6f4e37", animation: "fadeInRight 1.5s ease forwards", opacity: 0 }}>Our Team</h2>
        <p style={{ fontSize: "1rem", lineHeight: "1.6", color: "#4b3b2b" }}>
          Our diverse team includes coffee experts, skilled developers, and creative content creators. Together, we are committed to delivering the best tools, stories, and experiences for coffee lovers worldwide.
        </p>
      </section>
      <section style={{ marginTop: "2rem", maxWidth: "700px", marginLeft: "auto", marginRight: "auto" }}>
        <h2 style={{ color: "#6f4e37", animation: "fadeInUp 1.5s ease forwards", opacity: 0 }}>Our Values</h2>
        <ul style={{ fontSize: "1rem", lineHeight: "1.6", color: "#4b3b2b", listStyleType: "disc", paddingLeft: "1.5rem" }}>
          <li>Sustainability: Supporting eco-friendly coffee farming practices.</li>
          <li>Quality: Curating only the finest coffee beans and experiences.</li>
          <li>Community: Building connections between coffee lovers and local roasters.</li>
          <li>Education: Sharing knowledge about coffee origins, brewing, and culture.</li>
        </ul>
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
      `}</style>
    </div>
  );
}
