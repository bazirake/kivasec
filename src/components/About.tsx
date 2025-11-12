import React from "react";

const About: React.FC = () => {
  return (
    <section className="py-5 bg-dark text-light">
      <div className="container">
        <h2>About Kivasec Solutions</h2>
        <p>
          Kivasec Solutions is an IT and cybersecurity consultancy based in Kigali, Rwanda. We help SMEs secure their systems, protect sensitive data, and ensure smooth IT operations.
        </p>
        <p>
          Our mission is simple: empower businesses with reliable, affordable, and professional technology solutions so they can focus on growth while we handle the risks.
        </p>

        <h3>Why We Matter</h3>
        <ul>
          <li>Unprotected systems vulnerable to cyberattacks</li>
          <li>Risk of data loss and downtime</li>
          <li>Limited in-house IT expertise</li>
        </ul>

        <h3>The Problem We Solve</h3>
        <p>
          SMEs face growing challenges: unprotected systems vulnerable to cyberattacks, risk of data loss and downtime, limited in-house IT expertise, and pressure to prove compliance and build client trust.
        </p>
        <p>
          Without the right partner, these risks lead to lost revenue, damaged reputation, and stalled growth. That's where we come in.
        </p>
      </div>
    </section>
  );
};

export default About;
