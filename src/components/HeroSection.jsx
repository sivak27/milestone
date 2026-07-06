import React, { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Search, TrendingUp, BarChart3, ArrowUpRight } from "lucide-react";
import Logo1 from "/src/assets/1.png";
import Logo2 from "/src/assets/2.png";
import Logo3 from "/src/assets/3.png";
import Logo4 from "/src/assets/4.png";
import Logo5 from "/src/assets/5.png";

const links = [
  { href: "#philosophy", label: "Philosophy" },
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#work", label: "Work" },
  { href: "#contact", label: "Contact" },
];

function FloatingCard({ styleOverrides = {}, delay = 0, children, parallax = 20, mx, my }) {
  const tx = useTransform(mx, (v) => v * parallax);
  const ty = useTransform(my, (v) => v * parallax);

  return (
    <motion.div
      style={{ 
        x: tx, 
        y: ty,
        position: "absolute",
        backgroundColor: "rgba(255, 255, 255, 0.92)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        border: "1px solid rgba(243, 244, 246, 0.8)",
        borderRadius: "24px",
        padding: "24px",
        boxShadow: "0 16px 48px rgba(14,20,18,0.04)",
        boxSizing: "border-box",
        ...styleOverrides
      }}
      initial={{ opacity: 0, y: 35, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay, duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function HeroSection() {
  const containerRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const springX = useSpring(mx, { stiffness: 60, damping: 26 });
  const springY = useSpring(my, { stiffness: 60, damping: 26 });

  const leftX = useTransform(springX, (v) => v * 15);
  const rightX = useTransform(springX, (v) => v * -10);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    const handleMouseMove = (e) => {
      const element = containerRef.current;
      if (!element) return;
      const rect = element.getBoundingClientRect();
      mx.set(((e.clientX - rect.left) / rect.width - 0.5) * 2);
      my.set(((e.clientY - rect.top) / rect.height - 0.5) * 2);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mx, my]);

  // JAVASCRIPT SMOOTH SCROLL MECHANISM
  const handleScrollToSection = (e, targetId) => {
    e.preventDefault();
    setOpen(false); // Closes mobile menu on anchor tap
    const element = document.getElementById(targetId.toLowerCase());
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - 90; // perfectly accounts for header height

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div 
      id="home" /* Pinned target for Home */
      className="raw-font-sans"
      style={{ 
        minHeight: "100vh", 
        width: "100vw",
        backgroundColor: "#fafdfa",
        display: "flex",
        flexDirection: "column",
        justifyInbound: "center",
        alignItems: "center",
        boxSizing: "border-box",
        position: "relative",
        overflow: "hidden"
      }}
    >
      
      {/* Global CSS Style Injections */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,400&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');
        
        html {
          scroll-behavior: smooth !important;
        }

        .raw-font-sans { font-family: 'Plus Jakarta Sans', sans-serif; }
        .raw-font-serif { font-family: 'Cormorant Garamond', serif; }

        @keyframes spin-clockwise {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-counter {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }

        @keyframes marquee-left {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-33.3333%, 0, 0); }
        }

        .animate-orbit-custom-cw { animation: spin-clockwise 36s linear infinite; }
        .animate-orbit-custom-ccw { animation: spin-counter 26s linear infinite; }
        
        .marquee-container-loop {
          display: flex;
          width: max-content;
          gap: 6rem;
          animation: marquee-left 30s linear infinite;
        }
        
        .marquee-container-loop:hover {
          animation-play-state: paused;
        }

        .marquee-container-loop img {
          height: 200px;
          width: auto;
        }

        /* Combined Responsive Navbar CSS Rules */
        .app-header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          display: flex;
          flex-direction: column;
          z-index: 999;
          backdrop-filter: blur(8px);
          WebkitBackdropFilter: blur(8px);
          background: rgba(247, 250, 248, 0.45);
          border-bottom: 1px solid rgba(0, 0, 0, 0.05);
          transition: 0.35s;
        }

        .app-header.scrolled {
          backdrop-filter: blur(18px);
          WebkitBackdropFilter: blur(18px);
          background: rgba(247, 250, 248, 0.88);
        }

        .nav-container {
          width: 100%;
          max-width: 1440px;
          margin: auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 14px 80px;
          height: 90px;
          box-sizing: border-box;
        }

        .desktop-menu-wrapper {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          align-items: center;
          gap: 4px;
          background: white;
          padding: 8px 24px;
          border-radius: 9999px;
          border: 1px solid #e7ebe7;
          box-shadow: 0 10px 30px rgba(0,0,0,0.03);
        }

        .desktop-menu-wrapper a {
          font-size: 15px;
          font-weight: 500;
          color: #52525b;
          text-decoration: none;
          padding: 6px 18px;
          border-radius: 9999px;
          transition: all 0.3s;
        }

        .desktop-menu-wrapper a:hover {
          background: #eef5ef;
          color: #000;
        }

        .call-btn {
          background: #101514;
          color: white;
          padding: 10px 24px;
          border-radius: 9999px;
          font-weight: 600;
          font-size: 15px;
          text-decoration: none;
          transition: 0.3s;
        }

        .call-btn:hover {
          transform: translateY(-2px);
        }

        .menu-btn {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
        }

        .menu-btn span {
          display: block;
          width: 28px;
          height: 2px;
          background: #111;
          margin: 6px 0;
          transition: 0.3s;
        }

        .mobile-menu {
          display: none;
        }

        @media(max-width: 900px) {
          .nav-container {
            padding: 14px 40px;
          }
          .desktop-menu-wrapper,
          .call-btn {
            display: none;
          }
          .menu-btn {
            display: block;
          }
          .mobile-menu {
            display: flex;
            flex-direction: column;
            background: white;
            overflow: hidden;
            max-height: 0;
            transition: 0.4s;
            border-top: 1px solid #ececec;
            width: 100vw;
          }
          .mobile-menu.show {
            max-height: 600px;
            padding: 5px 40px 30px;
          }
          .mobile-menu a {
            padding: 22px 0;
            font-size: 18px;
            color: #222;
            text-decoration: none;
            border-bottom: 1px solid #ececec;
          }
          .mobile-btn {
            margin-top: 18px;
            background: #101514;
            color: white !important;
            text-align: center;
            border-radius: 9999px;
            padding: 14px;
            font-weight: 600;
            border: none !important;
          }
        }

        @media(max-width: 500px) {
          .nav-container {
            padding: 14px 20px;
          }
          .mobile-menu.show {
            padding: 5px 20px 30px;
          }
          .mobile-menu a {
            font-size: 22px;
          }
        }
      `}</style>
      
      {/* Grid Overlay */}
      <div 
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.04,
          pointerEvents: "none",
          backgroundImage: "linear-gradient(to right, #0E1412 1px, transparent 1px), linear-gradient(to bottom, #0E1412 1px, transparent 1px)",
          backgroundSize: "7rem 7rem"
        }} 
      />
      
      {/* Soft Light Blur Overlay */}
      <div 
        style={{
          position: "absolute",
          top: "-15%",
          right: "-5%",
          width: "900px",
          height: "900px",
          borderRadius: "50%",
          filter: "blur(140px)",
          opacity: 0.45,
          pointerEvents: "none",
          background: "radial-gradient(circle at 60% 40%, #B7E6CE 0%, #DFF4E8 50%, transparent 75%)"
        }}
      />

      {/* REPLACED NAVBAR LAYER */}
      <header className={`app-header ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-container">
          {/* Logo */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div style={{ width: "34px", height: "34px", borderRadius: "50%", backgroundColor: "#0E1412", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "700", fontSize: "13px" }}>MS</div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontWeight: 600, fontSize: "18px", color: "#0E1412", letterSpacing: "0.01em", lineHeight: 1 }}>MileStone</span>
              <span style={{ fontSize: "8px", color: "#9ca3af", fontWeight: "700", letterSpacing: "0.22em", textTransform: "uppercase", marginTop: "5px", lineHeight: 1 }}>EST. 2026</span>
            </div>
          </div>

          {/* Desktop Navigation Menu */}
          <nav className="desktop-menu-wrapper">
            <a href="#home" onClick={(e) => handleScrollToSection(e, "home")}>Home</a>
            {links.map((item) => (
              <a 
                key={item.href} 
                href={item.href}
                onClick={(e) => handleScrollToSection(e, item.label)}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop Action Button */}
          <a href="#contact" onClick={(e) => handleScrollToSection(e, "contact")} className="call-btn">
            Book a call →
          </a>

          {/* Mobile Hamburguer Action Trigger */}
          <button className="menu-btn" onClick={() => setOpen(!open)}>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* Mobile Flyout Drawer Strip */}
        <div className={`mobile-menu ${open ? "show" : ""}`}>
          <a href="#home" onClick={(e) => handleScrollToSection(e, "home")}>Home</a>
          {links.map((item) => (
            <a 
              key={item.href} 
              href={item.href} 
              onClick={(e) => handleScrollToSection(e, item.label)}
            >
              {item.label}
            </a>
          ))}
          <a href="#contact" className="mobile-btn" onClick={(e) => handleScrollToSection(e, "contact")}>
            Book a call
          </a>
        </div>
      </header>

      {/* STAGE CONTAINER */}
      <section className="hero-stage"
        ref={containerRef} 
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "1440px",
          padding: "160px 80px 80px 80px",
          zIndex: 10,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          boxSizing: "border-box"
        }}
      >
        {/* Left Side Content Area */}
        <motion.div className="hero-left" style={{ x: leftX, display: "flex", flexDirection: "column", alignItems: "flex-start", width: "50%", boxSizing: "border-box" }}>
          
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", backgroundColor: "#edf7ed", border: "1px solid #d2ebd2", padding: "5px 14px", borderRadius: "9999px", fontSize: "10px", fontWeight: "700", color: "#1e5631", marginBottom: "28px", letterSpacing: "0.06em" }}>
            <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#10b981" }} />
            AVAILABLE FOR Q3 — 2 SPOTS LEFT
          </div>

          <div>
            <h1 
              className="raw-font-serif hero-title" 
              style={{ 
                fontSize: "76px", 
                fontWeight: 400, 
                color: "#0E1412", 
                letterSpacing: "-0.01em", 
                margin: 0, 
                lineHeight: "1.02",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start"
              }}
            >
              <span style={{ display: "block" }}>Not Just</span>
              <span style={{ display: "block", fontStyle: "italic", color: "#9ca3af", fontWeight: "normal" }}>Marketing.</span>
              <span style={{ display: "block" }}>I Build</span>
              <span style={{ display: "block" }}>Growth</span>
              <span style={{ position: "relative", display: "inline-block", zIndex: 10, marginTop: "6px" }}>
                Journeys.
                <span style={{ position: "absolute", bottom: "4px", left: 0, width: "102%", height: "12px", backgroundColor: "#e2f3e2", zIndex: -1, borderRadius: "9999px" }} />
              </span>
            </h1>

            <p style={{ marginTop: "28px", maxWidth: "460px", color: "#71717a", fontSize: "17px", lineHeight: "1.65", margin: "28px 0 0 0" }}>
              Helping businesses become <span style={{ color: "#000", fontWeight: 500, borderBottom: "1px solid #e4e4e7", paddingBottom: "2px" }}>visible</span>,{" "}
              <span style={{ color: "#000", fontWeight: 500, borderBottom: "1px solid #e4e4e7", paddingBottom: "2px" }}>trusted</span>, and{" "}
              <span style={{ color: "#000", fontWeight: 500, borderBottom: "1px solid #e4e4e7", paddingBottom: "2px" }}>chosen</span> through websites, SEO, content, and performance marketing.
            </p>
          </div>

          <div style={{ marginTop: "36px", display: "flex", alignItems: "center", gap: "16px" }}>
            <a href="#work" onClick={(e) => handleScrollToSection(e, "work")} style={{ backgroundColor: "#0E1412", color: "#fff", padding: "14px 24px", borderRadius: "9999px", fontSize: "15px", fontWeight: 500, textDecoration: "none", display: "flex", alignItems: "center", gap: "8px", boxShadow: "0 4px 12px rgba(0,0,0,0.05)" }}>
              See growth stories <ArrowUpRight style={{ width: "15px", height: "15px" }} />
            </a>
            <a href="#contact" onClick={(e) => handleScrollToSection(e, "contact")} style={{ backgroundColor: "#fff", color: "#0E1412", padding: "14px 24px", borderRadius: "9999px", fontSize: "15px", fontWeight: 500, textDecoration: "none", border: "1px solid #e4e4e7" }}>
              Book a call
            </a>
          </div>

          {/* Bottom Counters */}
          <div style={{ marginTop: "64px", display: "flex", width: "100%", maxWidth: "420px", justifyContent: "space-between", borderTop: "1px solid #f4f4f5", paddingTop: "28px" }}>
            {[
              { num: "3.5+", label: "Years building" },
              { num: "15+", label: "Brands scaled" },
              { num: "99%", label: "Client retention" },
            ].map((stat) => (
              <div key={stat.label} style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ fontSize: "28px", fontWeight: 600, color: "#0E1412", letterSpacing: "-0.02em", lineHeight: 1 }}>{stat.num}</div>
                <div style={{ fontSize: "10px", color: "#a1a1aa", marginTop: "8px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em" }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Side Cards Layer */}
        <motion.div className="hero-right"
          style={{ x: rightX, position: "relative", width: "45%", height: "540px", display: "flex", alignItems: "center", justifyContent: "center", boxSizing: "border-box" }}
        >
          <div style={{ position: "absolute", inset: 0, display: "grid", placeItems: "center", pointerEvents: "none", zIndex: 0 }}>
            <div style={{ position: "relative", width: "440px", height: "440px", borderRadius: "50%", border: "1px solid rgba(14,20,18,0.04)" }}>
              <div style={{ position: "absolute", inset: "70px", borderRadius: "50%", border: "1px solid rgba(14,20,18,0.02)" }} />
              <div style={{ position: "absolute", inset: "140px", borderRadius: "50%", border: "1px solid rgba(14,20,18,0.015)" }} />
              
              <div className="animate-orbit-custom-cw" style={{ position: "absolute", inset: 0 }}>
                <span style={{ position: "absolute", top: 0, left: "50%", transform: "translate(-50%, -50%)", width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#34d399", boxShadow: "0 2px 6px rgba(52,211,153,0.2)" }} />
              </div>
              <div className="animate-orbit-custom-ccw" style={{ position: "absolute", inset: "70px" }}>
                <span style={{ position: "absolute", top: 0, left: "50%", transform: "translate(-50%, -50%)", width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "#a1a1aa" }} />
              </div>
            </div>
          </div>

          <div style={{ position: "absolute", width: "460px", height: "480px", zIndex: 10 }}>
            <FloatingCard mx={springX} my={springY} delay={0.2} parallax={-15} styleOverrides={{ top: 0, left: 0, width: "200px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "9px", color: "#a1a1aa", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "8px" }}>
                <Search style={{ width: "12px", height: "12px" }} /> search
              </div>
              <div style={{ fontSize: "26px", fontWeight: 600, color: "#0E1412", letterSpacing: "-0.01em" }}>35x</div>
              <div style={{ marginTop: "16px", display: "flex", alignItems: "flex-end", gap: "4px", height: "45px" }}>
                {[25, 35, 25, 55, 40, 72, 85, 100].map((h, i) => (
                  <div key={i} style={{ flex: 1, borderRadius: "999px", height: `${h}%`, background: "linear-gradient(to top, rgba(163,229,201,0.5), #71cdab)" }} />
                ))}
              </div>
            </FloatingCard>

            <FloatingCard mx={springX} my={springY} delay={0.3} parallax={14} styleOverrides={{ top: "40px", right: "-20px", width: "250px" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "10px" }}>
                <span style={{ fontSize: "9px", color: "#a1a1aa", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.06em" }}>Conversions</span>
                <span style={{ backgroundColor: "#eef7ee", color: "#047857", fontWeight: 800, fontSize: "8px", letterSpacing: "0.08em", padding: "2px 8px", borderRadius: "999px" }}>LIVE</span>
              </div>
              <div style={{ fontSize: "26px", fontWeight: 600, color: "#0E1412", letterSpacing: "-0.01em" }}>2,841</div>
              <svg viewBox="0 0 200 55" style={{ width: "100%", marginTop: "14px", overflow: "visible" }}>
                <defs>
                  <linearGradient id="chartCanvasFillRef" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#7CC7A5" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#7CC7A5" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path d="M0,45 L20,38 L40,41 L60,25 L80,29 L100,18 L120,22 L140,10 L160,14 L180,5 L200,2 L200,55 L0,55 Z" fill="url(#chartCanvasFillRef)" />
                <path d="M0,45 L20,38 L40,41 L60,25 L80,29 L100,18 L120,22 L140,10 L160,14 L180,5 L200,2" fill="none" stroke="#121815" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </FloatingCard>

            <FloatingCard mx={springX} my={springY} delay={0.4} parallax={-10} styleOverrides={{ bottom: "10px", left: "20px", width: "230px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "9px", color: "#a1a1aa", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "8px" }}>
                <BarChart3 style={{ width: "12px", height: "12px" }} /> Monthly leads
              </div>
              <div style={{ fontSize: "26px", fontWeight: 600, color: "#0E1412", letterSpacing: "-0.01em" }}>+60%</div>
              <div style={{ marginTop: "14px", height: "6px", borderRadius: "999px", backgroundColor: "#f4f4f5", overflow: "hidden" }}>
                <div style={{ height: "100%", backgroundColor: "#0E1412", borderRadius: "999px", width: "60%" }} />
              </div>
            </FloatingCard>

            <FloatingCard mx={springX} my={springY} delay={0.5} parallax={10} styleOverrides={{ bottom: "100px", right: "0px", padding: "14px 18px", width: "150px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "13px", fontWeight: 500 }}>
                <TrendingUp style={{ width: "15px", height: "15px", color: "#10b981" }} />
                <span style={{ color: "#424242", fontSize: "11px" }}>CAC <span style={{ color: "#047857", fontWeight: "700" }}>↓ 38%</span></span>
              </div>
            </FloatingCard>
          </div>
        </motion.div>
      </section>

      {/* INFINITE MARQUEE STRIP */}
      <div 
        style={{
          position: "relative",
          borderTop: "1px solid rgba(14, 20, 18, 0.06)",
          borderBottom: "1px solid rgba(14, 20, 18, 0.06)",
          padding: "32px 0",
          overflow: "hidden",
          backgroundColor: "rgba(255, 255, 255, 0.4)",
          backdropFilter: "blur(8px)",
          marginTop: "30px",
          width: "100vw"
        }}
      >
        <div className="marquee-container-loop">
          {[...Array(3)].map((_, i) => (
            <div key={i} style={{ display: "flex", gap: "6rem", alignItems: "center" }}>
              {[Logo1, Logo2, Logo3, Logo4, Logo5].map((logoSrc, j) => (
                <img
                  key={j}
                  src={logoSrc}
                  alt="Brand Partner Logo"
                  style={{
                    objectFit: "contain",
                    filter: "grayscale(100%)",
                    opacity: 0.5,
                    transition: "all 0.3s ease",
                    boxSizing: "content-box"
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.filter = "grayscale(0%)";
                    e.target.style.opacity = "1";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.filter = "grayscale(100%)";
                    e.target.style.opacity = "0.5";
                  }}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      <div style={{ width: "100%", height: "40px", pointerEvents: "none" }} />
    </div>
  );
}