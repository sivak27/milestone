import "./Service.css";
import {
  Globe,
  Search,
  Target,
  Megaphone,
  Compass,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    desc: "Conversion-focused websites that load fast, rank, and sell.",
    metric: "+62%",
    label: "avg. conv. lift",
  },
  {
    icon: Search,
    title: "SEO",
    desc: "Technical, content, and local SEO engineered for sustained organic growth.",
    metric: "3.4×",
    label: "organic traffic",
  },
  {
    icon: Target,
    title: "Google & Meta Ads",
    desc: "Performance campaigns tuned to ROAS, not vanity impressions.",
    metric: "↓38%",
    label: "cost per lead",
  },
  {
    icon: Megaphone,
    title: "Social Media Growth",
    desc: "Content systems that build authority and a loyal audience.",
    metric: "122K",
    label: "monthly reach",
  },
  {
    icon: Compass,
    title: "Brand Strategy",
    desc: "Positioning, narrative, and identity that make you the obvious choice.",
    metric: "1",
    label: "category of one",
  },
];

export default function Services() {
  return (
    <section id="services" className="work">
      <div className="services-header">
        <div className="header-left">
          <span className="tag">WHAT I DO</span>

          <h2 className="head">
            Five disciplines.
            <span className="italic"> One growth system.</span>
          </h2>
        </div>

        <div className="header-right">
          <p className="subhead">
            Each service compounds the next. Run them in sequence and growth
            stops being a guess.
          </p>
        </div>
      </div>

      <div className="services-grid">
        {services.map((service, index) => {
          const Icon = service.icon;

          return (
            <div className="service-card" key={index}>
              <div className="top">
                <div className="icon-box">
                  <Icon size={22} />
                </div>

                <div className="metric">
                  <h3 className="metric-value">{service.metric}</h3>
                  <small className="metric-label">{service.label}</small>
                </div>
              </div>

              <h4 className="service-title">{service.title}</h4>

              <p className="service-desc">{service.desc}</p>

              <div className="line"></div>

              <span className="link">
                
              </span>
            </div>
          );
        })}

        <div className="contact-card">
          <h3 className="service-title">Need all of it?</h3>

          <p className="service-desc">Run as a managed growth partnership.</p>

          <button className="btn">Talk to me</button>
        </div>
      </div>
    </section>
  );
}