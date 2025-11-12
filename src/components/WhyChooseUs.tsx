import React from "react";

const WhyChooseUs: React.FC = () => {
  const points = [
    "Local Expertise with Global Best Practices – Kigali-based with international security standards",
    "Trusted by Industry Leaders – Trusted by Nimbus Ltd, UWA & Co, and national call centers",
    "Affordable SME Packages – Flexible pricing designed specifically for small and medium businesses",
    "End-to-End Partnership – Setup, monitoring, training, and 24/7 support included",
  ];

  return (
    <section className="py-5 bg-dark text-light">
      <div className="container">
        <h2>Why Choose Kivasec</h2>
        <ul>
          {points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default WhyChooseUs;
