import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Home() {

  return (

    <React.Fragment>

      <div className="container-fluid p-0 overflow-hidden">

        {/* ================= SLIDER ================= */}

        <Swiper
          modules={[
            Navigation,
            Pagination,
            Scrollbar,
            A11y,
            Autoplay,
          ]}
          autoplay={{ delay: 3000 }}
          navigation
          pagination={{ clickable: true }}
          slidesPerView={1}
        >

          {/* SLIDE 1 */}

          <SwiperSlide>

            <img
              src="./../img/1.jpg"
              alt="slide1"
              className="img-fluid w-100"
              style={{
                height: "auto",
                maxHeight: "85vh",
                objectFit: "contain",
                backgroundColor: "#f8f9fa",
              }}
            />

          </SwiperSlide>

          {/* SLIDE 2 */}

          <SwiperSlide>

            <img
              src="./../img/2.jpg"
              alt="slide2"
              className="img-fluid w-100"
              style={{
                height: "auto",
                maxHeight: "85vh",
                objectFit: "contain",
                backgroundColor: "#f8f9fa",
              }}
            />

          </SwiperSlide>

          {/* SLIDE 3 */}

          <SwiperSlide>

            <img
              src="./../img/3.jpeg"
              alt="slide3"
              className="img-fluid w-100"
              style={{
                height: "auto",
                maxHeight: "85vh",
                objectFit: "contain",
                backgroundColor: "#f8f9fa",
              }}
            />

          </SwiperSlide>

        </Swiper>

        {/* ================= HOW IT WORKS ================= */}

        <div className="container py-5">

          <div className="text-center mb-5">

            <h1 className="fw-bold display-6">
              How does it work?
            </h1>

          </div>

          <div className="row g-4">

            {/* SEARCH */}

            <div className="col-lg-4 col-md-6 col-12">

              <div className="card border-0 shadow-sm p-4 h-100 text-center">

                <img
                  src="./../img/search-b-icon.png"
                  alt="Search"
                  className="mx-auto img-fluid"
                  style={{
                    width: "70px",
                    height: "70px",
                    objectFit: "contain",
                  }}
                />

                <h4 className="mt-4 fw-bold">
                  Search
                </h4>

                <p className="text-muted mb-0">
                  Search and find trusted maids
                  available in your city.
                </p>

              </div>

            </div>

            {/* SHORTLIST */}

            <div className="col-lg-4 col-md-6 col-12">

              <div className="card border-0 shadow-sm p-4 h-100 text-center">

                <img
                  src="./../img/search-b--icon.png"
                  alt="Shortlist"
                  className="mx-auto img-fluid"
                  style={{
                    width: "70px",
                    height: "70px",
                    objectFit: "contain",
                  }}
                />

                <h4 className="mt-4 fw-bold">
                  Shortlist
                </h4>

                <p className="text-muted mb-0">
                  View maid profiles and shortlist
                  based on your preference.
                </p>

              </div>

            </div>

            {/* RELAX */}

            <div className="col-lg-4 col-md-6 col-12">

              <div className="card border-0 shadow-sm p-4 h-100 text-center">

                <img
                  src="./../img/relax-b--icon.png"
                  alt="Relax"
                  className="mx-auto img-fluid"
                  style={{
                    width: "70px",
                    height: "70px",
                    objectFit: "contain",
                  }}
                />

                <h4 className="mt-4 fw-bold">
                  Meet & Relax
                </h4>

                <p className="text-muted mb-0">
                  Hire trusted workers and enjoy
                  hassle-free services.
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* ================= FEATURED SERVICES ================= */}

        <div className="container py-5 text-center">

          <h5 className="text-success fw-bold">
            Our Featured Services
          </h5>

          <h2 className="fw-bold mb-3 display-6">
            Hire professionals trained
            specifically for your needs
          </h2>

          <p className="text-muted mb-5">
            Eco Home provides verified,
            professional and trusted workers.
          </p>

          <div className="row g-4 justify-content-center">

            {/* CARD 1 */}

            <div className="col-lg-3 col-md-6 col-12">

              <div className="card border-success shadow-sm p-4 h-100">

                <img
                  src="./../img/p1.png"
                  alt="Domestic Help"
                  className="mx-auto img-fluid"
                  style={{
                    height: "120px",
                    objectFit: "contain",
                  }}
                />

                <h5 className="mt-4 fw-bold">
                  Domestic Help
                </h5>

              </div>

            </div>

            {/* CARD 2 */}

            <div className="col-lg-3 col-md-6 col-12">

              <div className="card border-success shadow-sm p-4 h-100">

                <img
                  src="./../img/p2.png"
                  alt="Cook"
                  className="mx-auto img-fluid"
                  style={{
                    height: "120px",
                    objectFit: "contain",
                  }}
                />

                <h5 className="mt-4 fw-bold">
                  Chef / Cook
                </h5>

              </div>

            </div>

            {/* CARD 3 */}

            <div className="col-lg-3 col-md-6 col-12">

              <div className="card border-success shadow-sm p-4 h-100">

                <img
                  src="./../img/p3.png"
                  alt="Babysitter"
                  className="mx-auto img-fluid"
                  style={{
                    height: "120px",
                    objectFit: "contain",
                  }}
                />

                <h5 className="mt-4 fw-bold">
                  Babysitter / Japa
                </h5>

              </div>

            </div>

            {/* CARD 4 */}

            <div className="col-lg-3 col-md-6 col-12">

              <div className="card border-success shadow-sm p-4 h-100">

                <img
                  src="./../img/p5.png"
                  alt="Elderly Care"
                  className="mx-auto img-fluid"
                  style={{
                    height: "120px",
                    objectFit: "contain",
                  }}
                />

                <h5 className="mt-4 fw-bold">
                  Elderly Care
                </h5>

              </div>

            </div>

          </div>

        </div>

        {/* ================= TESTIMONIALS ================= */}

        <div className="bg-light py-5">

          <div className="container">

            <div className="text-center mb-5">

              <h1 className="fw-bold display-6">
                Testimonials
              </h1>

              <p className="text-muted">
                What our clients say
              </p>

            </div>

            <div className="row g-4">

              {/* TESTIMONIAL 1 */}

              <div className="col-lg-4 col-md-6 col-12">

                <div className="card shadow border-0 p-4 h-100">

                  <h5 className="fw-bold">
                    Saurav Josi
                  </h5>

                  <p className="text-muted mb-0">
                    Very professional and trusted
                    maid service platform.
                  </p>

                </div>

              </div>

              {/* TESTIMONIAL 2 */}

              <div className="col-lg-4 col-md-6 col-12">

                <div className="card shadow border-0 p-4 h-100">

                  <h5 className="fw-bold">
                    Ankita Mishra
                  </h5>

                  <p className="text-muted mb-0">
                    Excellent experience with
                    trained and supportive staff.
                  </p>

                </div>

              </div>

              {/* TESTIMONIAL 3 */}

              <div className="col-lg-4 col-md-6 col-12">

                <div className="card shadow border-0 p-4 h-100">

                  <h5 className="fw-bold">
                    Rahul Sharma
                  </h5>

                  <p className="text-muted mb-0">
                    Highly recommended for cook
                    and elderly care services.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* ================= FOOTER INFO ================= */}

        <div className="bg-success text-white py-5">

          <div className="container">

            <div className="row g-4 text-center">

              {/* WHY US */}

              <div className="col-lg-4 col-md-6 col-12">

                <div className="p-3 h-100">

                  <h2 className="fw-bold mb-3">
                    Why Choose Us
                  </h2>

                  <p className="mb-0">
                    Professional, trusted and
                    customizable maid services.
                  </p>

                </div>

              </div>

              {/* MISSION */}

              <div className="col-lg-4 col-md-6 col-12">

                <div className="p-3 h-100">

                  <h2 className="fw-bold mb-3">
                    Our Mission
                  </h2>

                  <p className="mb-0">
                    To provide healthy, hygienic
                    and quality housekeeping
                    services.
                  </p>

                </div>

              </div>

              {/* WHAT WE DO */}

              <div className="col-lg-4 col-md-6 col-12">

                <div className="p-3 h-100">

                  <h2 className="fw-bold mb-3">
                    What We Do
                  </h2>

                  <p className="mb-0">
                    We provide housekeeping,
                    cleaning and elderly care
                    services.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </React.Fragment>

  );

}