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
    image: "https://i.pinimg.com/originals/fc/4b/77/fc4b77859b2b5fb842c43421dfa045f4.jpg",
    bio: "Elena brings over a decade of experience in crafting digital experiences that merge high-end aesthetics with seamless usability. Her approach is rooted in the belief that design should be as functional as it is beautiful.\n\nPreviously leading design at top-tier agencies in London, she now shapes the visual language of our most ambitious projects, ensuring every pixel serves a purpose.",
    skills: ["UI/UX Design", "Framer", "Art Direction", "Motion"],
    experience: "10+ Years",
    projects: "85+",
    location: "London, UK",
  },
  {
    id: 2,
    name: "NaMi",
    role: "Lead Frontend Engineer",
    image: "https://image.cdn2.seaart.me/2024-01-28/cmr9f25e878c7387vutg/aa3a270cff2005961953a5d358c3eb80ab66cfca_high.webp",
    bio: "Marcus bridges the gap between intricate design and flawless execution. With a deep passion for modern web technologies, he architects scalable, performant interfaces that feel effortless to use.\n\nHis obsessive attention to detail ensures that complex animations and micro-interactions run smoothly across all devices, bringing static concepts to life.",
    skills: ["React", "TypeScript", "Next.js", "WebGL"],
    experience: "7 Years",
    projects: "60+",
    location: "Toronto, CA",
  },
  {
    id: 3,
    name: "Satoru Gojo",
    role: "Head of Strategy",
    image: "https://thfvnext.bing.com/th/id/OIP.ilowuWKtewHF40OGYanCVgHaHa?r=0&o=7&cb=thfvnextfalcon4rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
    bio: "Aisha is the analytical mind driving our creative endeavors. She specializes in untangling complex business problems and translating them into clear, actionable digital roadmaps.\n\nBy combining market research with user psychology, she ensures that every product we build not only looks exceptional but directly achieves our clients' core business objectives.",
    skills: ["Product Strategy", "User Research", "Agile", "Data Analysis"],
    experience: "8 Years",
    projects: "50+",
    location: "New York, USA",
  },
  {
    id: 4, // Must be a unique number
    name: "Naruto uzumaki",
    role: "Senior Backend Engineer",
    image: "https://www.pngplay.com/wp-content/uploads/12/Naruto-Kid-Transparent-File.png",
    bio: "David is the architect behind our robust server infrastructure. He specializes in designing secure, high-performance APIs that power our front-end experiences.\n\nWhen he isn't optimizing database queries, he's actively contributing to open-source Node.js projects.",
    skills: ["Node.js", "PostgreSQL", "AWS", "System Design"],
    experience: "6 Years",
    projects: "40+",
    location: "Seoul, KR",
  }
];

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 40 : -40,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? 40 : -40,
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
    }, 3000);

    return () => clearInterval(timer);
  }, [isHovered, currentIndex]);

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
        <div className="card-wrapper">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
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
                
                {/* Mobile/Tablet Details (Hidden on Desktop) */}
                <div className="mobile-member-info">
                  <h3>{currentMember.name}</h3>
                  <span className="role">{currentMember.role}</span>
                </div>

                <div className="social-links">
                  <a href="#" aria-label="LinkedIn" className="social-icon"><LinkedinIcon size={20} /></a>
                  <a href="#" aria-label="GitHub" className="social-icon"><GithubIcon size={20} /></a>
                  <a href="#" aria-label="Email" className="social-icon"><Mail size={20} /></a>
                </div>
              </div>

              <div className="card-right">
                {/* Desktop Details */}
                <div className="desktop-member-info">
                  <h3>{currentMember.name}</h3>
                  <span className="role">{currentMember.role}</span>
                </div>

                <div className="bio">
                  {currentMember.bio.split('\n\n').map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>

                <div className="skills-container">
                  {currentMember.skills.map((skill, idx) => (
                    <span key={idx} className="skill-chip">{skill}</span>
                  ))}
                </div>

                <div className="stats-container">
                  <div className="stat-item">
                    <span className="stat-label">Experience</span>
                    <span className="stat-value">{currentMember.experience}</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-label">Projects</span>
                    <span className="stat-value">{currentMember.projects}</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-label">Location</span>
                    <span className="stat-value">{currentMember.location}</span>
                  </div>
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