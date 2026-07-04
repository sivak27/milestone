import "./Footer.css";
import {
  FaWhatsapp,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-top">

        {/* Left */}
        <div className="footer-brand">
          <div className="logo">
            <span>g</span>
            <h3>kaizen</h3>
          </div>

          <p>
            A one-person growth practice for businesses
            that want measurable outcomes, not
            deliverables.
          </p>
        </div>

        {/* Contact */}
        <div className="footer-column">
          <h5>CONTACT</h5>

          <a href="mailto:hari@growthstudio.com">
            hariharan.growthpartner@gmail.com.com
          </a>

          <a href="tel:+919344260752">
            +91 9344260752
          </a>
        </div>

        {/* Location */}
        <div className="footer-column">
          <h5>LOCATION</h5>

          <p>Bengaluru, India</p>
          <p>Working globally</p>
        </div>

        {/* Social */}
        <div className="footer-social">

          <a href="#">
            <FaWhatsapp />
          </a>

          <a href="#">
            <FaInstagram />
          </a>

          <a href="#">
            <FaLinkedinIn />
          </a>

        </div>

      </div>

      <div className="footer-bottom">

        <p>
          © {new Date().getFullYear()} Kaizen. All rights reserved.
        </p>

        <span>
          Built with growth in mind.
        </span>

      </div>

    </footer>
  );
}