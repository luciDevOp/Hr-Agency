function Hero() {
  return (
    <section id="hero" className="d-flex align-items-center hero-bg">
      <div className="container hero-pad">
        <div className="row">
          <div
            className="col-lg-6 d-flex flex-column justify-content-center pt-lg-0 order-2 order-lg-1"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h1>Global reach with local knowledge</h1>
            <p className="hero-info">
              Welcome to one of Romania’s leading executive search firms, Head
              Hunting IMD. We aim to create a true people advantage for our
              clients, by finding the best fit for both the employer and the
              employee. Enjoy your browsing; we strive to make your visit lead
              to personal insight and inspiration.
            </p>
          </div>
          <div
            className="col-lg-6 d-flex flex-column justify-content-right pt-4 pt-lg-0 order-2 order-lg-1"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h1 className="IMD" style={{textAlign:'center'}}>IMD-Bucharest, Romania</h1>
            <div>
              <h2 className="best-places" style={{textAlign:'center'}}>Official Partner Romania Best Places to Work</h2>
              <div className="best-places-img">
                <img  src="assets/img/bp.png" className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Hero;
