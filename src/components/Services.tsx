import React from "react";

const Services: React.FC = () => {
  const cybersecurityServices = [
    { title: "Security Health-Check", desc: "Identify vulnerabilities before attackers do" },
    { title: "Remediation Package", desc: "Fix issues and strengthen defenses" },
    { title: "Monthly Security Monitoring", desc: "Ongoing protection and alerts" },
    { title: "Cybersecurity Training", desc: "Empower your team with practical skills" },
  ];

  const itServices = [
    { title: "Infrastructure & Equipment Setup", desc: "Reliable systems from day one" },
    { title: "Network & Wi-Fi Setup", desc: "Fast, secure connectivity" },
    { title: "IT Help & Support", desc: "Quick response when things break" },
    { title: "Procurement Assistance", desc: "Get the right tools at the right price" },
  ];

  return (
    <section className="py-5 bg-secondary text-light">
      <div className="container">
        <h2>Our Solutions</h2>

        <h3 className="mt-4">Cybersecurity Services</h3>
        <div className="row">
          {cybersecurityServices.map((service) => (
            <div className="col-md-6 mb-3" key={service.title}>
              <h5>{service.title}</h5>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>

        <h3 className="mt-4">IT Services</h3>
        <div className="row">
          {itServices.map((service) => (
            <div className="col-md-6 mb-3" key={service.title}>
              <h5>{service.title}</h5>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
