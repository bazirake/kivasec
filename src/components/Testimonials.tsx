import React from "react";

const testimonials = [
  {
    quote: "Kivasec Solutions provided us with outstanding service. Their team ensured our environment was protected with secure and highly reliable data security measures, while safeguarding our core devices. We feel confident knowing our systems are in trusted hands.",
    client: "Fidela UMUHOZA",
    title: "CEO, UWA & Co"
  },
  {
    quote: "As a leading call center solutions provider in Rwanda, Nimbus Ltd has worked with many partners, but Kivasec Solutions truly stands out. Their team assisted us in setting up some of the country's most recognized call centers ...",
    client: "Yves BIGANIRO",
    title: "CEO, Nimbus Ltd"
  },
  {
    quote: "Kivasec Solutions helped us modernize our IT environment by implementing a Domain Controller and FileShare. This transformed the way our staff collaborate ...",
    client: "Radio Maria Rwanda",
    title: "Media Organization"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-5 bg-secondary text-light">
      <div className="container">
        <h2>What Our Clients Say</h2>
        {testimonials.map((t, i) => (
          <blockquote key={i} className="blockquote mb-4">
            <p>"{t.quote}"</p>
            <footer className="blockquote-footer text-light">
              {t.client}, <cite>{t.title}</cite>
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
