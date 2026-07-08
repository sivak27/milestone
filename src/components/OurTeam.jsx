import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Mail } from "lucide-react";
import "./OurTeam.css";

// Custom SVG Icons to replace the missing Lucide brand icons
const GithubIcon = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a5.5 5.5 0 0 0-1.5-3.8 5.5 5.5 0 0 0-.2-3.8s-1.2-.4-3.9 1.4a12.8 12.8 0 0 0-7 0C6.2 1.6 5 2 5 2a5.5 5.5 0 0 0-.2 3.8A5.5 5.5 0 0 0 3 9.6c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"/>
  </svg>
);

const LinkedinIcon = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const teamData = [
  {
    id: 1,
    name: "Goku",
    role: "Design Director",
    company: "MileStone Digital Marketing",
    image: "https://i.pinimg.com/originals/fc/4b/77/fc4b77859b2b5fb842c43421dfa045f4.jpg",
    socials: { linkedin: "#", github: "#", email: "mailto:goku@milestone.com" }
  },
  {
    id: 2,
    name: "NaMi",
    role: "Lead Frontend Engineer",
    company: "MileStone Digital Marketing",
    image: "https://image.cdn2.seaart.me/2024-01-28/cmr9f25e878c7387vutg/aa3a270cff2005961953a5d358c3eb80ab66cfca_high.webp",
    socials: { linkedin: "#", github: "#", email: "mailto:nami@milestone.com" }
  },
  {
    id: 3,
    name: "Satoru Gojo",
    role: "Head of Strategy",
    company: "MileStone Digital Marketing",
    image: "https://thfvnext.bing.com/th/id/OIP.ilowuWKtewHF40OGYanCVgHaHa?r=0&o=7&cb=thfvnextfalcon4rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
    socials: { linkedin: "#", github: "#", email: "mailto:gojo@milestone.com" }
  },
  {
    id: 4,
    name: "Naruto Uzumaki",
    role: "Senior Backend Engineer",
    company: "MileStone Digital Marketing",
    image: "https://www.pngplay.com/wp-content/uploads/12/Naruto-Kid-Transparent-File.png",
    socials: { linkedin: "#", github: "#", email: "mailto:naruto@milestone.com" }
  }
];

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 50 : -50,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? 50 : -50,
    opacity: 0,
  }),
};

const Team = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex === teamData.length - 1 ? 0 : prevIndex + 1));
    }, 4000);

    return () => clearInterval(timer);
  }, [isHovered]);

  const paginate = (newDirection) => {
    setDirection(newDirection);
    if (newDirection === 1) {
      setCurrentIndex((prev) => (prev === teamData.length - 1 ? 0 : prev + 1));
    } else {
      setCurrentIndex((prev) => (prev === 0 ? teamData.length - 1 : prev - 1));
    }
  };

  const currentMember = teamData[currentIndex];

  return (
    <motion.section 
      className="team-section"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="team-header">
        <span className="top-label">OUR TEAM</span>
        <h2 className="main-heading">
          Meet the <em>people</em> behind MileStone.
        </h2>
        <p className="description">
          Behind every successful project is a team obsessed with quality, strategy, and craftsmanship.
        </p>
      </div>

      <div 
        className="team-carousel-container"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="card-wrapper" style={{ position: "relative", overflow: "hidden" }}>
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
              className="team-card"
            >
              <div className="card-left">
                <div className="image-wrapper">
                  <img 
                    src={currentMember.image} 
                    alt={`${currentMember.name} - ${currentMember.role}`} 
                    className="profile-image" 
                  />
                </div>
                
                {/* Mobile/Tablet Details */}
                <div className="mobile-member-info">
                  <h3>{currentMember.name}</h3>
                  <span className="role">{currentMember.role}</span>
                  <span className="company">{currentMember.company}</span>
                </div>

                <div className="social-links">
                  <a href={currentMember.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="social-icon">
                    <LinkedinIcon size={20} />
                  </a>
                  <a href={currentMember.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="social-icon">
                    <GithubIcon size={20} />
                  </a>
                  <a href={currentMember.socials.email} aria-label="Email" className="social-icon">
                    <Mail size={20} />
                  </a>
                </div>
              </div>

              <div className="card-right">
                {/* Desktop Details */}
                <div className="desktop-member-info">
                  <h3>{currentMember.name}</h3>
                  <span className="role">{currentMember.role}</span>
                  <span className="company">{currentMember.company}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="controls">
          <button 
            className="control-btn" 
            onClick={() => paginate(-1)}
            aria-label="Previous team member"
          >
            <ChevronLeft size={24} />
          </button>
          
          <div className="pagination-dots">
            {teamData.map((_, idx) => (
              <button
                key={idx}
                className={`dot ${idx === currentIndex ? 'active' : ''}`}
                onClick={() => {
                  setDirection(idx > currentIndex ? 1 : -1);
                  setCurrentIndex(idx);
                }}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <button 
            className="control-btn" 
            onClick={() => paginate(1)}
            aria-label="Next team member"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </motion.section>
  );
};

export default Team;