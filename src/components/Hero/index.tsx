import PlayButton from "./play-button";

export default function Hero() {
  return (
    <section className="hero min-h-screen py-20">
      <div className="hero-background"></div>

      <div className="floating-elements">
        <div className="floating-element"></div>
        <div className="floating-element"></div>
        <div className="floating-element"></div>
      </div>

      <div className="hero-content">
        {/* <h1 className="hero-title">Transform Your Vision Into Reality</h1> */}
        <h1 className="hero-title my-12">
          Improving Lives through <span className="">Responsible</span>
          <br />
          Business
        </h1>
        {/* <p className="hero-subtitle">
          Discover innovative solutions that push boundaries and create
          extraordinary experiences. Join thousands who have already embarked on
          this transformative journey.
        </p> */}

        <PlayButton />
      </div>
    </section>
  );
}
