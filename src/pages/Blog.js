import React, { useEffect } from 'react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import Footer from '../components/Footer';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';


function Blog() {
  
    
    return (
        <div>
        <div className="section-title blog-header">
            <h2>People for People</h2>
        </div>
        <section id="hero-slider" class="hero-slider">
      <div class="container-md" data-aos="fade-in">
        <div class="row">
          <div class="col-12">
          <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{autoplay: true}}
    >
      <SwiperSlide>
        <div className="img-bg d-flex align-items-end" style={{ backgroundImage: `url('assets/img/post-slide-1.png')` , backgroundSize: "80%"}}>
          <div className="img-bg-inner">
            <h2 style={{color:"#fff"}}>Swiss Chamber of Commerce</h2>
            <a href='https://www.ccer.ro' style={{color:"#fff"}}>Visit Site</a>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="img-bg d-flex align-items-end" style={{ backgroundImage: `url('assets/img/nrcc.png')`, backgroundSize: "60%" }}>
          <div className="img-bg-inner">
            <h2 style={{color:"#fff"}}>Netherlands Romanian Chamber of Commerce</h2>
            <a href='https://www.nrcc.ro' style={{color:"#fff"}}>Visit Site</a>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="img-bg d-flex align-items-end" style={{ backgroundImage: `url('assets/img/post-slide-3.jpg')`,backgroundSize: "50%"}}>
          <div className="img-bg-inner">
            <h2 style={{color:"#fff"}}>British Romanian Chamber of Commerce</h2>
            <a href='https://brcconline.eu' style={{color:"#fff"}}>Visit Site</a>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="img-bg d-flex align-items-end" style={{ backgroundImage: `url('assets/img/post-slide-4.jpg')`,backgroundSize: "40%" }}>
          <div className="img-bg-inner">
            <h2 style={{color:"#fff"}}>Romanian Diversity Chamber of Commerce</h2>
            <a href='https://www.rdcc.ro' style={{color:"#fff"}}>Visit Site</a>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="img-bg d-flex align-items-end" style={{ backgroundImage: `url('assets/img/post-slide-4.png')`, backgroundSize: "40%"}}>
          <div className="img-bg-inner">
            <h2 style={{color:"#fff"}}>Professional Women Network Romania</h2>
            <a href='https://pwnbucharest.net' style={{color:"#fff"}}>Visit Site</a>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="img-bg d-flex align-items-end" style={{ backgroundImage: `url('assets/img/post-slide-5.jpeg')`}}>
          <div className="img-bg-inner">
            <h2 style={{color:"#fff"}}>Deutschsprachiger Wirtschaftsklub Nord-Transilvanien</h2>
            <a href='https://www.dwnt.ro' style={{color:"#fff"}}>Visit Site</a>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="img-bg d-flex align-items-end" style={{ backgroundImage: `url('assets/img/post-slide-6.jpg')` , backgroundSize: "70%"}}>
          <div className="img-bg-inner">
            <h2 style={{color:"#fff"}}>Advantage Austria</h2>
            <a href='https://www.advantageaustria.org' style={{color:"#fff"}}>Visit Site</a>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
          </div>
        </div>
      </div>
    </section>
        <div className="section-title blog-header">
            <h2>Events</h2>
        </div>
    <section id="posts" class="posts">
      <div class="container" data-aos="fade-up">
        <div class="row g-5">
          <div class="col-lg-4">
            <div class="post-entry-1 lg">
              <a href="/blog-event-1"><img src="assets/img/swiss.jpeg" alt="" class="img-fluid"/></a>
              <div class="post-meta"><span class="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
              <h2><a href="/blog-event-1">Swiss Chamber of Commerce</a></h2>
              <p class="mb-4 d-block">The Swiss Chamber of Commerce serves as a pivotal organization dedicated to fostering economic and business relations within Switzerland and beyond. As a key player in the business community, it aims to provide a platform for networking, collaboration, and knowledge exchange among professionals, companies, and stakeholders.</p>
            </div>

          </div>

          <div class="col-lg-8">
            <div class="row g-5">
              <div class="col-lg-6 border-start custom-border">
                <div class="post-entry-1">
                  <a href="/blog-event-2"><img src="assets/img/nrcc.jpeg" alt="" class="img-fluid"/></a>
                  <div class="post-meta"><span class="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
                  <h2><a href="/blog-event-2">Netherlands Romanian Chamber of Commerce</a></h2>
                </div>
                <div class="post-entry-1">
                  <a href="/blog-event-3"><img src="assets/img/brcc.jpeg" alt="" class="img-fluid"/></a>
                  <div class="post-meta"><span class="mx-1">&bullet;</span> <span>Jul 17th '22</span></div>
                  <h2><a href="/blog-event-3">British Romanian Chamber of Commerce</a></h2>
                </div>
                <div class="post-entry-1">
                  <a href="/blog-event-4"><img src="assets/img/dwnt.jpeg" alt="" class="img-fluid"/></a>
                  <div class="post-meta"><span class="mx-1">&bullet;</span> <span>Mar 15th '22</span></div>
                  <h2><a href="/blog-event-4">Deutschsprachiger Wirtschaftsklub Nord-Transilvanien</a></h2>
                </div>
              </div>
              <div class="col-lg-6 border-start custom-border">
                <div class="post-entry-1">
                  <a href="/blog-event-5"><img src="assets/img/pwn.jpeg" alt="" class="img-fluid"/></a>
                  <div class="post-meta"><span class="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
                  <h2><a href="/blog-event-5">Professional Women Network Romania</a></h2>
                </div>
                <div class="post-entry-1">
                  <a href="/blog-event-6"><img src="assets/img/austria.jpeg" alt="" class="img-fluid"/></a>
                  <div class="post-meta"><span class="mx-1">&bullet;</span> <span>Mar 1st '22</span></div>
                  <h2><a href="/blog-event-6">Advantage Austria</a></h2>
                </div>
                <div class="post-entry-1">
                  <a href="/blog-event-7"><img src="assets/img/diversity.jpeg" alt="" class="img-fluid"/></a>
                  <div class="post-meta"><span class="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
                  <h2><a href="/blog-event-7">Romanian Diversity Chamber of Commerce</a></h2>
                </div>
              </div>

            
             
            </div>
          </div>

        </div>
      </div>
    </section>
    <section class="category-section">
      <div class="container" data-aos="fade-up">

        <div class="section-header d-flex justify-content-between align-items-center mb-5">
          <h2>Culture</h2>
          <div><a href="category.html" class="more">See All Culture</a></div>
        </div>

        <div class="row">
          <div class="col-md-9">

            <div class="d-lg-flex post-entry-2">
              <a href="/blog-event-1" class="me-4 thumbnail mb-4 mb-lg-0 d-inline-block">
                <img src="assets/img/blog/post-landscape-6.jpg" alt="" class="img-fluid"/>
              </a>
              <div>
                <div class="post-meta"><span class="date">Culture</span> <span class="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
                <h3><a href="/blog-event-1">What is the son of Football Coach John Gruden, Deuce Gruden doing Now?</a></h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio placeat exercitationem magni voluptates dolore. Tenetur fugiat voluptates quas, nobis error deserunt aliquam temporibus sapiente, laudantium dolorum itaque libero eos deleniti?</p>
                <div class="d-flex align-items-center author">
                  <div class="photo"><img src="assets/img/blog/person-2.jpg" alt="" class="img-fluid"/></div>
                  <div class="name">
                    <h3 class="m-0 p-0">Wade Warren</h3>
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-lg-4">
                <div class="post-entry-1 border-bottom">
                  <a href="/blog-event-1"><img src="assets/img/blog/post-landscape-1.jpg" alt="" class="img-fluid"/></a>
                  <div class="post-meta"><span class="date">Culture</span> <span class="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
                  <h2 class="mb-2"><a href="/blog-event-1">11 Work From Home Part-Time Jobs You Can Do Now</a></h2>
                  <span class="author mb-3 d-block">Jenny Wilson</span>
                  <p class="mb-4 d-block">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero temporibus repudiandae, inventore pariatur numquam cumque possimus</p>
                </div>

                <div class="post-entry-1">
                  <div class="post-meta"><span class="date">Culture</span> <span class="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
                  <h2 class="mb-2"><a href="/blog-event-1">5 Great Startup Tips for Female Founders</a></h2>
                  <span class="author mb-3 d-block">Jenny Wilson</span>
                </div>
              </div>
              <div class="col-lg-8">
                <div class="post-entry-1">
                  <a href="/blog-event-1"><img src="assets/img/blog/post-landscape-2.jpg" alt="" class="img-fluid"/></a>
                  <div class="post-meta"><span class="date">Culture</span> <span class="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
                  <h2 class="mb-2"><a href="/blog-event-1">How to Avoid Distraction and Stay Focused During Video Calls?</a></h2>
                  <span class="author mb-3 d-block">Jenny Wilson</span>
                  <p class="mb-4 d-block">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero temporibus repudiandae, inventore pariatur numquam cumque possimus</p>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-3">
            <div class="post-entry-1 border-bottom">
              <div class="post-meta"><span class="date">Culture</span> <span class="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
              <h2 class="mb-2"><a href="/blog-event-1">How to Avoid Distraction and Stay Focused During Video Calls?</a></h2>
              <span class="author mb-3 d-block">Jenny Wilson</span>
            </div>

            <div class="post-entry-1 border-bottom">
              <div class="post-meta"><span class="date">Culture</span> <span class="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
              <h2 class="mb-2"><a href="/blog-event-1">17 Pictures of Medium Length Hair in Layers That Will Inspire Your New Haircut</a></h2>
              <span class="author mb-3 d-block">Jenny Wilson</span>
            </div>

            <div class="post-entry-1 border-bottom">
              <div class="post-meta"><span class="date">Culture</span> <span class="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
              <h2 class="mb-2"><a href="/blog-event-1">9 Half-up/half-down Hairstyles for Long and Medium Hair</a></h2>
              <span class="author mb-3 d-block">Jenny Wilson</span>
            </div>

            <div class="post-entry-1 border-bottom">
              <div class="post-meta"><span class="date">Culture</span> <span class="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
              <h2 class="mb-2"><a href="/blog-event-1">Life Insurance And Pregnancy: A Working Mom’s Guide</a></h2>
              <span class="author mb-3 d-block">Jenny Wilson</span>
            </div>

            <div class="post-entry-1 border-bottom">
              <div class="post-meta"><span class="date">Culture</span> <span class="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
              <h2 class="mb-2"><a href="/blog-event-1">The Best Homemade Masks for Face (keep the Pimples Away)</a></h2>
              <span class="author mb-3 d-block">Jenny Wilson</span>
            </div>

            <div class="post-entry-1 border-bottom">
              <div class="post-meta"><span class="date">Culture</span> <span class="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
              <h2 class="mb-2"><a href="/blog-event-1">10 Life-Changing Hacks Every Working Mom Should Know</a></h2>
              <span class="author mb-3 d-block">Jenny Wilson</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="category-section">
      <div class="container" data-aos="fade-up">

        <div class="section-header d-flex justify-content-between align-items-center mb-5">
          <h2>Business</h2>
          <div><a href="category.html" class="more">See All Business</a></div>
        </div>

        <div class="row">
          <div class="col-md-9 order-md-2">

            <div class="d-lg-flex post-entry-2">
              <a href="/blog-event-1" class="me-4 thumbnail d-inline-block mb-4 mb-lg-0">
                <img src="assets/img/blog/post-landscape-3.jpg" alt="" class="img-fluid"/>
              </a>
              <div>
                <div class="post-meta"><span class="date">Business</span> <span class="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
                <h3><a href="/blog-event-1">What is the son of Football Coach John Gruden, Deuce Gruden doing Now?</a></h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio placeat exercitationem magni voluptates dolore. Tenetur fugiat voluptates quas, nobis error deserunt aliquam temporibus sapiente, laudantium dolorum itaque libero eos deleniti?</p>
                <div class="d-flex align-items-center author">
                  <div class="photo"><img src="assets/img/blog/person-4.jpg" alt="" class="img-fluid"/></div>
                  <div class="name">
                    <h3 class="m-0 p-0">Wade Warren</h3>
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-lg-4">
                <div class="post-entry-1 border-bottom">
                  <a href="/blog-event-1"><img src="assets/img/blog/post-landscape-5.jpg" alt="" class="img-fluid"/></a>
                  <div class="post-meta"><span class="date">Business</span> <span class="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
                  <h2 class="mb-2"><a href="/blog-event-1">11 Work From Home Part-Time Jobs You Can Do Now</a></h2>
                  <span class="author mb-3 d-block">Jenny Wilson</span>
                  <p class="mb-4 d-block">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero temporibus repudiandae, inventore pariatur numquam cumque possimus</p>
                </div>

                <div class="post-entry-1">
                  <div class="post-meta"><span class="date">Business</span> <span class="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
                  <h2 class="mb-2"><a href="/blog-event-1">5 Great Startup Tips for Female Founders</a></h2>
                  <span class="author mb-3 d-block">Jenny Wilson</span>
                </div>
              </div>
              <div class="col-lg-8">
                <div class="post-entry-1">
                  <a href="/blog-event-1"><img src="assets/img/blog/post-landscape-7.jpg" alt="" class="img-fluid"/></a>
                  <div class="post-meta"><span class="date">Business</span> <span class="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
                  <h2 class="mb-2"><a href="/blog-event-1">How to Avoid Distraction and Stay Focused During Video Calls?</a></h2>
                  <span class="author mb-3 d-block">Jenny Wilson</span>
                  <p class="mb-4 d-block">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero temporibus repudiandae, inventore pariatur numquam cumque possimus</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="post-entry-1 border-bottom">
              <div class="post-meta"><span class="date">Business</span> <span class="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
              <h2 class="mb-2"><a href="/blog-event-1">How to Avoid Distraction and Stay Focused During Video Calls?</a></h2>
              <span class="author mb-3 d-block">Jenny Wilson</span>
            </div>

            <div class="post-entry-1 border-bottom">
              <div class="post-meta"><span class="date">Business</span> <span class="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
              <h2 class="mb-2"><a href="/blog-event-1">17 Pictures of Medium Length Hair in Layers That Will Inspire Your New Haircut</a></h2>
              <span class="author mb-3 d-block">Jenny Wilson</span>
            </div>

            <div class="post-entry-1 border-bottom">
              <div class="post-meta"><span class="date">Business</span> <span class="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
              <h2 class="mb-2"><a href="/blog-event-1">9 Half-up/half-down Hairstyles for Long and Medium Hair</a></h2>
              <span class="author mb-3 d-block">Jenny Wilson</span>
            </div>

            <div class="post-entry-1 border-bottom">
              <div class="post-meta"><span class="date">Business</span> <span class="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
              <h2 class="mb-2"><a href="/blog-event-1">Life Insurance And Pregnancy: A Working Mom’s Guide</a></h2>
              <span class="author mb-3 d-block">Jenny Wilson</span>
            </div>

            <div class="post-entry-1 border-bottom">
              <div class="post-meta"><span class="date">Business</span> <span class="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
              <h2 class="mb-2"><a href="/blog-event-1">The Best Homemade Masks for Face (keep the Pimples Away)</a></h2>
              <span class="author mb-3 d-block">Jenny Wilson</span>
            </div>

            <div class="post-entry-1 border-bottom">
              <div class="post-meta"><span class="date">Business</span> <span class="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
              <h2 class="mb-2"><a href="/blog-event-1">10 Life-Changing Hacks Every Working Mom Should Know</a></h2>
              <span class="author mb-3 d-block">Jenny Wilson</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="category-section">
      <div class="container" data-aos="fade-up">

        <div class="section-header d-flex justify-content-between align-items-center mb-5">
          <h2>Lifestyle</h2>
          <div><a href="category.html" class="more">See All Lifestyle</a></div>
        </div>

        <div class="row g-5">
          <div class="col-lg-4">
            <div class="post-entry-1 lg">
              <a href="/blog-event-1"><img src="assets/img/blog/post-landscape-8.jpg" alt="" class="img-fluid"/></a>
              <div class="post-meta"><span class="date">Lifestyle</span> <span class="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
              <h2><a href="/blog-event-1">11 Work From Home Part-Time Jobs You Can Do Now</a></h2>
              <p class="mb-4 d-block">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero temporibus repudiandae, inventore pariatur numquam cumque possimus exercitationem? Nihil tempore odit ab minus eveniet praesentium, similique blanditiis molestiae ut saepe perspiciatis officia nemo, eos quae cumque. Accusamus fugiat architecto rerum animi atque eveniet, quo, praesentium dignissimos</p>

              <div class="d-flex align-items-center author">
                <div class="photo"><img src="assets/img/blog/person-7.jpg" alt="" class="img-fluid"/></div>
                <div class="name">
                  <h3 class="m-0 p-0">Esther Howard</h3>
                </div>
              </div>
            </div>

            <div class="post-entry-1 border-bottom">
              <div class="post-meta"><span class="date">Lifestyle</span> <span class="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
              <h2 class="mb-2"><a href="/blog-event-1">The Best Homemade Masks for Face (keep the Pimples Away)</a></h2>
              <span class="author mb-3 d-block">Jenny Wilson</span>
            </div>

            <div class="post-entry-1">
              <div class="post-meta"><span class="date">Lifestyle</span> <span class="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
              <h2 class="mb-2"><a href="/blog-event-1">10 Life-Changing Hacks Every Working Mom Should Know</a></h2>
              <span class="author mb-3 d-block">Jenny Wilson</span>
            </div>

          </div>

          <div class="col-lg-8">
            <div class="row g-5">
              <div class="col-lg-4 border-start custom-border">
                <div class="post-entry-1">
                  <a href="/blog-event-1"><img src="assets/img/blog/post-landscape-6.jpg" alt="" class="img-fluid"/></a>
                  <div class="post-meta"><span class="date">Lifestyle</span> <span class="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
                  <h2><a href="/blog-event-1">Let’s Get Back to Work, New York</a></h2>
                </div>
                <div class="post-entry-1">
                  <a href="/blog-event-1"><img src="assets/img/blog/post-landscape-5.jpg" alt="" class="img-fluid"/></a>
                  <div class="post-meta"><span class="date">Lifestyle</span> <span class="mx-1">&bullet;</span> <span>Jul 17th '22</span></div>
                  <h2><a href="/blog-event-1">How to Avoid Distraction and Stay Focused During Video Calls?</a></h2>
                </div>
                <div class="post-entry-1">
                  <a href="/blog-event-1"><img src="assets/img/blog/post-landscape-4.jpg" alt="" class="img-fluid"/></a>
                  <div class="post-meta"><span class="date">Lifestyle</span> <span class="mx-1">&bullet;</span> <span>Mar 15th '22</span></div>
                  <h2><a href="/blog-event-1">Why Craigslist Tampa Is One of The Most Interesting Places On the Web?</a></h2>
                </div>
              </div>
              <div class="col-lg-4 border-start custom-border">
                <div class="post-entry-1">
                  <a href="/blog-event-1"><img src="assets/img/blog/post-landscape-3.jpg" alt="" class="img-fluid"/></a>
                  <div class="post-meta"><span class="date">Lifestyle</span> <span class="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
                  <h2><a href="/blog-event-1">6 Easy Steps To Create Your Own Cute Merch For Instagram</a></h2>
                </div>
                <div class="post-entry-1">
                  <a href="/blog-event-1"><img src="assets/img/blog/post-landscape-2.jpg" alt="" class="img-fluid"/></a>
                  <div class="post-meta"><span class="date">Lifestyle</span> <span class="mx-1">&bullet;</span> <span>Mar 1st '22</span></div>
                  <h2><a href="/blog-event-1">10 Life-Changing Hacks Every Working Mom Should Know</a></h2>
                </div>
                <div class="post-entry-1">
                  <a href="/blog-event-1"><img src="assets/img/blog/post-landscape-1.jpg" alt="" class="img-fluid"/></a>
                  <div class="post-meta"><span class="date">Lifestyle</span> <span class="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
                  <h2><a href="/blog-event-1">5 Great Startup Tips for Female Founders</a></h2>
                </div>
              </div>
              <div class="col-lg-4">

                <div class="post-entry-1 border-bottom">
                  <div class="post-meta"><span class="date">Lifestyle</span> <span class="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
                  <h2 class="mb-2"><a href="/blog-event-1">How to Avoid Distraction and Stay Focused During Video Calls?</a></h2>
                  <span class="author mb-3 d-block">Jenny Wilson</span>
                </div>

                <div class="post-entry-1 border-bottom">
                  <div class="post-meta"><span class="date">Lifestyle</span> <span class="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
                  <h2 class="mb-2"><a href="/blog-event-1">17 Pictures of Medium Length Hair in Layers That Will Inspire Your New Haircut</a></h2>
                  <span class="author mb-3 d-block">Jenny Wilson</span>
                </div>

                <div class="post-entry-1 border-bottom">
                  <div class="post-meta"><span class="date">Lifestyle</span> <span class="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
                  <h2 class="mb-2"><a href="/blog-event-1">9 Half-up/half-down Hairstyles for Long and Medium Hair</a></h2>
                  <span class="author mb-3 d-block">Jenny Wilson</span>
                </div>

                <div class="post-entry-1 border-bottom">
                  <div class="post-meta"><span class="date">Lifestyle</span> <span class="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
                  <h2 class="mb-2"><a href="/blog-event-1">Life Insurance And Pregnancy: A Working Mom’s Guide</a></h2>
                  <span class="author mb-3 d-block">Jenny Wilson</span>
                </div>

                <div class="post-entry-1 border-bottom">
                  <div class="post-meta"><span class="date">Lifestyle</span> <span class="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
                  <h2 class="mb-2"><a href="/blog-event-1">The Best Homemade Masks for Face (keep the Pimples Away)</a></h2>
                  <span class="author mb-3 d-block">Jenny Wilson</span>
                </div>

                <div class="post-entry-1 border-bottom">
                  <div class="post-meta"><span class="date">Lifestyle</span> <span class="mx-1">&bullet;</span> <span>Jul 5th '22</span></div>
                  <h2 class="mb-2"><a href="/blog-event-1">10 Life-Changing Hacks Every Working Mom Should Know</a></h2>
                  <span class="author mb-3 d-block">Jenny Wilson</span>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
        <Footer />
    </div>
    );
}

export default Blog;