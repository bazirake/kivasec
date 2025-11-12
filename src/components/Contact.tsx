import React from "react";

const Contact: React.FC = () => {
  return (
    <section className="py-5 bg-secondary text-light">
      <div className="container">
        <h2>Get in Touch</h2>
        <p><strong>Address:</strong> KN 3 Avenue, Kigali – Rwanda</p>
        <p><strong>Email:</strong> info@kivasec.rw</p>
        <p><strong>Phone:</strong> +250 785 686 679</p>
        <p><strong>Website:</strong> www.kivasec.rw</p>
        <button className="btn btn-info mt-3">Request a Free Security Health-Check</button>
      </div>
    </section>
  );
};

export default Contact;
