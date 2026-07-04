import "./Philosophy.css";

const before = [
  "Digitally absent",
  "No impressions or leads",
  "Inconsistent growth",
];

const after = [
  "Overall visibility",
  "Consistent leads",
  "Scalable / exponential growth",
];

export default function Philosophy() {
  return (
    <section className="philosophy">
      <div id="philosophy" className="container">

        {/* Left */}
        <div className="content">

          <span className="tag">THE PHILOSOPHY</span>

          <h1>
            Your business
            <br />
            already has
            <br />
            potential.
            <span className="italic"> I build</span>
            <br />
            <span className="italic">the road</span> to reach it.
          </h1>

          <p>
            Growth isn't a tactic — it's a sequence. Every brand I work with
            moves from invisible to chosen through a deliberate set of moves
            across web, search, and story.
          </p>

        </div>

        {/* Right */}
        <div className="comparison">

          <div className="column">
            <h4>BEFORE</h4>

            {before.map((item, index) => (
              <div className="card before-card" key={index}>
                <span className="dot gray"></span>
                {item}
              </div>
            ))}
          </div>

          <div className="column">
            <h4>AFTER</h4>

            {after.map((item, index) => (
              <div className="card after-card" key={index}>
                <span className="dot green"></span>
                {item}
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}