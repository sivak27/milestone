import { useState, useEffect } from "react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import "./Testimonials.css";

const testimonials = [
  {
    quote:
      "He didn't just build us a website — he gave us a way to grow. Six months in, we're booking more patients than ever.",
    name: "Dr. Pavana",
    company: "Akshaya Medical Centre",
  },
  {
    quote:
      "Our revenue moved from ₹1.9L to ₹3L in two months. The content strategy alone changed how the city sees us.",
    name: "Mrs. Pavithra",
    company: "Ayoham Dining",
  },
  {
    quote:
      "Strategic, sharp, and genuinely invested. Feels less like a vendor and more like a co-founder.",
    name: "Inversa Technosoft",
    company: "Leadership",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const item = testimonials[current];

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 120 : -120,
      opacity: 0,
    }),

    center: {
      x: 0,
      opacity: 1,
    },

    exit: (direction) => ({
      x: direction > 0 ? -120 : 120,
      opacity: 0,
    }),
  };

  return (
    <section className="testimonials">
      <div className="testimonials-container">
        <div className="testimonials-top">
          <div>
            <p className="eyebrow">IN THEIR WORDS</p>

            <h2 className="testimonial-title">
              Founders, in <span>their own words.</span>
            </h2>
          </div>

          <div className="testimonial-nav">
            <button onClick={prev}>
              <ChevronLeft size={18} />
            </button>

            <button onClick={next}>
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              duration: 0.55,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="testimonial-card"
          >
            <Quote className="quote-icon" size={48} />

            <p className="testimonial-text">
              "{item.quote}"
            </p>

            <div className="testimonial-author">
              <div className="avatar">
                {item.name.charAt(0)}
              </div>

              <div>
                <h4>{item.name}</h4>
                <span>{item.company}</span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="testimonial-dots">
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={current === i ? "active" : ""}
              onClick={() => {
                setDirection(i > current ? 1 : -1);
                setCurrent(i);
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}