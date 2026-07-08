import React from "react";
import "./Footer.css";
import {
  FaWhatsapp,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import MilestoneLogo from "/src/assets/6.png"; // Imported your signature emerald crystal asset 

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-top">

        {/* Left Brand Segment */}
        <div className="footer-brand">
          <div className="logo" style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            {/* UPDATED LOGO IMAGE INTERACTION (Blends into footer context smoothly) */}
            <img 
              src={MilestoneLogo} 
              alt="Milestone Brand Logo" 
              style={{ 
                height: "44px", 
                width: "44px", 
                objectFit: "contain",
                mixBlendMode: "multiply" /* Strips out white background elements instantly */
              }} 
            />
            <h3>MileStone Digital Marketing</h3>
          </div>

          <p style={{ marginTop: "16px" }}>
            A one-person growth practice for businesses
            that want measurable outcomes, not
            deliverables.
          </p>
        </div>

        {/* Contact info Segment */}
        <div className="footer-column">
          <h5>CONTACT</h5>

          <a href="mailto:milestonesdigitalmarketing@gmail.com">
            milestonesdigitalmarketing@gmail.com
          </a>

          <a href="tel:+919344260752">
            +91 9344260752
          </a>
        </div>

        {/* Location info Segment */}
        <div className="footer-column">
          <h5>LOCATION</h5>

          <p>Bengaluru, India</p>
          <p>Working globally</p>
        </div>

        {/* Social Vector Icons Grid */}
        <div className="footer-social">

          <a href="https://wa.me/qr/5ZS2CQIYHATWE1" aria-label="WhatsApp">
            <FaWhatsapp />
          </a>

          <a href="https://www.instagram.com/milestone_digitalmarketing?igsh=MXA3ZzRpZXVpZjNnZA==" aria-label="Instagram">
            <FaInstagram />
          </a>

          <a href="https://www.linkedin.com/in/milestone-digital-marketing" aria-label="LinkedIn">
            <FaLinkedinIn />
          </a>

        </div>

      </div>

      <div className="footer-bottom">

        <p>
          © {new Date().getFullYear()} MileStone Digital Marketing. All rights reserved.
        </p>

        <span>
          Built with growth in mind.
        </span>

      </div>

    </footer>
  );
}