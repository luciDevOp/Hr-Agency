import React from 'react';
import Team from '../components/Team';
import Call from '../components/Call';
import Footer from '../components/Footer';
import Testimonials from '../components/Testimonials';

function About() {
    return (
        <section id="about" className="about">
        <div className="section-title">
          <div className='about-us'>
            <h2>About Us</h2>
          </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-md-6 info-container">
                <h2>Info Title</h2>
                <p>This is some information on the left side.</p>
                </div>
                <div class="col-md-6 info-image d-none d-md-block">
                <img src="assets/img/img-about.png" alt="Image" class="img-fluid mx-5" />
                </div>
            </div>
            </div>
            <Team />
            <Call />
            <Testimonials />
            <Footer />

    </section>
    
    );
}

export default About; 