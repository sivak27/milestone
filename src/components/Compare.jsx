import React from "react";
import { X, Check } from "lucide-react";
import "./Compare.css"; // Link your standalone CSS stylesheet

export default function ComparisonSection() {
  const tableData = [
    {
      metric: "Communication",
      freelancer: "Ghosting mid-project, slow response times, poor clarity",
      partner: "Dedicated Slack channel, daily status updates, guaranteed 2-hour response"
    },
    {
      metric: "Strategy & Vision",
      freelancer: "Order-taker mindset. Only builds exactly what you explicitly write down",
      partner: "Proactive growth architectural mapping focused entirely on ROI metrics"
    },
    {
      metric: "Reliability",
      freelancer: "Missed delivery deadlines due to unannounced personal emergencies",
      partner: "Contractually backed launch targets, zero excuses execution policies"
    },
    {
      metric: "Execution Depth",
      freelancer: "Surface-level design updates without underlying technical optimizations",
      partner: "Full-stack overhaul including SEO mechanics, speed boosts, and sales funnels"
    }
  ];

  return (
    <section className="compare">
      <div className="compare-container">
        
        <div className="compare-eyebrow">The Alternative</div>
        <h2 className="compare-title">
          Why businesses upgrade from standard execution to a <span>Growth Partner.</span>
        </h2>

        {/* Structured Floating Table Framework */}
        <div className="compare-table-frame">
          
          {/* Header Row Descriptor */}
          <div className="compare-header">
            <div>Core Metric</div>
            <div>Typical Freelancer</div>
            <div className="partner-glow-header">MileStone Digital Marketing</div>
          </div>

          {/* Mapping rows out as separate modular card elements */}
          {tableData.map((row, index) => (
            <div key={index} className="floating-row-card">
              
              <div className="compare-label">{row.metric}</div>
              
              {/* Freelancer segment container */}
              <div className="compare-cell freelancer-cell-target">
                <X size={16} style={{ flexShrink: 0 }} />
                <span>{row.freelancer}</span>
              </div>
              
              {/* Partner segment container */}
              <div className="compare-cell partner-cell-target">
                <Check size={16} style={{ flexShrink: 0 }} />
                <span>{row.partner}</span>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}