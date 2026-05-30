import React from "react";

export default function About() {

  return (

    <div>

      {/* HERO SECTION */}

      <div className="container-fluid bg-success text-white text-center py-5">

        <div className="container py-4 py-md-5">

          <h1 className="fw-bold display-5">
            About Us
          </h1>

          <p className="mt-3 fs-5">
            Trusted Maid Hiring Platform
          </p>

        </div>

      </div>

      {/* ABOUT CONTENT */}

      <div className="container py-4 py-md-5">

        <div className="row justify-content-center">

          <div className="col-lg-10">

            <div className="card border-0 shadow-sm rounded-4 p-4 p-md-5">

              <p className="fs-6 fs-md-5 text-muted lh-lg text-center text-md-start">

                We are one of the top maid hiring agencies in India,
                known for providing trusted and professional domestic
                helpers. Our mission is to connect families with skilled,
                experienced and verified maids who can make a positive
                difference in daily life.

                <br />
                <br />

                The care of your loved ones is extremely important,
                especially infants, children and elderly family members.
                We carefully screen each helper based on background,
                health condition, education and experience to ensure
                the right fit for your requirements.

              </p>

            </div>

          </div>

        </div>

      </div>

      {/* MISSION SECTION */}

      <div className="container pb-5">

        <div className="row align-items-center g-5">

          {/* LEFT CONTENT */}

          <div className="col-lg-6 col-12">

            <div className="pe-lg-4">

              <h2 className="fw-bold mb-4 text-center text-lg-start">
                Our Mission
              </h2>

              <p className="fs-6 fs-md-5 text-muted lh-lg text-center text-lg-start">

                Established in 2022, Eco Home is transforming the maid
                hiring process in India. Our goal is to provide trained,
                experienced and reliable helpers for every household.

                <br />
                <br />

                We offer a wide range of domestic services including
                housekeeping, babysitting, elderly care and cooking
                services. Our aim is to organize the domestic help
                sector while empowering and training workers for
                better opportunities and quality services.

              </p>

            </div>

          </div>

          {/* RIGHT IMAGE */}

          <div className="col-lg-6 col-12 text-center">

            <img
              src="./../img/digital.png"
              alt="Our Mission"
              className="img-fluid rounded-4 shadow-sm"
              style={{
                maxHeight: "450px",
                objectFit: "contain",
              }}
            />

          </div>

        </div>

      </div>

    </div>

  );

}