import "./process.css";
import { ArrowUpRight } from "lucide-react";

const cases = [
  {
    name: "Akshaya Medical Centre",
    tag: "Healthcare · Local growth",
    start:
      "A trusted clinic with strong word-of-mouth but invisible online — no leads from search, weak GMB presence.",
    action:
      "Built a high-intent local SEO engine, redesigned the website around appointments, and produced patient-education content that ranked.",
    result: [
      { k: "Instagram views", v: "52K+" },
      { k: "Monthly reach", v: "122K" },
      { k: "Qualified leads", v: "89" },
      { k: "GMB views", v: "5.5K" },
      { k: "Direction requests", v: "+422%" },
    ],
    next:
      "Launching a paid acquisition layer for specialty consultations.",
  },
  {
    name: "Ayoham Dining",
    tag: "F&B · Revenue scaling",
    start:
      "Beautiful restaurant, low monthly revenue, no consistent channel for bookings.",
    action:
      "Repositioned the brand, ran a content-first Meta strategy, and built a reservation funnel that actually converts.",
    result: [
      { k: "Monthly revenue", v: "₹1.9L → ₹3L" },
      { k: "Content views", v: "363K" },
      { k: "Lift", v: "+58%" },
    ],
    next:
      "Expanding to a second outlet with the same playbook.",
  },
  {
    name: "Gainz Cafe",
    tag: "F&B · Community-led growth",
    start:
      "Niche fitness cafe with a loyal but small audience. Sales had plateaued.",
    action:
      "Built a community-driven content engine and a loyalty-led offer system that turned regulars into evangelists.",
    result: [
      { k: "Sales growth", v: "+60%" },
      { k: "Repeat rate", v: "+34%" },
    ],
    next:
      "Productizing meal-plans as a subscription.",
  },
  {
    name: "Inversa Technosoft",
    tag: "B2B SaaS · Web transformation",
    start:
      "Outdated site that didn't reflect the team's technical depth. Low trust, low inbound.",
    action:
      "Complete brand & website rebuild with a story-driven structure and technical SEO foundation.",
    result: [
      { k: "Inbound demos", v: "+3.2×" },
      { k: "Bounce", v: "-41%" },
    ],
    next:
      "Launching content for enterprise buyer journey.",
  },
  {
    name: "Nandaki Ayur",
    tag: "Wellness · Brand + SEO",
    start:
      "Authentic Ayurveda practice with no digital identity to match its craft.",
    action:
      "Designed a brand system rooted in calm authority. Stood up SEO + content engine for treatment pages.",
    result: [
      { k: "Organic traffic", v: "4.6×" },
      { k: "Treatment enquiries", v: "+212%" },
    ],
    next:
      "Productizing wellness retreats with paid amplification.",
  },
];

export default function CaseStudies() {
  return (
    <section className="case-studies" id="work">
      <div className="case-overlay"></div>

      <div className="case-container">
        <div className="case-header">
          <div>
            <span className="case-tag">
              Client transformations
            </span>

            <h2 className="case-title">
              Real businesses.
              <span className="case-italic">
                {" "}
                Real numbers.
              </span>{" "}
              Real stories.
            </h2>
          </div>

          <p className="case-description">
            Five featured journeys — each measured,
            documented, and still compounding today.
          </p>
        </div>

        <div className="case-list">
          {cases.map((item, index) => (
            <article className="case-card" key={index}>
              <div className="case-grid">

                <div className="case-left">
                  <span className="case-category">
                    {item.tag}
                  </span>

                  <h3>{item.name}</h3>

                  <span className="case-number">
                    CASE · 0{index + 1}
                  </span>
                </div>

                <div className="case-right">

                  <CaseRow
                    label="Start"
                    text={item.start}
                  />

                  <CaseRow
                    label="Action"
                    text={item.action}
                  />

                  <div className="case-result">

                    <span className="case-result-title">
                      Result
                    </span>

                    <div className="result-grid">
                      {item.result.map((result, i) => (
                        <div className="result-card" key={i}>
                          <h4>{result.v}</h4>
                          <span>{result.k}</span>
                        </div>
                      ))}
                    </div>

                  </div>

                  <CaseRow
                    label="Next"
                    text={item.next}
                  />

                </div>

              </div>
            </article>
          ))}
        </div>

        <div className="case-footer">
          <a href="#contact">
            Want a story like these? Let's talk
            <ArrowUpRight size={18} />
          </a>
        </div>

      </div>
    </section>
  );
}

function CaseRow({ label, text }) {
  return (
    <div className="case-row">
      <span className="case-label">
        {label}
      </span>

      <p>{text}</p>
    </div>
  );
}