import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Footer: React.FC = () => {
  return (
    <footer
      className="py-5 mt-5 text-light bg-[#0B132B] text-gray-300 py-6 text-center"
      style={{
        background:
          "linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 50%, #222831 100%)", // Elegant black gradient
      }}
    >
      <div className="container">
        <div className="row">
          {/* Column 1 */}
          <div className="col-md-4 mb-4 mb-md-0">
            <h5 className="text-uppercase fw-bold text-info">Kivasec Solutions</h5>
            <p className="small text-secondary">
              Trusted cybersecurity and IT solutions provider, securing your
              business with confidence and innovation.
            </p>
          </div>

          {/* Column 2 */}
          <div className="col-md-4 mb-4 mb-md-0">
            <h5 className="text-uppercase fw-bold text-info">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="/about" className="text-light text-decoration-none">
                  About Us
                </a>
              </li>
              <li className="mb-2">
                <a href="/services" className="text-light text-decoration-none">
                  Our Services
                </a>
              </li>
              <li className="mb-2">
                <a href="/contact" className="text-light text-decoration-none">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="col-md-4">
            <h5 className="text-uppercase fw-bold text-info">Follow Us</h5>
            <div>
              {[
                { icon: "twitter", url: "#" },
                { icon: "facebook", url: "#" },
                { icon: "linkedin", url: "#" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.url}
                  className="text-light me-3 fs-5"
                  style={{ transition: "color 0.3s" }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.color = "#0dcaf0")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.color = "white")
                  }
                >
                  <i className={`bi bi-${social.icon}`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>

        <hr className="border-secondary my-4" />
        <p className="text-center mb-0 small text-secondary">
          &copy; {new Date().getFullYear()} Kivasec Solutions. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
