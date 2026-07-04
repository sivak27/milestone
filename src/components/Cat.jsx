import "./Cat.css";

import { ArrowUpRight } from "lucide-react";

export default function CAT() {

  const particles = Array.from({ length: 48 }, (_, i) => ({
    x: (i * 37) % 100,
    y: (i * 53) % 100,
    s: ((i * 13) % 4) + 1,
  }));

  return (
    <section className="cta" id="contact">

      <div className="cta-bg">

        <div className="cta-glow"></div>

        {particles.map((p, index) => (
          <span
            key={index}
            className="particle"
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: `${p.s}px`,
              height: `${p.s}px`,
            }}
          />
        ))}

      </div>

      <div className="cta-container">

        <span className="cta-chip">
          OPEN FOR NEW PARTNERSHIPS
        </span>

        <h2 className="cta-title">
          Your growth story
          <span className="cta-italic">
            {" "}could be next.
          </span>
        </h2>

        <p className="cta-text">
          Every business starts somewhere. The brands above
          were once exactly where you are. Let's map the
          road from here.
        </p>

        <div className="cta-buttons">

          <a href="#" className="cta-primary">
            Start your journey
            <ArrowUpRight size={18}/>
          </a>

          <a href="#work" className="cta-secondary">
            View case studies
          </a>

        </div>

      </div>

    </section>
  );
}