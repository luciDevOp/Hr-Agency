
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

function SwiperComponent(){
    return (
        <div className="col-12">
            <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            autoplay={{ autoplay: true }}
            >
            <SwiperSlide>
                <div
                className="img-bg d-flex align-items-end"
                style={{
                    backgroundImage: `url('assets/img/post-slide-1.png')`,
                    backgroundSize: "80%",
                }}
                >
                <div className="img-bg-inner">
                    <h2 style={{ color: "#fff" }}>
                    Swiss Chamber of Commerce
                    </h2>
                    <a href="https://www.ccer.ro" style={{ color: "#fff" }}>
                    Visit Site
                    </a>
                </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div
                className="img-bg d-flex align-items-end"
                style={{
                    backgroundImage: `url('assets/img/nrcc.png')`,
                    backgroundSize: "60%",
                }}
                >
                <div className="img-bg-inner">
                    <h2 style={{ color: "#fff" }}>
                    Netherlands Romanian Chamber of Commerce
                    </h2>
                    <a href="https://www.nrcc.ro" style={{ color: "#fff" }}>
                    Visit Site
                    </a>
                </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div
                className="img-bg d-flex align-items-end"
                style={{
                    backgroundImage: `url('assets/img/post-slide-3.jpg')`,
                    backgroundSize: "50%",
                }}
                >
                <div className="img-bg-inner">
                    <h2 style={{ color: "#fff" }}>
                    British Romanian Chamber of Commerce
                    </h2>
                    <a href="https://brcconline.eu" style={{ color: "#fff" }}>
                    Visit Site
                    </a>
                </div>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <div
                className="img-bg d-flex align-items-end"
                style={{
                    backgroundImage: `url('assets/img/post-slide-4.jpg')`,
                    backgroundSize: "40%",
                }}
                >
                <div className="img-bg-inner">
                    <h2 style={{ color: "#fff" }}>
                    Romanian Diversity Chamber of Commerce
                    </h2>
                    <a href="https://www.rdcc.ro" style={{ color: "#fff" }}>
                    Visit Site
                    </a>
                </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div
                className="img-bg d-flex align-items-end"
                style={{
                    backgroundImage: `url('assets/img/post-slide-4.png')`,
                    backgroundSize: "40%",
                }}
                >
                <div className="img-bg-inner">
                    <h2 style={{ color: "#fff" }}>
                    Professional Women Network Romania
                    </h2>
                    <a
                    href="https://pwnbucharest.net"
                    style={{ color: "#fff" }}
                    >
                    Visit Site
                    </a>
                </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div
                className="img-bg d-flex align-items-end"
                style={{
                    backgroundImage: `url('assets/img/post-slide-5.jpeg')`,
                }}
                >
                <div className="img-bg-inner">
                    <h2 style={{ color: "#fff" }}>
                    Deutschsprachiger Wirtschaftsklub Nord-Transilvanien
                    </h2>
                    <a href="https://www.dwnt.ro" style={{ color: "#fff" }}>
                    Visit Site
                    </a>
                </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div
                className="img-bg d-flex align-items-end"
                style={{
                    backgroundImage: `url('assets/img/post-slide-6.jpg')`,
                    backgroundSize: "70%",
                }}
                >
                <div className="img-bg-inner">
                    <h2 style={{ color: "#fff" }}>Advantage Austria</h2>
                    <a
                    href="https://www.advantageaustria.org"
                    style={{ color: "#fff" }}
                    >
                    Visit Site
                    </a>
                </div>
                </div>
            </SwiperSlide>
            </Swiper>
        </div>
    );

}
export default SwiperComponent;

