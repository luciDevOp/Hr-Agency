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
          <div style={{ textAlign: 'center', margin: '16px 0' }}>
            <a target="_blank" rel="noopener noreferrer" href="https://listafirme.ro/head-hunting-agency-srl-32600925/">
              <img src="https://listafirme.ro/platform-static/platform-images/top5.gif" alt="firmă de top" border="0" />
            </a>
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
