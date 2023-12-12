const Contact = () => {
    const myStyle = {
        border: "0", 
        width: "100%", 
        height: "290px", 
    }
    return (
        <section id="contact" className="contact">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Contact</h2>
          <p>Ready to take the next step toward optimizing your workforce and achieving business excellence? Explore the tailored solutions we offer at Head Hunting. For more information or to initiate a conversation, please find our contact details below. We look forward to connecting with you and partnering on your journey<br /> to strategic talent acquisition and organizational success.</p>
        </div>

        <div className="row">

          <div className="col-lg-4 d-flex align-items-stretch">
            <div className="info">
              <div className="address">
                <i className="bi bi-geo-alt"></i>
                <h4>Location:</h4>
                <p>22D, Sfantul Pantelimon Street, 077145, Pantelimon, Ilfov, Romania</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 d-flex align-items-stretch">
            <div className="info">
            <div className="phone">
                <i className="bi bi-phone"></i>
                <h4>Call:</h4>
                <p>+40 (731) 002 820</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 d-flex align-items-stretch">
            <div className="info">
            <div className="email">
                <i className="bi bi-envelope"></i>
                <h4>Email:</h4>
                <p>loreda.dragomir@hha.ro</p>
              </div>
            </div>
          </div>
        </div>
              

        <div className="row py-5">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.2814219715224!2d26.21725755163565!3d44.447900296723795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1fbdaeb13e0e5%3A0xacc9a7f708809c5f!2sStrada%20Sf%C3%A2ntul%20Pantelimon%2022d%2C%20Pantelimon%20077145!5e0!3m2!1sro!2sro!4v1702393299059!5m2!1sro!2sro" width="470" height="300" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>    

          

          

          <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
            <img src="" />
          </div>

        </div>

    </section>
    );
};

export default Contact;