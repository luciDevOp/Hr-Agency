import React, { useState, useEffect } from "react";
import Footer from "../../components/Footer";
import MyPDFViewer from "../../pdf/pdf";
import SwiperComponent from "./SwiperComponent";

import Container from '@mui/material/Container';
import MainContent from './blog_components/MainContent';
import Latest from './blog_components/Latest';
// zip -r 1.zip .
function Blog() {
  return (
        <div data-aos="fade-up">
          <div className="section-title blog-header" data-aos="fade-up">
            <h2>People for People</h2>
          </div>
          <section id="hero-slider" className="hero-slider" style={{ marginBottom: '0px', paddingBottom: '0px' }}>
            <div className="container-md" data-aos="fade-in">
              <div className="row">
                <SwiperComponent />
              </div>
            </div>
          </section>
          <Container
            maxWidth="lg"
            component="main"
            sx={{ display: 'flex', flexDirection: 'column', my: 16, gap: 4 }}
          >
            <MainContent />
            <Latest />
          </Container>
            <MyPDFViewer />
            <Footer />
        </div>
  );
}

export default Blog;
