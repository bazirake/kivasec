import { ArrowRight, Shield, Network, Users, Clock, Award, Mail, MapPin, Phone, Zap, Menu, X, AlertCircle, TrendingDown, ArrowUp, Lock } from "lucide-react";
import { useEffect, useState } from "react";
import kivasecLogo from "../Images/kivasec-ogo.png";
import PartnersCarousel, { Partner } from "./PartnersCarousel";
import { partners } from "../Data/Object";





const Home = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
   const [showScrollButton, setShowScrollButton] = useState(false);


    // ✅ Scroll button visibility control
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0e27] via-[#0f1535] to-[#0a0e27] text-white overflow-hidden">
      {/* Navigation Header */}
      <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-[rgba(10,14,39,0.7)] border-b border-[rgba(0,212,255,0.1)]">
        <div className="mx-auto max-w-6xl px-6 sm:px-10 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src={kivasecLogo} alt="Kivasec Solutions" className="h-10 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#about" className="text-slate-300 hover:text-[#00d4ff] transition-colors">About</a>
            <a href="#services" className="text-slate-300 hover:text-[#00d4ff] transition-colors">Services</a>
            <a href="#contact" className="text-slate-300 hover:text-[#00d4ff] transition-colors">Contact</a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-[#00d4ff]"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[rgba(0,212,255,0.1)] bg-[rgba(10,14,39,0.95)]">
            <nav className="flex flex-col gap-4 px-6 py-4 text-sm font-medium">
              <a href="#about" className="text-slate-300 hover:text-[#00d4ff] transition-colors">About</a>
              <a href="#services" className="text-slate-300 hover:text-[#00d4ff] transition-colors">Services</a>
              <a href="#contact" className="text-slate-300 hover:text-[#00d4ff] transition-colors">Contact</a>
            </nav>
          </div>
        )}
      </header>

           {/* ✅ Scroll-to-Top Button */}
      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-4 rounded-full bg-gradient-to-r from-[#00d4ff] to-[#0099ff] text-white shadow-lg hover:scale-110 transition-transform duration-300 z-50 border border-[rgba(255,255,255,0.2)]"
          aria-label="Scroll to Top"
        >
          <ArrowUp className="h-6 w-6" />
        </button>
      )}

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-32 md:pt-40 md:pb-48 mt-16">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#0099ff] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#00d4ff] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-[#6600ff] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="mx-auto max-w-6xl px-6 py-12 sm:px-10 relative z-10">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[rgba(0,212,255,0.1)] to-[rgba(0,153,255,0.1)] border border-[rgba(0,212,255,0.2)]">
                <Zap className="h-4 w-4 text-[#00d4ff]" />
                <span className="tech-accent">Cybersecurity Excellence</span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter leading-tight">
                Your Trusted IT &{" "}
                <span className="bg-gradient-to-r from-[#00d4ff] via-[#0099ff] to-[#6600ff] bg-clip-text text-transparent">
                  Cybersecurity
                </span>{" "}
                Partner
              </h1>
            </div>

            <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-2xl">
              Technology and security solutions for smarter and more efficient businesses
            </p>

      <div className="flex flex-col sm:flex-row gap-4 pt-6">
        <a
         href="#contact"
          className="tech-button-primary shadow-lg cursor-pointer">
          Request a Free Security Health-Check
         <ArrowRight className="inline ml-2 h-4 w-4" />
      </a>
       <a href="#contact" className="tech-button-secondary">
                Contact Us
       <ArrowRight className="inline ml-2 h-4 w-4" />
       </a>
        </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="relative py-20 md:py-32 border-t border-[rgba(0,212,255,0.1)]">
        <div className="mx-auto max-w-6xl px-6 sm:px-10">
          <div className="space-y-12">
            {/* Main About */}
            <div className="grid gap-12 lg:grid-cols-2 items-start">
              <div className="space-y-6">
                <h2 className="section-title">About Kivasec Solutions</h2>
                <p className="text-lg text-slate-300 leading-relaxed">
                  Kivasec Solutions is an IT and cybersecurity consultancy based in Kigali, Rwanda. We help small and medium enterprises (SMEs) secure their systems, protect sensitive data, and ensure smooth IT operations.
                </p>
                <p className="text-slate-400 leading-relaxed">
                  Our mission is simple: empower businesses with reliable, affordable, and professional technology solutions so they can focus on growth while we handle the risks.
                </p>
              </div>

              <div className="dark-card glow-border p-8 md:p-10">
                <h3 className="text-xl font-bold text-[#00d4ff] uppercase tracking-wider mb-6">Why We Matter</h3>
                <div className="space-y-4">
                  {[
                    { icon: AlertCircle, text: "Unprotected systems vulnerable to cyberattacks" },
                    { icon: TrendingDown, text: "Risk of data loss and downtime" },
                    { icon: Lock, text: "Limited in-house IT expertise" }
                  ].map((item) => (
                    <div key={item.text} className="flex gap-3">
                      <item.icon className="h-5 w-5 text-[#00d4ff] flex-shrink-0 mt-1" />
                      <p className="text-slate-300">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* The Problem We Solve */}
            <div className="dark-card glow-border p-8 md:p-10 bg-[rgba(10,14,39,0.4)]">
              <h3 className="text-2xl font-bold text-white mb-6">The Problem We Solve</h3>
              <p className="text-slate-300 mb-6 leading-relaxed">
                SMEs face growing challenges: unprotected systems vulnerable to cyberattacks, risk of data loss and downtime, limited in-house IT expertise, and pressure to prove compliance and build client trust.
              </p>
              <p className="text-slate-400">
                Without the right partner, these risks lead to lost revenue, damaged reputation, and stalled growth. That's where we come in.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="relative py-20 md:py-32 border-t border-[rgba(0,212,255,0.1)]">
        <div className="mx-auto max-w-6xl px-6 sm:px-10">
          <div className="space-y-12">
            <h2 className="section-title">Our Solutions</h2>
            <div className="grid gap-8 lg:grid-cols-2">
              {/* Cybersecurity */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 pb-4 border-b border-[rgba(0,212,255,0.2)]">
                     <Shield className="h-8 w-8 text-[#00d4ff]" />
                     <h3 className="text-2xl font-bold">Cybersecurity Services</h3>
                </div>
                {[
                  { name: "Security Health-Check", desc: "Identify vulnerabilities before attackers do" },
                  { name: "Remediation Package", desc: "Fix issues and strengthen defenses" },
                  { name: "Monthly Security Monitoring", desc: "Ongoing protection and alerts" },
                  { name: "Cybersecurity Training", desc: "Empower your team with practical skills" }
                ].map((service) => (
                  <div key={service.name} className="dark-card glow-border p-4 hover:border-[rgba(0,212,255,0.4)] transition-colors group">
                    <p className="font-bold text-white group-hover:text-[#00d4ff] transition-colors">{service.name}</p>
                    <p className="text-sm text-slate-400 mt-1">{service.desc}</p>
                  </div>
                ))}
              </div>

              {/* IT Services */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 pb-4 border-b border-[rgba(0,212,255,0.2)]">
                  <Network className="h-8 w-8 text-[#00d4ff]" />
                  <h3 className="text-2xl font-bold">IT Services</h3>
                </div>
                {[
                  { name: "Infrastructure & Equipment Setup", desc: "Reliable systems from day one" },
                  { name: "Network & Wi-Fi Setup", desc: "Fast, secure connectivity" },
                  { name: "IT Help & Support", desc: "Quick response when things break" },
                  { name: "Procurement Assistance", desc: "Get the right tools at the right price" }
                ].map((service) => (
                  <div key={service.name} className="dark-card glow-border p-4 hover:border-[rgba(0,212,255,0.4)] transition-colors group">
                    <p className="font-bold text-white group-hover:text-[#00d4ff] transition-colors">{service.name}</p>
                    <p className="text-sm text-slate-400 mt-1">{service.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative py-20 md:py-32 border-t border-[rgba(0,212,255,0.1)]">
        <div className="mx-auto max-w-6xl px-6 sm:px-10">
          <h2 className="section-title mb-12">Why Choose Kivasec</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              { title: "Local Expertise with Global Best Practices", desc: "Kigali-based with international security standards" },
              { title: "Trusted by Industry Leaders", desc: "Trusted by Nimbus Ltd, UWA & Co, and national call centers" },
              { title: "Affordable SME Packages", desc: "Flexible pricing designed specifically for small and medium businesses" },
              { title: "End-to-End Partnership", desc: "Setup, monitoring, training, and 24/7 support included" }
            ].map((item) => (
              <div key={item.title} className="dark-card glow-border p-6 hover:border-[rgba(0,212,255,0.4)] transition-colors">
                <h3 className="font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative py-20 md:py-32 border-t border-[rgba(0,212,255,0.1)]">
        <div className="mx-auto max-w-6xl px-6 sm:px-10">
          <h2 className="section-title mb-12">What Our Clients Say</h2>
          <div className="grid gap-8 lg:grid-cols-1">
            {[
              {
                quote: "Kivasec Solutions provided us with outstanding service. Their team ensured our environment was protected with secure and highly reliable data security measures, while safeguarding our core devices. We feel confident knowing our systems are in trusted hands.",
                name: "Fidela UMUHOZA",
                company: "CEO, UWA & Co"
              },
              {
                quote: "As a leading call center solutions provider in Rwanda, Nimbus Ltd has worked with many partners, but Kivasec Solutions truly stands out. Their team assisted us in setting up some of the country's most recognized call centers, including Irembo, BDF, and RDB, and provided valuable support for the Rwanda National Police emergency call center servers as well as Solektra. Thanks to Kivasec's expertise, our operations are secure, reliable, and trusted by institutions nationwide.",
                name: "Yves BIGANIRO",
                company: "CEO, Nimbus Ltd"
              },
              {
                quote: "Kivasec Solutions helped us modernize our IT environment by implementing a Domain Controller and FileShare. This transformed the way our staff collaborate and gave us a secure, reliable backbone for our daily operations. We truly appreciate their professionalism and dedication.",
                name: "Radio Maria Rwanda",
                company: "Media Organization"
              },
              {
                quote: "Kivasec Solutions supported us through our OpenClinic vendor when several hospitals faced critical system failures. Their team recovered essential data, migrated us to a new high‑availability setup, and implemented scheduled backups with proactive monitoring alerts. Thanks to their expertise, hospitals like KHI, Kabgayi Eye Clinic, and Nyirinkwaya Hospital now run stable, secure systems that ensure continuity of care.",
                name: "OpenClinic Vendor",
                company: "Examples: KHI, Kabgayi Eye Clinic, Nyirinkwaya Hospital"
              }
            ].map((testimonial) => (
              <div key={testimonial.name} className="dark-card glow-border p-8 hover:border-[rgba(0,212,255,0.4)] transition-colors">
                <p className="text-slate-300 leading-relaxed mb-6 text-lg">
                  "{testimonial.quote}"
                </p>
                <div className="pt-6 border-t border-[rgba(0,212,255,0.1)]">
                  <p className="font-bold text-white">{testimonial.name}</p>
                  <p className="text-sm text-[#00d4ff]">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="relative py-20 md:py-32 border-t border-[rgba(0,212,255,0.1)]">
        <div className="mx-auto max-w-6xl px-6 sm:px-10">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="dark-card glow-border p-8 md:p-10">
              <h3 className="text-2xl font-bold text-[#00d4ff] uppercase tracking-wider mb-4">Vision</h3>
              <p className="text-slate-300 leading-relaxed">
                To become a trusted technology partner that helps companies innovate and grow securely in the digital world.
              </p>
            </div>
            <div className="dark-card glow-border p-8 md:p-10">
              <h3 className="text-2xl font-bold text-[#00d4ff] uppercase tracking-wider mb-4">Mission</h3>
              <p className="text-slate-300 leading-relaxed">
                To deliver secure, reliable, and effective IT and cybersecurity solutions that empower SMEs in Rwanda and the region.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us */}
  <section
  id="contact"
  className="relative py-20 md:py-32 border-t border-[rgba(0,212,255,0.1)]"
>
  <div className="mx-auto max-w-6xl px-6 sm:px-10">
    <h2 className="section-title mb-12">Get in Touch</h2>

    {/* Contact Form */}
    <div className="dark-card glow-border p-12 mb-16 max-w-3xl mx-auto">
      <h3 className="text-2xl font-bold text-white mb-8 text-center">
        Send Us a Message
      </h3>
      <form className="grid grid-cols-1 gap-6">
        <div>
          <label className="block text-slate-300 mb-2">Email Address</label>
          <input
            type="email"
            name="email"
            className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-[#00d4ff] focus:ring-1 focus:ring-[#00d4ff] outline-none"
            placeholder="john@example.com"
            required
          />
        </div>
        <div>
          <label className="block text-slate-300 mb-2">Subject</label>
          <input
            type="text"
            name="subject"
            className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-[#00d4ff] focus:ring-1 focus:ring-[#00d4ff] outline-none"
            placeholder="How can we help?"
          />
        </div>
        <div>
          <label className="block text-slate-300 mb-2">Message</label>
          <textarea
            name="message"
            rows={5}
            className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:border-[#00d4ff] focus:ring-1 focus:ring-[#00d4ff] outline-none resize-none"
            placeholder="Write your message..."
            required
          ></textarea>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="tech-button-primary shadow-lg px-10 py-3"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>

    {/* Contact Info */}
    <div className="grid gap-8 md:grid-cols-3 mb-12">
      {[
        { icon: MapPin, label: "Address", value: "KN 3 Avenue, Kigali – Rwanda" },
        { icon: Mail, label: "Email", value: "info@kivasec.rw", isLink: true, href: "mailto:info@kivasec.rw" },
        { icon: Phone, label: "Phone", value: "+250 785 686 679", isLink: true, href: "tel:+250785686679" }
      ].map((contact) => (
        <div
          key={contact.label}
          className="dark-card glow-border p-8 hover:border-[rgba(0,212,255,0.4)] transition-colors"
        >
          <contact.icon className="h-10 w-10 text-[#00d4ff] mb-4" />
          <h3 className="font-bold text-white mb-2">{contact.label}</h3>
          {contact.isLink ? (
            <a
              href={contact.href}
              className="text-[#00d4ff] hover:text-[#00e4ff] transition-colors font-medium"
            >
              {contact.value}
            </a>
          ) : (
            <p className="text-slate-400">{contact.value}</p>
          )}
        </div>
      ))}
    </div>

    {/* Website */}
    <div className="grid gap-8 md:grid-cols-3 md:col-span-3 mb-12">
      <div
        key="website"
        className="dark-card glow-border p-8 hover:border-[rgba(0,212,255,0.4)] transition-colors md:col-span-3"
      >
        <h3 className="font-bold text-white mb-2">Website</h3>
        <a
          href="https://www.kivasec.rw"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#00d4ff] hover:text-[#00e4ff] transition-colors font-medium"
        >
          www.kivasec.rw
        </a>
      </div>
    </div>

    {/* CTA */}
    
      <PartnersCarousel partners={partners}  />
   
  </div>
</section>

      {/* Footer */}
      <footer className="border-t border-[rgba(0,212,255,0.1)] py-8 md:py-12">
        <div className="mx-auto max-w-6xl px-6 sm:px-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <p className="text-slate-400">© {new Date().getFullYear()} Kivasec Solutions. All rights reserved.</p>
            <div className="flex flex-wrap items-center gap-6 text-xs uppercase tracking-widest text-slate-400">
              <span className="hover:text-[#00d4ff] transition-colors cursor-pointer">Trusted Security</span>
              <span className="hover:text-[#00d4ff] transition-colors cursor-pointer">Professional Service</span>
              <span className="hover:text-[#00d4ff] transition-colors cursor-pointer">SME Focused</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
