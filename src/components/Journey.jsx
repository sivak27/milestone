import React from 'react';
import './Journey.css';

const journeySteps = [
  {
    id: '01',
    title: 'Discover',
    subtitle: 'AUDIT',
    description: 'Deep dive into your business, market, funnel, and competitors. Find the leak; find the lever.',
    isHigh: false, 
  },
  {
    id: '02',
    title: 'Map',
    subtitle: 'STRATEGY',
    description: 'Translate insight into a 90-day roadmap with channels, content, and milestones.',
    isHigh: true,
  },
  {
    id: '03',
    title: 'Build',
    subtitle: 'EXECUTION',
    description: 'Ship the website, campaigns, content, and tracking — fast and to a high bar.',
    isHigh: false,
  },
  {
    id: '04',
    title: 'Scale',
    subtitle: 'OPTIMIZATION',
    description: 'Measure weekly. Double down on what compounds. Cut what doesn\'t. Repeat.',
    isHigh: true,
  }
];

const JourneyTimeline = () => {
  return (
    <section id="process"className="journey-section">
      <h2 className="journey-title">A four-act journey from audit to scale.</h2>
      
      <div className="timeline-container">
        {/* Mathematically perfectly symmetrical wave */}
        <div className="svg-container">
          <svg preserveAspectRatio="none" viewBox="0 0 1000 100" className="dashed-wave">
            <path 
              d="M 0,50 Q 62.5,100 125,100 T 250,50 T 375,0 T 500,50 T 625,100 T 750,50 T 875,0 T 1000,50" 
              fill="none" 
              stroke="#94a3b8" 
              strokeWidth="2.5" 
              strokeDasharray="8, 8"
              vectorEffect="non-scaling-stroke" 
            />
          </svg>
        </div>

        <div className="nodes-wrapper">
          {journeySteps.map((step) => (
            <div 
              key={step.id} 
              className={`timeline-node ${step.isHigh ? 'node-high' : 'node-low'}`}
            >
              <div className="node-content">
                <h3 className="node-title">{step.title}</h3>
                <h4 className="node-subtitle">{step.subtitle}</h4>
                <p className="node-description">{step.description}</p>
              </div>
              <div className="node-circle">
                {step.id}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JourneyTimeline;