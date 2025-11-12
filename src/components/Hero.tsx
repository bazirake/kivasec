import React from "react";

const Hero: React.FC = () => {
  return (
    <section
      className="text-light d-flex flex-column justify-content-center align-items-start"
      style={{
        minHeight: "80vh",
        background: "linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 50%, #222831 100%)",
        padding: "5rem 2rem",
      }}
    >
      <h1 className="display-4 fw-bold">Kivasec Solutions</h1>
      <h3 className="mb-3">Cybersecurity Excellence</h3>
      <p className="lead mb-4">Your Trusted IT & Cybersecurity Partner</p>
      <p className="mb-4">
        Technology and security solutions for smarter and more efficient businesses
      </p>
      <div className="d-flex gap-3">
        <button className="btn btn-info btn-lg">Request a Free Security Health-Check</button>
        <button className="btn btn-outline-light btn-lg">Contact Us</button>
      </div>
    </section>
  );
};

export default Hero;
